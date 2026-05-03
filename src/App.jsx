import { useState } from 'react'

function App() {
  const [roomName, setRoomName] = useState('')
  const [roomCode, setRoomCode] = useState('')
  const [showJoinModal, setShowJoinModal] = useState(false)

  const generateRoomCode = () => {
    return Math.random().toString(36).substring(2, 8).toUpperCase()
  }

  const handleCreateRoom = (e) => {
    e.preventDefault()
    const code = generateRoomCode()
    window.location.href = `/inj/room/${code}${roomName ? '?name=' + encodeURIComponent(roomName) : ''}`
  }

  const handleJoinRoom = (e) => {
    e.preventDefault()
    if (roomCode.trim()) {
      window.location.href = `/inj/room/${roomCode.trim().toUpperCase()}`
    }
  }

  return (
    <div className="relative min-h-screen flex flex-col bg-background">
      {/* Skip to main content */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-background focus:text-foreground focus:rounded-md focus:ring-2 focus:ring-ring">
        Skip to main content
      </a>

      {/* Background grid */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.015]"></div>
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 h-16 px-4 md:px-6 flex items-center justify-between gap-4 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => window.location.href = '/inj/'}
            className="group flex items-center gap-2.5 transition-opacity hover:opacity-80"
          >
            <img 
              alt="Watch4Gether" 
              width="36" 
              height="36"
              className="size-9 rounded-lg transition-transform duration-300 group-hover:scale-105"
              src="/inj/logo-512.webp"
            />
            <div className="hidden sm:block">
              <span className="block text-lg font-bold tracking-tight">Watch4Gether</span>
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground -mt-0.5">Watch Together</p>
            </div>
          </button>
        </div>
        
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowJoinModal(true)}
            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all h-8 rounded-md px-3 gap-2 border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            <span className="hidden sm:inline">Join Room</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main id="main-content" className="flex-1 pt-16 flex flex-col">
        {/* Hero Section */}
        <section className="relative w-full overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 sm:pt-24 lg:pt-32 pb-16 sm:pb-20">
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                </svg>
                <span className="text-sm font-medium text-primary">Free Forever • No Sign-up Required</span>
              </div>
            </div>

            <div className="text-center mb-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
                Watch Videos <span className="text-primary">Together</span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto">
                Create a room, share the code, and watch in perfect sync with friends anywhere
              </p>
            </div>
          </div>
        </section>

        {/* Create/Join Room Section */}
        <section className="w-full max-w-5xl mx-auto px-6 lg:px-8 pb-20 sm:pb-28">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {/* Create Room Card */}
            <div className="relative overflow-hidden rounded-xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 via-background to-background p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center size-10 rounded-xl bg-primary/10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M12 5v14"></path>
                    <path d="M5 12h14"></path>
                  </svg>
                </div>
                <h2 className="text-xl font-semibold">Create New Room</h2>
              </div>
              <p className="text-sm text-muted-foreground mb-6">
                Start a new watch party and invite your friends
              </p>
              <form onSubmit={handleCreateRoom} className="flex gap-3">
                <input
                  type="text"
                  placeholder="Enter room name..."
                  value={roomName}
                  onChange={(e) => setRoomName(e.target.value)}
                  className="flex-1 h-12 px-3 rounded-md border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 font-medium transition-colors"
                >
                  Create
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </button>
              </form>
            </div>

            {/* Join Room Card */}
            <div className="relative overflow-hidden rounded-xl border border-border bg-card/50 backdrop-blur-sm p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center size-10 rounded-xl bg-secondary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14 21 3"></path>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  </svg>
                </div>
                <h2 className="text-xl font-semibold">Join Room</h2>
              </div>
              <p className="text-sm text-muted-foreground mb-6">
                Enter a room code to join an existing watch party
              </p>
              <form onSubmit={handleJoinRoom}>
                <input
                  type="text"
                  placeholder="Enter room code..."
                  value={roomCode}
                  onChange={(e) => setRoomCode(e.target.value.toUpperCase())}
                  className="w-full h-12 px-3 rounded-md border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary mb-4"
                  maxLength="6"
                />
                <button
                  type="submit"
                  className="w-full h-12 px-6 rounded-md border bg-background hover:bg-accent hover:text-accent-foreground font-medium transition-colors"
                >
                  Join Room
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-20 sm:py-28 bg-secondary/30 border-y border-border/50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-sm font-medium text-primary uppercase tracking-wider">Features</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mt-4 mb-6">
                Everything You Need
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                Watch together with perfect sync, chat, and more
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: '🎬', title: 'Perfect Sync', desc: 'Watch in perfect sync with friends' },
                { icon: '💬', title: 'Live Chat', desc: 'Chat while you watch together' },
                { icon: '🔒', title: 'Private Rooms', desc: 'Secure private watch parties' },
                { icon: '🌐', title: 'Multi-Platform', desc: 'YouTube, Twitch, Kick & more' }
              ].map((feature, i) => (
                <div key={i} className="p-8 rounded-3xl border border-border/50 bg-card/30">
                  <div className="text-4xl mb-6">{feature.icon}</div>
                  <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-border/50 bg-background/50 backdrop-blur-sm py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2026 Watch4Gether. Free forever.</p>
          </div>
        </div>
      </footer>

      {/* Join Room Modal */}
      {showJoinModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm" onClick={() => setShowJoinModal(false)}>
          <div className="bg-background border border-border rounded-xl p-6 max-w-md w-full mx-4" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-xl font-semibold mb-4">Join Room</h3>
            <form onSubmit={(e) => { handleJoinRoom(e); setShowJoinModal(false); }}>
              <input
                type="text"
                placeholder="Enter room code..."
                value={roomCode}
                onChange={(e) => setRoomCode(e.target.value.toUpperCase())}
                className="w-full h-12 px-3 rounded-md border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary mb-4"
                maxLength="6"
                autoFocus
              />
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setShowJoinModal(false)}
                  className="flex-1 h-10 px-4 rounded-md border bg-background hover:bg-accent transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 h-10 px-4 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Join
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
