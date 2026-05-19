import http.server
import socketserver
import os
import sys
import re

PORT = 8005
ROOT = os.path.dirname(os.path.abspath(__file__))
FALLBACK = os.path.join(ROOT, "404.html")
INDEX = os.path.join(ROOT, "index.html")
ROOM_INDEX = os.path.join(ROOT, "room", "index.html")
ROOM_PATH_RE = re.compile(r"^/room/([A-Za-z0-9]+)/?$")
SPA_ROUTES = {
    "/privacy-policy",
    "/terms-of-use",
    "/data-protection",
    "/cookie-policy",
}


class SPAHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=ROOT, **kwargs)

    def translate_path(self, path):
        clean = path.split("?", 1)[0].split("#", 1)[0].rstrip("/")
        if not clean:
            clean = "/"
        if ROOM_PATH_RE.match(clean) and os.path.isfile(ROOM_INDEX):
            return ROOM_INDEX
        if clean in SPA_ROUTES and os.path.isfile(INDEX):
            return INDEX
        return super().translate_path(path)

    def send_error(self, code, message=None, explain=None):
        if code == 404 and os.path.isfile(FALLBACK):
            with open(FALLBACK, "rb") as f:
                content = f.read()
            self.send_response(200)
            self.send_header("Content-Type", "text/html; charset=utf-8")
            self.send_header("Content-Length", str(len(content)))
            self.end_headers()
            self.wfile.write(content)
            return
        super().send_error(code, message, explain)

    def copyfile(self, source, outputfile):
        try:
            super().copyfile(source, outputfile)
        except (ConnectionAbortedError, ConnectionResetError, BrokenPipeError):
            pass

    def handle_one_request(self):
        try:
            super().handle_one_request()
        except (ConnectionAbortedError, ConnectionResetError, BrokenPipeError):
            pass

    def log_error(self, format, *args):
        msg = format % args
        if "10053" in msg or "10054" in msg or "Broken pipe" in msg:
            return
        super().log_error(format, *args)


if __name__ == "__main__":
    port = int(sys.argv[1]) if len(sys.argv) > 1 else PORT
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", port), SPAHandler) as httpd:
        print(f"Serving {ROOT} at http://localhost:{port}")
        print("Press Ctrl+C to stop.")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nStopped.")
