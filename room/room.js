(function () {
    const DICT = {
        tr: {
            whos_watching: "Kim izliyor?",
            entry_subtitle: "Bir avatar seç ve partiye katılmak için adını yaz.",
            choose_avatar: "Avatar Seç",
            display_name: "Görünen Ad",
            enter_name_placeholder: "Adını gir…",
            enter_room: "Odaya Gir",
            session_local: "Oturumun local — hesap gerekmez.",
            name_required: "İsim gerekli",
            name_required_desc: "Diğerlerinin seni tanıması için bir ad gir.",
            got_it: "Tamam",
            entering_room: "Odaya Giriliyor…",
            welcome_msg: "Hoş geldin {{name}}!",
            nothing_playing: "Henüz hiçbir şey oynamıyor",
            nothing_playing_desc: "Yukarıya bir YouTube linki yapıştır veya birlikte izlemeye başlamak için aşağıdan bir platform seç",
            platforms: "Platformlar",
            chip_more: "Daha",
            chip_custom: "Özel",
            search_placeholder: "YouTube linki yapıştır veya ara…",
            share_room: "Odayı Paylaş",
            tab_playlist: "Oynatma Listesi",
            tab_history: "Geçmiş",
            playlist_empty: "Oynatma listesi boş",
            playlist_empty_desc: "İzlemek için bir şey ekle",
            history_empty: "Geçmiş boş",
            history_empty_desc: "Katıldığın odalar burada görünecek",
            chat_activity: "Sohbet Aktivitesi",
            room_created: "🎉 {{name}} odayı oluşturdu",
            share_code: "Arkadaşlarınla <strong>{{code}}</strong> kodunu paylaş",
            message_placeholder: "Odaya mesaj…",
            online: "Çevrimiçi",
            invite_friends: "Arkadaş Davet Et",
            preview_you: "SEN",
            room_members: "Oda Üyeleri",
            host: "Sahip",
            moderator: "Moderatör",
            room_settings: "Oda Ayarları",
            settings_subtitle: "İzleme deneyimini yapılandır",
            section_general: "Genel",
            room_visibility: "Oda Görünürlüğü",
            room_visibility_desc: "Kim bu odayı bulabilir",
            visibility_public: "Herkese açık",
            visibility_private: "Özel (sadece link)",
            visibility_friends: "Sadece arkadaşlar",
            auto_play_next: "Otomatik Sıradaki",
            auto_play_next_desc: "Listeden sıradaki videoyu oynat",
            section_permissions: "İzinler",
            playback_control: "Oynatma Kontrolü",
            playback_control_desc: "Kim oynat/duraklat/ileri-geri yapabilir",
            permission_host_only: "Sadece sahip",
            permission_everyone: "Herkes",
            permission_trusted: "Güvenilir üyeler",
            search_and_add: "Ara ve Ekle",
            search_and_add_desc: "Kim listeye video ekleyebilir",
            room_lock: "Oda Kilidi",
            room_lock_desc: "Yeni üyelerin katılmasını engelle",
            section_sync_video: "Senkron & Video",
            sync_sensitivity: "Senkron Hassasiyeti",
            sync_sensitivity_desc: "Düşük değer daha hassas",
            max_resolution: "Maks. Çözünürlük",
            max_resolution_desc: "Sistem geneli kalite limiti",
            auto_4k: "Otomatik (4K)",
            section_appearance: "Görünüm",
            chat_font_size: "Sohbet Yazı Boyutu",
            chat_font_size_desc: "Rahat okuma",
            size_small: "Küçük",
            size_medium: "Orta",
            size_large: "Büyük",
            oled_black: "OLED Saf Siyah",
            oled_black_desc: "AMOLED ekranlar için",
            btn_cancel: "İptal",
            btn_apply: "Değişiklikleri Uygula",
            app_modal_title: "MoviesParty Uygulamasını Al",
            app_modal_subtitle: "30+ platformda mükemmel senkron ile<br>arkadaşlarınla birlikte izle.",
            works_on: "Çalıştığı yerler",
            plus_more: "+24 daha",
            feat_sync: "Mükemmel senkron",
            feat_sync_desc: "herkes her zaman aynı kareyi görür",
            feat_secure: "Güvenli & gizli",
            feat_secure_desc: "şifreli, veri saklanmaz",
            feat_anyone: "Herkesle izle",
            feat_anyone_desc: "tek linkle arkadaşlarını davet et",
            people_watching: "kişi şu an birlikte izliyor",
            download_btn: "Ücretsiz İndir — Bedava",
            soon_badge: "Yakında",
            platform_detected: "{{platform}} Odası Tespit Edildi",
            platform_set_for: "Bu oda <strong>{{platform}}</strong> için ayarlandı.<br>Bu içeriği birlikte izlemek için masaüstü uygulamamız gerekiyor.",
            link_copied: "LİNK KOPYALANDI!",
            code_copied: "KOPYALANDI!",
            title_leave: "Odadan çık",
            title_home: "Ana sayfa",
            title_members: "Üyeler",
            title_settings: "Ayarlar",
            title_mic: "Mikrofonu Aç/Kapat",
            title_cam: "Kamerayı Aç/Kapat",
            room_suffix: "'in Odası",
            hint_expand: "Büyütmek için tıkla",
            hint_collapse: "Küçültmek için tıkla",
        },
        en: {
            whos_watching: "Who's watching?",
            entry_subtitle: "Pick an avatar and set your name to join the party.",
            choose_avatar: "Choose Avatar",
            display_name: "Display Name",
            enter_name_placeholder: "Enter your name…",
            enter_room: "Enter Room",
            session_local: "Your session stays local — no account needed.",
            name_required: "Name required",
            name_required_desc: "Please enter a display name so others know who you are.",
            got_it: "Got it",
            entering_room: "Entering Room…",
            welcome_msg: "Welcome {{name}}!",
            nothing_playing: "Nothing playing yet",
            nothing_playing_desc: "Paste a YouTube link above or pick a platform below to start watching together",
            platforms: "Platforms",
            chip_more: "More",
            chip_custom: "Custom",
            search_placeholder: "Paste a YouTube link or search…",
            share_room: "Share Room",
            tab_playlist: "Playlist",
            tab_history: "History",
            playlist_empty: "Playlist is empty",
            playlist_empty_desc: "Add something to watch",
            history_empty: "History is empty",
            history_empty_desc: "Rooms you join will appear here",
            chat_activity: "Chat Activity",
            room_created: "🎉 {{name}} created the room",
            share_code: "Share code <strong>{{code}}</strong> with friends",
            message_placeholder: "Message the room…",
            online: "Online",
            invite_friends: "Invite Friends",
            preview_you: "YOU",
            room_members: "Room Members",
            host: "Host",
            moderator: "Moderator",
            room_settings: "Room Settings",
            settings_subtitle: "Configure your watching experience",
            section_general: "General",
            room_visibility: "Room Visibility",
            room_visibility_desc: "Who can find this room",
            visibility_public: "Public",
            visibility_private: "Private (Link only)",
            visibility_friends: "Friends only",
            auto_play_next: "Auto-Play Next",
            auto_play_next_desc: "Play next video from playlist",
            section_permissions: "Permissions",
            playback_control: "Playback Control",
            playback_control_desc: "Who can play/pause/seek",
            permission_host_only: "Host only",
            permission_everyone: "Everyone",
            permission_trusted: "Trusted members",
            search_and_add: "Search & Add",
            search_and_add_desc: "Who can add videos to playlist",
            room_lock: "Room Lock",
            room_lock_desc: "Prevent new members from joining",
            section_sync_video: "Sync & Video",
            sync_sensitivity: "Sync Sensitivity",
            sync_sensitivity_desc: "Lower is more precise",
            max_resolution: "Max Resolution",
            max_resolution_desc: "System-wide quality limit",
            auto_4k: "Auto (4K)",
            section_appearance: "Appearance",
            chat_font_size: "Chat Font Size",
            chat_font_size_desc: "Comfortable reading",
            size_small: "Small",
            size_medium: "Medium",
            size_large: "Large",
            oled_black: "OLED Pure Black",
            oled_black_desc: "For AMOLED screens",
            btn_cancel: "Cancel",
            btn_apply: "Apply Changes",
            app_modal_title: "Get the MoviesParty App",
            app_modal_subtitle: "Watch together on 30+ streaming platforms<br>with perfect sync & no buffering.",
            works_on: "Works on",
            plus_more: "+24 more",
            feat_sync: "Perfect sync",
            feat_sync_desc: "everyone sees the same frame, always",
            feat_secure: "Secure & private",
            feat_secure_desc: "encrypted, no data stored",
            feat_anyone: "Watch with anyone",
            feat_anyone_desc: "invite friends with a single link",
            people_watching: "people watching together right now",
            download_btn: "Download Free — It's Free",
            soon_badge: "Soon",
            platform_detected: "{{platform}} Room Detected",
            platform_set_for: "This room is set for <strong>{{platform}}</strong>.<br>You need our desktop app to watch this content together.",
            link_copied: "LINK COPIED!",
            code_copied: "COPIED!",
            title_leave: "Leave room",
            title_home: "Home",
            title_members: "Members",
            title_settings: "Settings",
            title_mic: "Toggle Microphone",
            title_cam: "Toggle Camera",
            room_suffix: "'s Room",
            hint_expand: "Click to enlarge",
            hint_collapse: "Click to shrink",
        },
        es: {
            whos_watching: "¿Quién está viendo?",
            entry_subtitle: "Elige un avatar y escribe tu nombre para unirte a la fiesta.",
            choose_avatar: "Elegir avatar",
            display_name: "Nombre visible",
            enter_name_placeholder: "Escribe tu nombre…",
            enter_room: "Entrar a la sala",
            session_local: "Tu sesión es local — no hace falta cuenta.",
            name_required: "Nombre requerido",
            name_required_desc: "Por favor escribe un nombre para que los demás te reconozcan.",
            got_it: "Entendido",
            entering_room: "Entrando a la sala…",
            welcome_msg: "¡Bienvenido {{name}}!",
            nothing_playing: "Nada reproduciéndose aún",
            nothing_playing_desc: "Pega un enlace de YouTube arriba o elige una plataforma abajo para empezar a ver juntos",
            platforms: "Plataformas",
            chip_more: "Más",
            chip_custom: "Personalizado",
            search_placeholder: "Pega un enlace de YouTube o busca…",
            share_room: "Compartir sala",
            tab_playlist: "Lista",
            tab_history: "Historial",
            playlist_empty: "La lista está vacía",
            playlist_empty_desc: "Añade algo para ver",
            history_empty: "Historial vacío",
            history_empty_desc: "Las salas a las que te unas aparecerán aquí",
            chat_activity: "Actividad del chat",
            room_created: "🎉 {{name}} creó la sala",
            share_code: "Comparte el código <strong>{{code}}</strong> con tus amigos",
            message_placeholder: "Mensaje a la sala…",
            online: "En línea",
            invite_friends: "Invitar amigos",
            preview_you: "TÚ",
            room_members: "Miembros de la sala",
            host: "Anfitrión",
            moderator: "Moderador",
            room_settings: "Ajustes de la sala",
            settings_subtitle: "Configura tu experiencia de visualización",
            section_general: "General",
            room_visibility: "Visibilidad de la sala",
            room_visibility_desc: "Quién puede encontrar esta sala",
            visibility_public: "Pública",
            visibility_private: "Privada (solo enlace)",
            visibility_friends: "Solo amigos",
            auto_play_next: "Reproducir siguiente",
            auto_play_next_desc: "Reproducir el siguiente video de la lista",
            section_permissions: "Permisos",
            playback_control: "Control de reproducción",
            playback_control_desc: "Quién puede reproducir/pausar/avanzar",
            permission_host_only: "Solo anfitrión",
            permission_everyone: "Todos",
            permission_trusted: "Miembros de confianza",
            search_and_add: "Buscar y agregar",
            search_and_add_desc: "Quién puede agregar videos a la lista",
            room_lock: "Bloqueo de sala",
            room_lock_desc: "Evita que se unan nuevos miembros",
            section_sync_video: "Sincronización y video",
            sync_sensitivity: "Sensibilidad de sincro",
            sync_sensitivity_desc: "Menor es más preciso",
            max_resolution: "Resolución máxima",
            max_resolution_desc: "Límite de calidad del sistema",
            auto_4k: "Auto (4K)",
            section_appearance: "Apariencia",
            chat_font_size: "Tamaño de fuente del chat",
            chat_font_size_desc: "Lectura cómoda",
            size_small: "Pequeño",
            size_medium: "Medio",
            size_large: "Grande",
            oled_black: "Negro puro OLED",
            oled_black_desc: "Para pantallas AMOLED",
            btn_cancel: "Cancelar",
            btn_apply: "Aplicar cambios",
            app_modal_title: "Obtén la app MoviesParty",
            app_modal_subtitle: "Mira juntos en más de 30 plataformas<br>con sincronía perfecta y sin buffering.",
            works_on: "Funciona en",
            plus_more: "+24 más",
            feat_sync: "Sincronía perfecta",
            feat_sync_desc: "todos ven el mismo cuadro, siempre",
            feat_secure: "Seguro y privado",
            feat_secure_desc: "cifrado, no se guardan datos",
            feat_anyone: "Mira con cualquiera",
            feat_anyone_desc: "invita amigos con un solo enlace",
            people_watching: "personas viendo juntas ahora mismo",
            download_btn: "Descarga gratis",
            soon_badge: "Pronto",
            platform_detected: "Sala de {{platform}} detectada",
            platform_set_for: "Esta sala está configurada para <strong>{{platform}}</strong>.<br>Necesitas nuestra app de escritorio para ver este contenido juntos.",
            link_copied: "¡ENLACE COPIADO!",
            code_copied: "¡COPIADO!",
            title_leave: "Salir de la sala",
            title_home: "Inicio",
            title_members: "Miembros",
            title_settings: "Ajustes",
            title_mic: "Activar micrófono",
            title_cam: "Activar cámara",
            room_suffix: " — Sala de ",
            hint_expand: "Clic para ampliar",
            hint_collapse: "Clic para reducir",
        },
        pt: {
            whos_watching: "Quem está assistindo?",
            entry_subtitle: "Escolha um avatar e digite seu nome para entrar.",
            choose_avatar: "Escolher avatar",
            display_name: "Nome visível",
            enter_name_placeholder: "Digite seu nome…",
            enter_room: "Entrar na sala",
            session_local: "Sua sessão fica local — sem conta.",
            name_required: "Nome necessário",
            name_required_desc: "Digite um nome para os outros te reconhecerem.",
            got_it: "Entendi",
            entering_room: "Entrando na sala…",
            welcome_msg: "Bem-vindo {{name}}!",
            nothing_playing: "Nada tocando ainda",
            nothing_playing_desc: "Cole um link do YouTube acima ou escolha uma plataforma abaixo para começar a assistir juntos",
            platforms: "Plataformas",
            chip_more: "Mais",
            chip_custom: "Personalizado",
            search_placeholder: "Cole um link do YouTube ou pesquise…",
            share_room: "Compartilhar sala",
            tab_playlist: "Lista",
            tab_history: "Histórico",
            playlist_empty: "Lista vazia",
            playlist_empty_desc: "Adicione algo para assistir",
            history_empty: "Histórico vazio",
            history_empty_desc: "As salas em que entrar aparecerão aqui",
            chat_activity: "Atividade do chat",
            room_created: "🎉 {{name}} criou a sala",
            share_code: "Compartilhe o código <strong>{{code}}</strong> com seus amigos",
            message_placeholder: "Mensagem para a sala…",
            online: "Online",
            invite_friends: "Convidar amigos",
            preview_you: "VOCÊ",
            room_members: "Membros da sala",
            host: "Anfitrião",
            moderator: "Moderador",
            room_settings: "Configurações da sala",
            settings_subtitle: "Configure sua experiência",
            section_general: "Geral",
            room_visibility: "Visibilidade",
            room_visibility_desc: "Quem pode encontrar esta sala",
            visibility_public: "Pública",
            visibility_private: "Privada (só link)",
            visibility_friends: "Só amigos",
            auto_play_next: "Tocar próximo",
            auto_play_next_desc: "Tocar próximo vídeo da lista",
            section_permissions: "Permissões",
            playback_control: "Controle de reprodução",
            playback_control_desc: "Quem pode tocar/pausar/avançar",
            permission_host_only: "Só anfitrião",
            permission_everyone: "Todos",
            permission_trusted: "Membros confiáveis",
            search_and_add: "Pesquisar e adicionar",
            search_and_add_desc: "Quem pode adicionar vídeos à lista",
            room_lock: "Bloquear sala",
            room_lock_desc: "Impedir novos membros",
            section_sync_video: "Sincronia e vídeo",
            sync_sensitivity: "Sensibilidade",
            sync_sensitivity_desc: "Menor é mais preciso",
            max_resolution: "Resolução máxima",
            max_resolution_desc: "Limite global de qualidade",
            auto_4k: "Auto (4K)",
            section_appearance: "Aparência",
            chat_font_size: "Tamanho da fonte do chat",
            chat_font_size_desc: "Leitura confortável",
            size_small: "Pequeno",
            size_medium: "Médio",
            size_large: "Grande",
            oled_black: "Preto puro OLED",
            oled_black_desc: "Para telas AMOLED",
            btn_cancel: "Cancelar",
            btn_apply: "Aplicar mudanças",
            app_modal_title: "Baixe o app MoviesParty",
            app_modal_subtitle: "Assista junto em mais de 30 plataformas<br>com sincronia perfeita e sem buffering.",
            works_on: "Funciona em",
            plus_more: "+24 mais",
            feat_sync: "Sincronia perfeita",
            feat_sync_desc: "todos veem o mesmo quadro, sempre",
            feat_secure: "Seguro e privado",
            feat_secure_desc: "criptografado, sem dados salvos",
            feat_anyone: "Assista com qualquer um",
            feat_anyone_desc: "convide amigos com um link",
            people_watching: "pessoas assistindo juntas agora",
            download_btn: "Baixar grátis",
            soon_badge: "Em breve",
            platform_detected: "Sala {{platform}} detectada",
            platform_set_for: "Esta sala é para <strong>{{platform}}</strong>.<br>Você precisa do app desktop para assistir junto.",
            link_copied: "LINK COPIADO!",
            code_copied: "COPIADO!",
            title_leave: "Sair da sala",
            title_home: "Início",
            title_members: "Membros",
            title_settings: "Configurações",
            title_mic: "Ativar microfone",
            title_cam: "Ativar câmera",
            room_suffix: " — Sala de ",
            hint_expand: "Clique para ampliar",
            hint_collapse: "Clique para reduzir",
        },
        fr: {
            whos_watching: "Qui regarde ?",
            entry_subtitle: "Choisis un avatar et entre ton nom pour rejoindre.",
            choose_avatar: "Choisir un avatar",
            display_name: "Nom affiché",
            enter_name_placeholder: "Entre ton nom…",
            enter_room: "Entrer dans la salle",
            session_local: "Ta session reste locale — pas besoin de compte.",
            name_required: "Nom requis",
            name_required_desc: "Entre un nom pour que les autres te reconnaissent.",
            got_it: "OK",
            entering_room: "Entrée dans la salle…",
            welcome_msg: "Bienvenue {{name}} !",
            nothing_playing: "Rien ne joue encore",
            nothing_playing_desc: "Colle un lien YouTube ci-dessus ou choisis une plateforme ci-dessous pour commencer",
            platforms: "Plateformes",
            chip_more: "Plus",
            chip_custom: "Personnalisé",
            search_placeholder: "Colle un lien YouTube ou cherche…",
            share_room: "Partager la salle",
            tab_playlist: "Liste",
            tab_history: "Historique",
            playlist_empty: "La liste est vide",
            playlist_empty_desc: "Ajoute quelque chose à regarder",
            history_empty: "Historique vide",
            history_empty_desc: "Les salles rejointes apparaîtront ici",
            chat_activity: "Activité du chat",
            room_created: "🎉 {{name}} a créé la salle",
            share_code: "Partage le code <strong>{{code}}</strong> avec tes amis",
            message_placeholder: "Message à la salle…",
            online: "En ligne",
            invite_friends: "Inviter des amis",
            preview_you: "TOI",
            room_members: "Membres de la salle",
            host: "Hôte",
            moderator: "Modérateur",
            room_settings: "Paramètres de la salle",
            settings_subtitle: "Configure ton expérience",
            section_general: "Général",
            room_visibility: "Visibilité",
            room_visibility_desc: "Qui peut trouver cette salle",
            visibility_public: "Publique",
            visibility_private: "Privée (lien seul)",
            visibility_friends: "Amis seulement",
            auto_play_next: "Lecture auto suivante",
            auto_play_next_desc: "Jouer la vidéo suivante de la liste",
            section_permissions: "Autorisations",
            playback_control: "Contrôle lecture",
            playback_control_desc: "Qui peut jouer/pause/avancer",
            permission_host_only: "Hôte seul",
            permission_everyone: "Tout le monde",
            permission_trusted: "Membres de confiance",
            search_and_add: "Chercher et ajouter",
            search_and_add_desc: "Qui peut ajouter des vidéos",
            room_lock: "Verrouiller la salle",
            room_lock_desc: "Empêcher les nouveaux membres",
            section_sync_video: "Sync et vidéo",
            sync_sensitivity: "Sensibilité sync",
            sync_sensitivity_desc: "Plus bas = plus précis",
            max_resolution: "Résolution max",
            max_resolution_desc: "Limite globale de qualité",
            auto_4k: "Auto (4K)",
            section_appearance: "Apparence",
            chat_font_size: "Taille du texte chat",
            chat_font_size_desc: "Lecture confortable",
            size_small: "Petit",
            size_medium: "Moyen",
            size_large: "Grand",
            oled_black: "Noir pur OLED",
            oled_black_desc: "Pour écrans AMOLED",
            btn_cancel: "Annuler",
            btn_apply: "Appliquer",
            app_modal_title: "Obtenir l'app MoviesParty",
            app_modal_subtitle: "Regarde ensemble sur 30+ plateformes<br>avec sync parfaite, sans buffering.",
            works_on: "Fonctionne avec",
            plus_more: "+24 de plus",
            feat_sync: "Sync parfaite",
            feat_sync_desc: "tout le monde voit la même image",
            feat_secure: "Sûr et privé",
            feat_secure_desc: "chiffré, aucune donnée stockée",
            feat_anyone: "Regarde avec qui tu veux",
            feat_anyone_desc: "invite tes amis avec un lien",
            people_watching: "personnes regardent ensemble maintenant",
            download_btn: "Télécharger gratuit",
            soon_badge: "Bientôt",
            platform_detected: "Salle {{platform}} détectée",
            platform_set_for: "Cette salle est pour <strong>{{platform}}</strong>.<br>Tu as besoin de l'app pour regarder ensemble.",
            link_copied: "LIEN COPIÉ !",
            code_copied: "COPIÉ !",
            title_leave: "Quitter la salle",
            title_home: "Accueil",
            title_members: "Membres",
            title_settings: "Paramètres",
            title_mic: "Activer micro",
            title_cam: "Activer caméra",
            room_suffix: " — Salle de ",
            hint_expand: "Cliquer pour agrandir",
            hint_collapse: "Cliquer pour réduire",
        },
        de: {
            whos_watching: "Wer schaut?",
            entry_subtitle: "Wähle einen Avatar und gib deinen Namen ein.",
            choose_avatar: "Avatar wählen",
            display_name: "Anzeigename",
            enter_name_placeholder: "Namen eingeben…",
            enter_room: "Raum betreten",
            session_local: "Deine Sitzung bleibt lokal — kein Konto nötig.",
            name_required: "Name erforderlich",
            name_required_desc: "Bitte gib einen Namen ein, damit andere dich erkennen.",
            got_it: "OK",
            entering_room: "Raum wird betreten…",
            welcome_msg: "Willkommen {{name}}!",
            nothing_playing: "Nichts läuft gerade",
            nothing_playing_desc: "Füge oben einen YouTube-Link ein oder wähle unten eine Plattform",
            platforms: "Plattformen",
            chip_more: "Mehr",
            chip_custom: "Eigene",
            search_placeholder: "YouTube-Link einfügen oder suchen…",
            share_room: "Raum teilen",
            tab_playlist: "Playlist",
            tab_history: "Verlauf",
            playlist_empty: "Playlist leer",
            playlist_empty_desc: "Füge etwas zum Anschauen hinzu",
            history_empty: "Verlauf leer",
            history_empty_desc: "Beigetretene Räume erscheinen hier",
            chat_activity: "Chat-Aktivität",
            room_created: "🎉 {{name}} hat den Raum erstellt",
            share_code: "Teile den Code <strong>{{code}}</strong> mit Freunden",
            message_placeholder: "Nachricht an den Raum…",
            online: "Online",
            invite_friends: "Freunde einladen",
            preview_you: "DU",
            room_members: "Raum-Mitglieder",
            host: "Host",
            moderator: "Moderator",
            room_settings: "Raum-Einstellungen",
            settings_subtitle: "Konfiguriere dein Erlebnis",
            section_general: "Allgemein",
            room_visibility: "Sichtbarkeit",
            room_visibility_desc: "Wer den Raum finden kann",
            visibility_public: "Öffentlich",
            visibility_private: "Privat (nur Link)",
            visibility_friends: "Nur Freunde",
            auto_play_next: "Auto-Play Nächstes",
            auto_play_next_desc: "Nächstes Video aus Playlist abspielen",
            section_permissions: "Berechtigungen",
            playback_control: "Wiedergabesteuerung",
            playback_control_desc: "Wer Play/Pause/Spulen darf",
            permission_host_only: "Nur Host",
            permission_everyone: "Jeder",
            permission_trusted: "Vertraute Mitglieder",
            search_and_add: "Suchen & Hinzufügen",
            search_and_add_desc: "Wer Videos hinzufügen darf",
            room_lock: "Raum sperren",
            room_lock_desc: "Neue Mitglieder blockieren",
            section_sync_video: "Sync & Video",
            sync_sensitivity: "Sync-Empfindlichkeit",
            sync_sensitivity_desc: "Niedriger = präziser",
            max_resolution: "Max. Auflösung",
            max_resolution_desc: "Systemweites Qualitätslimit",
            auto_4k: "Auto (4K)",
            section_appearance: "Darstellung",
            chat_font_size: "Chat-Schriftgröße",
            chat_font_size_desc: "Bequemes Lesen",
            size_small: "Klein",
            size_medium: "Mittel",
            size_large: "Groß",
            oled_black: "OLED reines Schwarz",
            oled_black_desc: "Für AMOLED-Displays",
            btn_cancel: "Abbrechen",
            btn_apply: "Übernehmen",
            app_modal_title: "Hol dir die MoviesParty-App",
            app_modal_subtitle: "Schaut zusammen auf 30+ Plattformen<br>mit perfekter Sync, ohne Buffering.",
            works_on: "Funktioniert mit",
            plus_more: "+24 mehr",
            feat_sync: "Perfekte Sync",
            feat_sync_desc: "alle sehen denselben Frame",
            feat_secure: "Sicher & privat",
            feat_secure_desc: "verschlüsselt, keine Daten gespeichert",
            feat_anyone: "Mit jedem schauen",
            feat_anyone_desc: "Freunde mit einem Link einladen",
            people_watching: "Personen schauen gerade zusammen",
            download_btn: "Kostenlos herunterladen",
            soon_badge: "Bald",
            platform_detected: "{{platform}}-Raum erkannt",
            platform_set_for: "Dieser Raum ist für <strong>{{platform}}</strong>.<br>Du brauchst unsere Desktop-App, um mitzuschauen.",
            link_copied: "LINK KOPIERT!",
            code_copied: "KOPIERT!",
            title_leave: "Raum verlassen",
            title_home: "Home",
            title_members: "Mitglieder",
            title_settings: "Einstellungen",
            title_mic: "Mikro umschalten",
            title_cam: "Kamera umschalten",
            room_suffix: "s Raum",
            hint_expand: "Zum Vergrößern klicken",
            hint_collapse: "Zum Verkleinern klicken",
        },
        ja: {
            whos_watching: "誰が見ていますか？",
            entry_subtitle: "アバターを選び、名前を入力してパーティーに参加。",
            choose_avatar: "アバターを選ぶ",
            display_name: "表示名",
            enter_name_placeholder: "名前を入力…",
            enter_room: "ルームに入る",
            session_local: "セッションはローカル — アカウント不要。",
            name_required: "名前が必要です",
            name_required_desc: "他のメンバーが認識できるように名前を入力してください。",
            got_it: "OK",
            entering_room: "ルームに入っています…",
            welcome_msg: "ようこそ {{name}}！",
            nothing_playing: "まだ何も再生していません",
            nothing_playing_desc: "YouTubeリンクを貼るか、下のプラットフォームを選んで一緒に見始めよう",
            platforms: "プラットフォーム",
            chip_more: "もっと",
            chip_custom: "カスタム",
            search_placeholder: "YouTubeリンクを貼るか検索…",
            share_room: "ルームを共有",
            tab_playlist: "プレイリスト",
            tab_history: "履歴",
            playlist_empty: "プレイリストは空です",
            playlist_empty_desc: "見るものを追加",
            history_empty: "履歴は空です",
            history_empty_desc: "参加したルームがここに表示されます",
            chat_activity: "チャット活動",
            room_created: "🎉 {{name}} がルームを作成しました",
            share_code: "コード <strong>{{code}}</strong> を友達と共有",
            message_placeholder: "ルームへのメッセージ…",
            online: "オンライン",
            invite_friends: "友達を招待",
            preview_you: "あなた",
            room_members: "ルームメンバー",
            host: "ホスト",
            moderator: "モデレーター",
            room_settings: "ルーム設定",
            settings_subtitle: "視聴体験を設定",
            section_general: "一般",
            room_visibility: "ルームの公開設定",
            room_visibility_desc: "誰がこのルームを見つけられるか",
            visibility_public: "公開",
            visibility_private: "プライベート（リンクのみ）",
            visibility_friends: "友達のみ",
            auto_play_next: "次を自動再生",
            auto_play_next_desc: "プレイリストの次の動画を再生",
            section_permissions: "権限",
            playback_control: "再生コントロール",
            playback_control_desc: "再生・一時停止・シーク権限",
            permission_host_only: "ホストのみ",
            permission_everyone: "全員",
            permission_trusted: "信頼メンバー",
            search_and_add: "検索と追加",
            search_and_add_desc: "プレイリストに追加できる人",
            room_lock: "ルームロック",
            room_lock_desc: "新規メンバーの参加を防ぐ",
            section_sync_video: "同期と動画",
            sync_sensitivity: "同期感度",
            sync_sensitivity_desc: "低いほど精密",
            max_resolution: "最大解像度",
            max_resolution_desc: "システム全体の品質制限",
            auto_4k: "自動 (4K)",
            section_appearance: "外観",
            chat_font_size: "チャット文字サイズ",
            chat_font_size_desc: "快適な読みやすさ",
            size_small: "小",
            size_medium: "中",
            size_large: "大",
            oled_black: "OLED純粋な黒",
            oled_black_desc: "AMOLED画面用",
            btn_cancel: "キャンセル",
            btn_apply: "変更を適用",
            app_modal_title: "MoviesPartyアプリを入手",
            app_modal_subtitle: "30以上のプラットフォームで完璧な同期で一緒に視聴<br>バッファリングなし。",
            works_on: "対応プラットフォーム",
            plus_more: "+24以上",
            feat_sync: "完璧な同期",
            feat_sync_desc: "全員が常に同じフレームを見る",
            feat_secure: "安全＆プライベート",
            feat_secure_desc: "暗号化、データ保存なし",
            feat_anyone: "誰とでも視聴",
            feat_anyone_desc: "リンク一つで友達を招待",
            people_watching: "人が今一緒に視聴中",
            download_btn: "無料でダウンロード",
            soon_badge: "近日",
            platform_detected: "{{platform}}ルーム検出",
            platform_set_for: "このルームは<strong>{{platform}}</strong>用に設定されています。<br>一緒に視聴するにはデスクトップアプリが必要です。",
            link_copied: "リンクをコピーしました！",
            code_copied: "コピーしました！",
            title_leave: "ルームを退出",
            title_home: "ホーム",
            title_members: "メンバー",
            title_settings: "設定",
            title_mic: "マイクの切替",
            title_cam: "カメラの切替",
            room_suffix: " のルーム",
            hint_expand: "クリックして拡大",
            hint_collapse: "クリックして縮小",
        },
        ko: {
            whos_watching: "누가 시청 중인가요?",
            entry_subtitle: "아바타를 고르고 이름을 입력해 파티에 참여하세요.",
            choose_avatar: "아바타 선택",
            display_name: "표시 이름",
            enter_name_placeholder: "이름 입력…",
            enter_room: "룸 입장",
            session_local: "세션은 로컬에 저장 — 계정 불필요.",
            name_required: "이름 필요",
            name_required_desc: "다른 사람이 알아볼 수 있도록 이름을 입력하세요.",
            got_it: "확인",
            entering_room: "룸에 입장 중…",
            welcome_msg: "환영합니다 {{name}}님!",
            nothing_playing: "아직 재생 중인 것이 없습니다",
            nothing_playing_desc: "위에 YouTube 링크를 붙여넣거나 아래에서 플랫폼을 선택하여 함께 시청을 시작하세요",
            platforms: "플랫폼",
            chip_more: "더보기",
            chip_custom: "사용자 지정",
            search_placeholder: "YouTube 링크를 붙여넣거나 검색…",
            share_room: "룸 공유",
            tab_playlist: "플레이리스트",
            tab_history: "기록",
            playlist_empty: "플레이리스트가 비어있습니다",
            playlist_empty_desc: "볼 것을 추가하세요",
            history_empty: "기록이 비어있습니다",
            history_empty_desc: "참여한 룸이 여기에 표시됩니다",
            chat_activity: "채팅 활동",
            room_created: "🎉 {{name}}님이 룸을 만들었습니다",
            share_code: "코드 <strong>{{code}}</strong>를 친구들과 공유하세요",
            message_placeholder: "룸에 메시지…",
            online: "온라인",
            invite_friends: "친구 초대",
            preview_you: "나",
            room_members: "룸 멤버",
            host: "호스트",
            moderator: "모더레이터",
            room_settings: "룸 설정",
            settings_subtitle: "시청 경험을 구성하세요",
            section_general: "일반",
            room_visibility: "룸 공개 범위",
            room_visibility_desc: "누가 이 룸을 찾을 수 있는지",
            visibility_public: "공개",
            visibility_private: "비공개 (링크만)",
            visibility_friends: "친구만",
            auto_play_next: "다음 자동 재생",
            auto_play_next_desc: "플레이리스트의 다음 비디오 재생",
            section_permissions: "권한",
            playback_control: "재생 제어",
            playback_control_desc: "재생/일시정지/탐색 권한",
            permission_host_only: "호스트만",
            permission_everyone: "모두",
            permission_trusted: "신뢰 멤버",
            search_and_add: "검색 및 추가",
            search_and_add_desc: "플레이리스트에 비디오 추가 권한",
            room_lock: "룸 잠금",
            room_lock_desc: "새 멤버 차단",
            section_sync_video: "동기화 및 비디오",
            sync_sensitivity: "동기화 감도",
            sync_sensitivity_desc: "낮을수록 정밀",
            max_resolution: "최대 해상도",
            max_resolution_desc: "시스템 전체 품질 제한",
            auto_4k: "자동 (4K)",
            section_appearance: "외관",
            chat_font_size: "채팅 글꼴 크기",
            chat_font_size_desc: "편안한 읽기",
            size_small: "작게",
            size_medium: "보통",
            size_large: "크게",
            oled_black: "OLED 순수 블랙",
            oled_black_desc: "AMOLED 화면용",
            btn_cancel: "취소",
            btn_apply: "변경사항 적용",
            app_modal_title: "MoviesParty 앱 받기",
            app_modal_subtitle: "30개 이상의 플랫폼에서 완벽한 동기화로 함께 시청<br>버퍼링 없음.",
            works_on: "지원 플랫폼",
            plus_more: "+24 더보기",
            feat_sync: "완벽한 동기화",
            feat_sync_desc: "모두가 항상 같은 프레임을 봄",
            feat_secure: "안전하고 프라이빗",
            feat_secure_desc: "암호화, 데이터 저장 없음",
            feat_anyone: "누구와도 시청",
            feat_anyone_desc: "링크 하나로 친구 초대",
            people_watching: "명이 지금 함께 시청 중",
            download_btn: "무료 다운로드",
            soon_badge: "곧",
            platform_detected: "{{platform}} 룸 감지됨",
            platform_set_for: "이 룸은 <strong>{{platform}}</strong>용입니다.<br>함께 시청하려면 데스크탑 앱이 필요합니다.",
            link_copied: "링크 복사됨!",
            code_copied: "복사됨!",
            title_leave: "룸 나가기",
            title_home: "홈",
            title_members: "멤버",
            title_settings: "설정",
            title_mic: "마이크 전환",
            title_cam: "카메라 전환",
            room_suffix: "님의 룸",
            hint_expand: "클릭하여 확대",
            hint_collapse: "클릭하여 축소",
        },
        zh: {
            whos_watching: "谁在观看？",
            entry_subtitle: "选择头像并输入名字加入派对。",
            choose_avatar: "选择头像",
            display_name: "显示名称",
            enter_name_placeholder: "输入你的名字…",
            enter_room: "进入房间",
            session_local: "会话本地保存 — 无需账户。",
            name_required: "需要名字",
            name_required_desc: "请输入名字让别人认识你。",
            got_it: "好的",
            entering_room: "正在进入房间…",
            welcome_msg: "欢迎 {{name}}！",
            nothing_playing: "暂无播放内容",
            nothing_playing_desc: "在上方粘贴 YouTube 链接或从下方选择平台开始一起观看",
            platforms: "平台",
            chip_more: "更多",
            chip_custom: "自定义",
            search_placeholder: "粘贴 YouTube 链接或搜索…",
            share_room: "分享房间",
            tab_playlist: "播放列表",
            tab_history: "历史",
            playlist_empty: "播放列表为空",
            playlist_empty_desc: "添加要观看的内容",
            history_empty: "历史为空",
            history_empty_desc: "加入的房间会显示在这里",
            chat_activity: "聊天动态",
            room_created: "🎉 {{name}} 创建了房间",
            share_code: "与朋友分享代码 <strong>{{code}}</strong>",
            message_placeholder: "发送消息到房间…",
            online: "在线",
            invite_friends: "邀请朋友",
            preview_you: "你",
            room_members: "房间成员",
            host: "主持人",
            moderator: "管理员",
            room_settings: "房间设置",
            settings_subtitle: "配置你的观看体验",
            section_general: "常规",
            room_visibility: "房间可见性",
            room_visibility_desc: "谁可以找到此房间",
            visibility_public: "公开",
            visibility_private: "私密（仅链接）",
            visibility_friends: "仅朋友",
            auto_play_next: "自动播放下一个",
            auto_play_next_desc: "播放列表中的下一个视频",
            section_permissions: "权限",
            playback_control: "播放控制",
            playback_control_desc: "谁可以播放/暂停/跳转",
            permission_host_only: "仅主持人",
            permission_everyone: "所有人",
            permission_trusted: "信任成员",
            search_and_add: "搜索和添加",
            search_and_add_desc: "谁可以向播放列表添加视频",
            room_lock: "锁定房间",
            room_lock_desc: "阻止新成员加入",
            section_sync_video: "同步与视频",
            sync_sensitivity: "同步灵敏度",
            sync_sensitivity_desc: "越低越精确",
            max_resolution: "最高分辨率",
            max_resolution_desc: "系统级质量限制",
            auto_4k: "自动 (4K)",
            section_appearance: "外观",
            chat_font_size: "聊天字体大小",
            chat_font_size_desc: "舒适阅读",
            size_small: "小",
            size_medium: "中",
            size_large: "大",
            oled_black: "OLED 纯黑",
            oled_black_desc: "适用于 AMOLED 屏幕",
            btn_cancel: "取消",
            btn_apply: "应用更改",
            app_modal_title: "获取 MoviesParty 应用",
            app_modal_subtitle: "在 30+ 平台上完美同步一起观看<br>无缓冲。",
            works_on: "支持平台",
            plus_more: "+24 更多",
            feat_sync: "完美同步",
            feat_sync_desc: "所有人始终看到同一帧",
            feat_secure: "安全私密",
            feat_secure_desc: "加密，不保存数据",
            feat_anyone: "与任何人一起观看",
            feat_anyone_desc: "用一个链接邀请朋友",
            people_watching: "人正在一起观看",
            download_btn: "免费下载",
            soon_badge: "即将推出",
            platform_detected: "检测到 {{platform}} 房间",
            platform_set_for: "此房间设置为 <strong>{{platform}}</strong>。<br>你需要桌面应用才能一起观看。",
            link_copied: "链接已复制！",
            code_copied: "已复制！",
            title_leave: "离开房间",
            title_home: "主页",
            title_members: "成员",
            title_settings: "设置",
            title_mic: "切换麦克风",
            title_cam: "切换摄像头",
            room_suffix: " 的房间",
            hint_expand: "点击放大",
            hint_collapse: "点击缩小",
        },
        ru: {
            whos_watching: "Кто смотрит?",
            entry_subtitle: "Выбери аватар и введи имя, чтобы присоединиться.",
            choose_avatar: "Выбрать аватар",
            display_name: "Имя",
            enter_name_placeholder: "Введи имя…",
            enter_room: "Войти в комнату",
            session_local: "Сессия локальная — аккаунт не нужен.",
            name_required: "Требуется имя",
            name_required_desc: "Введи имя, чтобы другие тебя узнали.",
            got_it: "Понятно",
            entering_room: "Вход в комнату…",
            welcome_msg: "Добро пожаловать {{name}}!",
            nothing_playing: "Пока ничего не воспроизводится",
            nothing_playing_desc: "Вставь ссылку YouTube выше или выбери платформу ниже, чтобы начать совместный просмотр",
            platforms: "Платформы",
            chip_more: "Больше",
            chip_custom: "Свой",
            search_placeholder: "Вставь ссылку YouTube или ищи…",
            share_room: "Поделиться комнатой",
            tab_playlist: "Плейлист",
            tab_history: "История",
            playlist_empty: "Плейлист пуст",
            playlist_empty_desc: "Добавь что-нибудь для просмотра",
            history_empty: "История пуста",
            history_empty_desc: "Комнаты, в которые ты вошёл, появятся здесь",
            chat_activity: "Активность чата",
            room_created: "🎉 {{name}} создал комнату",
            share_code: "Поделись кодом <strong>{{code}}</strong> с друзьями",
            message_placeholder: "Сообщение в комнату…",
            online: "Онлайн",
            invite_friends: "Пригласить друзей",
            preview_you: "ТЫ",
            room_members: "Участники комнаты",
            host: "Хост",
            moderator: "Модератор",
            room_settings: "Настройки комнаты",
            settings_subtitle: "Настрой свой опыт",
            section_general: "Общие",
            room_visibility: "Видимость комнаты",
            room_visibility_desc: "Кто может найти комнату",
            visibility_public: "Публичная",
            visibility_private: "Приватная (только ссылка)",
            visibility_friends: "Только друзья",
            auto_play_next: "Автозапуск след.",
            auto_play_next_desc: "Воспроизвести следующее видео",
            section_permissions: "Разрешения",
            playback_control: "Управление",
            playback_control_desc: "Кто управляет воспроизведением",
            permission_host_only: "Только хост",
            permission_everyone: "Все",
            permission_trusted: "Доверенные",
            search_and_add: "Поиск и добавление",
            search_and_add_desc: "Кто может добавлять видео",
            room_lock: "Замок комнаты",
            room_lock_desc: "Запретить новых участников",
            section_sync_video: "Синхр. и видео",
            sync_sensitivity: "Чувствит. синхр.",
            sync_sensitivity_desc: "Ниже = точнее",
            max_resolution: "Макс. разрешение",
            max_resolution_desc: "Системное ограничение качества",
            auto_4k: "Авто (4K)",
            section_appearance: "Внешний вид",
            chat_font_size: "Размер шрифта чата",
            chat_font_size_desc: "Комфортное чтение",
            size_small: "Малый",
            size_medium: "Средний",
            size_large: "Большой",
            oled_black: "OLED чистый чёрный",
            oled_black_desc: "Для AMOLED экранов",
            btn_cancel: "Отмена",
            btn_apply: "Применить",
            app_modal_title: "Получи приложение MoviesParty",
            app_modal_subtitle: "Смотрите вместе на 30+ платформах<br>с идеальной синхронизацией.",
            works_on: "Работает с",
            plus_more: "+24 ещё",
            feat_sync: "Идеальная синхр.",
            feat_sync_desc: "все видят один кадр",
            feat_secure: "Безопасно и приватно",
            feat_secure_desc: "шифрование, данные не хранятся",
            feat_anyone: "Смотри с кем угодно",
            feat_anyone_desc: "приглашай одной ссылкой",
            people_watching: "человек сейчас смотрят вместе",
            download_btn: "Скачать бесплатно",
            soon_badge: "Скоро",
            platform_detected: "Обнаружена комната {{platform}}",
            platform_set_for: "Эта комната для <strong>{{platform}}</strong>.<br>Нужно приложение для совместного просмотра.",
            link_copied: "ССЫЛКА СКОПИРОВАНА!",
            code_copied: "СКОПИРОВАНО!",
            title_leave: "Выйти",
            title_home: "Главная",
            title_members: "Участники",
            title_settings: "Настройки",
            title_mic: "Микрофон",
            title_cam: "Камера",
            room_suffix: " — комната ",
            hint_expand: "Нажми, чтобы увеличить",
            hint_collapse: "Нажми, чтобы уменьшить",
        },
    };

    function getLang() {
        const raw = (localStorage.getItem("i18nextLng") || "en").toLowerCase();
        const short = raw.split("-")[0];
        return DICT[short] ? short : "en";
    }

    function t(key, vars) {
        const lang = getLang();
        let str = (DICT[lang] && DICT[lang][key]) || DICT.en[key] || key;
        if (vars) {
            Object.keys(vars).forEach(function (k) {
                str = str.replace(new RegExp("{{" + k + "}}", "g"), vars[k]);
            });
        }
        return str;
    }

    window.roomT = t;
    window.roomLang = getLang;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
        el.textContent = t(el.getAttribute("data-i18n"));
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
        el.placeholder = t(el.getAttribute("data-i18n-placeholder"));
    });
    document.documentElement.lang = getLang();
})();

const pathParts = window.location.pathname.split('/').filter(p => p);
let urlRoomCode = pathParts[pathParts.length - 1];

if (!urlRoomCode || urlRoomCode === 'room' || urlRoomCode === 'index.html') {
    const hash = window.location.hash;
    const urlParams = new URLSearchParams(window.location.search);
    const queryCode = urlParams.get('code') || urlParams.get('room');

    if (hash.startsWith('#room/')) {
        urlRoomCode = hash.split('/')[1];
    } else if (hash.length === 7) {
        urlRoomCode = hash.substring(1);
    } else if (queryCode) {
        urlRoomCode = queryCode;
    }
}

const isRoomSelection = !urlRoomCode || urlRoomCode === 'room' || urlRoomCode === 'create' || urlRoomCode === 'index.html';
const hasUserSession = sessionStorage.getItem('userName') && sessionStorage.getItem('userAvatar');

if (!isRoomSelection) {
    if (hasUserSession) {
        loadRoomInterface(urlRoomCode);
    } else {
        sessionStorage.setItem('pendingRoomCode', urlRoomCode);
    }
} else if (sessionStorage.getItem('roomCode')) {
    const savedRoomCode = sessionStorage.getItem('roomCode');
    if (hasUserSession) {
        window.history.replaceState({}, '', './' + savedRoomCode);
        loadRoomInterface(savedRoomCode);
    } else {
        sessionStorage.setItem('pendingRoomCode', savedRoomCode);
    }
}

let selectedAvatar = 'Felix';

document.querySelectorAll('.avatar')?.forEach(avatar => {
    avatar.addEventListener('click', function () {
        document.querySelectorAll('.avatar').forEach(a => a.classList.remove('selected'));
        this.classList.add('selected');
        selectedAvatar = this.dataset.avatar;
    });
});

function closeModal() {
    document.getElementById('errorModal').classList.remove('show');
}

function closeAppModal() {
    document.getElementById('appModal')?.classList.remove('show');
}

function enterRoom() {
    const displayName = document.getElementById('displayName').value.trim();

    if (!displayName) {
        document.getElementById('errorModal').classList.add('show');
        return;
    }

    sessionStorage.setItem('userAvatar', selectedAvatar);
    sessionStorage.setItem('userName', displayName);

    const pendingRoomCode = sessionStorage.getItem('pendingRoomCode');
    const existingRoomCode = sessionStorage.getItem('roomCode');
    let roomCode;

    if (pendingRoomCode) {
        roomCode = pendingRoomCode;
        sessionStorage.removeItem('pendingRoomCode');
    } else if (existingRoomCode) {
        roomCode = existingRoomCode;
    } else {
        roomCode = Math.random().toString(36).substring(2, 8).toUpperCase();
    }

    sessionStorage.setItem('roomCode', roomCode);

    const T = window.roomT || ((k) => k);
    document.getElementById('loadingSubtext').textContent = T('welcome_msg', { name: displayName });
    document.getElementById('loadingScreen').classList.add('show');

    setTimeout(() => {
        window.history.pushState({}, '', './' + roomCode);
        loadRoomInterface(roomCode);

        document.getElementById('loadingScreen').classList.remove('show');
    }, 2000);
}


function loadRoomInterface(roomCode) {
    const userName = sessionStorage.getItem('userName') || 'Guest';
    const userAvatar = sessionStorage.getItem('userAvatar') || 'Felix';
    const T = window.roomT || ((k) => k);
    document.documentElement.lang = (window.roomLang ? window.roomLang() : 'en');

    document.body.innerHTML = `
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet">
        <style>
            *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

            :root {
                --bg:       #080810;
                --surface:  #0f0f1a;
                --border:   rgba(255,255,255,0.07);
                --accent:   #E8192C;
                --accent2:  #ff6b35;
                --muted:    #3a3a52;
                --text:     #e8e8f0;
                --sub:      #6b6b88;
                --online:   #34d47a;
            }

            body {
                font-family: 'DM Sans', sans-serif;
                background: var(--bg);
                color: var(--text);
                overflow: hidden;
                height: 100vh;
            }

            body::before {
                content: '';
                position: fixed; inset: 0;
                background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E");
                opacity: 0.025;
                pointer-events: none;
                z-index: 9999;
            }

            .shell {
                display: grid;
                grid-template-columns: 56px 1fr 320px;
                grid-template-rows: 56px 1fr 64px;
                height: 100vh;
                width: 100vw;
            }

            .rail {
                grid-row: 1 / 4;
                background: var(--surface);
                border-right: 1px solid var(--border);
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 14px 0;
                gap: 6px;
            }

            .rail-logo {
                width: 30px; height: 30px;
                margin-bottom: 14px;
                flex-shrink: 0;
            }

            .rail-btn {
                width: 38px; height: 38px;
                border-radius: 10px;
                border: none;
                background: transparent;
                color: var(--sub);
                display: flex; align-items: center; justify-content: center;
                cursor: pointer;
                transition: background 0.18s, color 0.18s;
                position: relative;
            }
            .rail-btn:hover { background: rgba(255,255,255,0.06); color: var(--text); }
            .rail-btn.active { background: rgba(232,25,44,0.15); color: var(--accent); }
            .rail-btn.active::before {
                content: '';
                position: absolute; left: -1px; top: 50%; transform: translateY(-50%);
                width: 3px; height: 22px;
                background: var(--accent);
                border-radius: 0 3px 3px 0;
            }
            .rail-spacer { flex: 1; }

            .topbar {
                grid-column: 2 / 4;
                background: var(--surface);
                border-bottom: 1px solid var(--border);
                display: flex;
                align-items: center;
                padding: 0 20px;
                gap: 14px;
            }

            .room-title {
                font-family: 'Syne', sans-serif;
                font-size: 15px;
                font-weight: 700;
                color: var(--text);
                white-space: nowrap;
            }

            .room-badge {
                display: flex; align-items: center; gap: 6px;
                padding: 4px 10px 4px 8px;
                background: rgba(232,25,44,0.1);
                border: 1px solid rgba(232,25,44,0.25);
                border-radius: 6px;
                flex-shrink: 0;
            }
            .room-badge-dot {
                width: 6px; height: 6px;
                border-radius: 50%;
                background: var(--accent);
                box-shadow: 0 0 6px var(--accent);
                animation: pulse 2s ease-in-out infinite;
            }
            @keyframes pulse {
                0%, 100% { opacity: 1; }
                50% { opacity: 0.4; }
            }
            .room-badge-code {
                font-family: 'Syne', sans-serif;
                font-size: 12px;
                font-weight: 700;
                color: var(--accent);
                letter-spacing: 2.5px;
            }

            .search-wrap {
                flex: 1;
                max-width: 520px;
                position: relative;
                margin: 0 8px;
            }
            .search-wrap svg {
                position: absolute; left: 13px; top: 50%; transform: translateY(-50%);
                color: var(--sub); pointer-events: none;
            }
            .search-input {
                width: 100%;
                padding: 9px 14px 9px 38px;
                background: rgba(255,255,255,0.04);
                border: 1px solid var(--border);
                border-radius: 8px;
                color: var(--text);
                font-size: 13px;
                font-family: 'DM Sans', sans-serif;
                transition: border-color 0.2s, background 0.2s;
            }
            .search-input:focus {
                outline: none;
                border-color: rgba(232,25,44,0.5);
                background: rgba(255,255,255,0.06);
            }
            .search-input::placeholder { color: var(--muted); }

            .topbar-actions { display: flex; gap: 8px; margin-left: auto; margin-right: 100px; }
            .tbtn {
                padding: 7px 14px;
                border-radius: 7px;
                font-size: 12px;
                font-weight: 600;
                font-family: 'DM Sans', sans-serif;
                cursor: pointer;
                border: none;
                transition: all 0.18s;
            }
            .tbtn-ghost {
                background: transparent;
                border: 1px solid var(--border);
                color: var(--sub);
            }
            .tbtn-ghost:hover { background: rgba(255,255,255,0.05); color: var(--text); border-color: rgba(255,255,255,0.15); }
            .tbtn-accent {
                background: var(--accent);
                color: #fff;
                box-shadow: 0 2px 12px rgba(232,25,44,0.3);
            }
            .tbtn-accent:hover { background: #ff2236; box-shadow: 0 4px 16px rgba(232,25,44,0.45); }

            .top-action-btn {
                width: 36px; height: 36px;
                border-radius: 50%;
                background: rgba(255,255,255,0.05);
                border: 1px solid var(--border);
                color: #888;
                display: flex; align-items: center; justify-content: center;
                cursor: pointer;
                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                position: relative;
                margin-left: 4px;
            }
            .top-action-btn:hover {
                background: rgba(255,255,255,0.1);
                color: #fff;
                border-color: rgba(255,255,255,0.2);
                transform: translateY(-1px);
            }
            .top-action-btn.active {
                background: rgba(52, 212, 122, 0.1);
                color: #34d47a;
                border-color: rgba(52, 212, 122, 0.3);
            }
            .top-action-btn.off {
                background: rgba(232, 25, 44, 0.1);
                color: var(--accent);
                border-color: rgba(232, 25, 44, 0.3);
            }
            .top-action-btn .btn-slash {
                position: absolute; width: 100%; height: 2px;
                background: currentColor;
                transform: rotate(-45deg);
                display: none;
                border-radius: 2px;
            }
            .top-action-btn.off .btn-slash { display: block; }

            #localVideoContainer {
                position: fixed;
                top: 8px;
                right: 12px;
                width: 76px;
                height: 42px;
                background: #000;
                border: 1.5px solid var(--accent);
                border-radius: 8px;
                overflow: hidden;
                z-index: 9000;
                display: none;
                box-shadow: 0 6px 18px rgba(0,0,0,0.45);
                transform: scale(0);
                transition: width 0.3s cubic-bezier(0.34, 1.56, 0.64, 1),
                            height 0.3s cubic-bezier(0.34, 1.56, 0.64, 1),
                            top 0.3s cubic-bezier(0.34, 1.56, 0.64, 1),
                            right 0.3s cubic-bezier(0.34, 1.56, 0.64, 1),
                            transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
                cursor: pointer;
            }
            #localVideoContainer.show {
                display: block;
                transform: scale(1);
            }
            #localVideoContainer.expanded {
                width: 360px;
                height: 220px;
                top: 70px;
                right: 20px;
            }
            #localVideoContainer.expanded .preview-label {
                font-size: 12px;
                bottom: 8px;
                left: 10px;
                padding: 3px 8px;
            }
            #localVideoContainer video {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
            #localVideoContainer .preview-label {
                position: absolute;
                bottom: 3px;
                left: 5px;
                font-size: 8px;
                background: rgba(0,0,0,0.65);
                padding: 1px 5px;
                border-radius: 3px;
                color: #fff;
                font-weight: 600;
                pointer-events: none;
                letter-spacing: 0.3px;
            }
            #localVideoContainer .hover-hint {
                position: absolute;
                inset: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                background: rgba(0,0,0,0.55);
                color: #fff;
                font-size: 10px;
                font-weight: 600;
                opacity: 0;
                transition: opacity 0.2s ease;
                pointer-events: none;
                text-align: center;
                padding: 4px;
                line-height: 1.2;
            }
            #localVideoContainer:hover .hover-hint { opacity: 1; }
            #localVideoContainer.expanded .hover-hint::before { content: attr(data-collapse); }
            #localVideoContainer:not(.expanded) .hover-hint::before { content: attr(data-expand); }
            #localVideoContainer.expanded .hover-hint { font-size: 13px; }
            #micMeterTop {
                display: none;
                align-items: center;
                gap: 3px;
                height: 28px;
                margin-right: 12px;
                padding: 0 10px;
                background: rgba(255,255,255,0.03);
                border: 1px solid rgba(255,255,255,0.08);
                border-radius: 14px;
                box-shadow: inset 0 1px 1px rgba(255,255,255,0.02);
            }
            .mic-meter-bar {
                width: 2px;
                height: 3px;
                background: linear-gradient(to top, #00f2fe 0%, #34d47a 100%);
                border-radius: 2px;
                transition: height 0.05s ease, opacity 0.1s;
                box-shadow: 0 0 12px rgba(52, 212, 122, 0.4);
                opacity: 0.6;
            }

            .main {
                grid-column: 2;
                grid-row: 2;
                display: flex;
                flex-direction: column;
                background: #000;
                overflow: hidden;
            }

            .video-stage {
                flex: 1;
                display: flex;
                align-items: center;
                justify-content: center;
                position: relative;
                min-height: 0;
            }

            .video-stage::before {
                content: '';
                position: absolute; inset: 0;
                background-image:
                    linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
                background-size: 40px 40px;
                pointer-events: none;
            }

            .empty-stage {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 18px;
                position: relative;
                z-index: 1;
            }

            .play-orb {
                width: 88px; height: 88px;
                border-radius: 50%;
                background: radial-gradient(circle at 35% 35%, rgba(232,25,44,0.3), rgba(232,25,44,0.05));
                border: 1px solid rgba(232,25,44,0.3);
                display: flex; align-items: center; justify-content: center;
                box-shadow: 0 0 40px rgba(232,25,44,0.15), inset 0 0 20px rgba(232,25,44,0.05);
                animation: orbFloat 4s ease-in-out infinite;
            }
            @keyframes orbFloat {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-8px); }
            }
            .play-orb svg { color: var(--accent); filter: drop-shadow(0 0 8px rgba(232,25,44,0.6)); }

            .empty-stage h3 {
                font-family: 'Syne', sans-serif;
                font-size: 17px;
                font-weight: 700;
                color: var(--text);
            }
            .empty-stage p {
                font-size: 13px;
                color: var(--sub);
                text-align: center;
                max-width: 260px;
                line-height: 1.5;
            }

            .platform-strip {
                padding: 12px 20px 14px;
                background: var(--surface);
                border-top: 1px solid var(--border);
                flex-shrink: 0;
            }
            .strip-label {
                font-size: 9px;
                font-weight: 700;
                letter-spacing: 1.8px;
                text-transform: uppercase;
                color: var(--muted);
                margin-bottom: 10px;
                font-family: 'Syne', sans-serif;
            }
            .strip-items {
                display: flex;
                gap: 8px;
                overflow-x: auto;
                scrollbar-width: none;
            }
            .strip-items::-webkit-scrollbar { display: none; }
            .strip-chip {
                display: flex;
                align-items: center;
                gap: 7px;
                padding: 6px 12px;
                background: rgba(255,255,255,0.04);
                border: 1px solid var(--border);
                border-radius: 20px;
                white-space: nowrap;
                cursor: pointer;
                transition: all 0.18s;
                flex-shrink: 0;
            }
            .strip-chip:hover {
                background: rgba(232,25,44,0.08);
                border-color: rgba(232,25,44,0.3);
            }
            .strip-chip img { height: 18px; width: 18px; object-fit: contain; flex-shrink: 0; }
            .strip-chip .p-icon {
                width: 22px; height: 22px;
                border-radius: 5px;
                display: flex; align-items: center; justify-content: center;
                flex-shrink: 0;
                overflow: hidden;
            }
            .strip-chip .p-icon img { width: 100%; height: 100%; object-fit: contain; }
            .strip-chip span {
                font-size: 12px;
                font-weight: 500;
                color: #aaa;
            }
            .strip-chip:hover span { color: var(--text); }

            .bottombar {
                grid-column: 2;
                grid-row: 3;
                background: var(--surface);
                border-top: 1px solid var(--border);
                display: flex;
                align-items: center;
                padding: 0 20px;
                gap: 14px;
            }

            .user-chip {
                display: flex;
                align-items: center;
                gap: 10px;
                padding-right: 20px;
                border-right: 1px solid var(--border);
            }
            .user-avatar-ring {
                width: 32px; height: 32px;
                border-radius: 50%;
                border: 2px solid var(--accent);
                overflow: hidden;
            }
            .user-avatar-ring img { width: 100%; height: 100%; }
            .user-meta { display: flex; flex-direction: column; }
            .user-name-sm { font-size: 11px; font-weight: 700; color: var(--text); font-family: 'DM Sans', sans-serif; }
            .user-status { font-size: 9px; color: var(--muted); display: flex; align-items: center; gap: 4px; }
            .status-dot { width: 4px; height: 4px; border-radius: 50%; background: var(--online); }

            .share-pill {
                display: flex; align-items: center; gap: 8px;
                padding: 6px 12px;
                background: rgba(255,255,255,0.03);
                border: 1px solid var(--border);
                border-radius: 8px;
                font-size: 11px;
                color: var(--sub);
                cursor: pointer;
                transition: all 0.18s;
            }
            .share-pill:hover { background: rgba(255,255,255,0.06); border-color: var(--muted); }

            .bottombar-right { margin-left: auto; display: flex; gap: 10px; }

            .sidebar-right {
                grid-column: 3;
                grid-row: 2 / 4;
                background: var(--surface);
                border-left: 1px solid var(--border);
                display: flex;
                flex-direction: column;
                overflow: hidden;
            }

            .sidebar-top {
                flex: 1;
                display: flex;
                flex-direction: column;
                min-height: 0;
            }

            .sidebar-tabs {
                display: flex;
                border-bottom: 1px solid var(--border);
                flex-shrink: 0;
            }
            .stab {
                flex: 1;
                padding: 14px 0;
                text-align: center;
                font-size: 11px;
                font-weight: 700;
                font-family: 'Syne', sans-serif;
                color: var(--sub);
                cursor: pointer;
                border-bottom: 2px solid transparent;
                transition: all 0.18s;
                letter-spacing: 0.8px;
                text-transform: uppercase;
            }
            .stab:hover { color: var(--text); }
            .stab.active { color: var(--accent); border-bottom-color: var(--accent); }

            .sidebar-content {
                flex: 1;
                overflow-y: auto;
                scrollbar-width: thin;
                scrollbar-color: var(--border) transparent;
            }

            .empty-sidebar {
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 12px;
                opacity: 0.5;
                padding: 24px;
                text-align: center;
            }
            .empty-sidebar svg { opacity: 0.4; }
            .empty-sidebar p { font-size: 13px; color: var(--sub); }

            .chat-pane {
                height: 380px;
                border-top: 1px solid var(--border);
                display: flex;
                flex-direction: column;
                background: rgba(0,0,0,0.15);
            }

            .chat-header {
                padding: 10px 14px;
                font-size: 9px;
                font-weight: 800;
                letter-spacing: 1.5px;
                color: var(--muted);
                text-transform: uppercase;
                border-bottom: 1px solid rgba(255,255,255,0.03);
            }

            .chat-messages {
                flex: 1;
                padding: 14px;
                display: flex;
                flex-direction: column;
                gap: 10px;
                overflow-y: auto;
                scrollbar-width: thin;
                scrollbar-color: var(--border) transparent;
            }

            .chat-input-bar {
                padding: 12px;
                border-top: 1px solid var(--border);
                display: flex;
                gap: 8px;
                background: var(--surface);
            }

            .chat-input {
                flex: 1;
                padding: 8px 12px;
                background: rgba(255,255,255,0.04);
                border: 1px solid var(--border);
                border-radius: 7px;
                color: var(--text);
                font-size: 13px;
                font-family: 'DM Sans', sans-serif;
                transition: border-color 0.18s;
            }
            .chat-input:focus { outline: none; border-color: rgba(232,25,44,0.4); }
            .chat-input::placeholder { color: var(--muted); }
            .chat-send {
                width: 32px; height: 32px;
                background: var(--accent);
                border: none;
                border-radius: 7px;
                color: #fff;
                display: flex; align-items: center; justify-content: center;
                cursor: pointer;
                transition: background 0.18s, transform 0.12s;
                flex-shrink: 0;
            }
            .chat-send:hover { background: #ff2236; transform: scale(1.06); }

            .chat-messages {
                padding: 14px;
                display: flex;
                flex-direction: column;
                gap: 10px;
            }
            .sys-msg {
                background: rgba(232,25,44,0.08);
                border: 1px solid rgba(232,25,44,0.15);
                border-radius: 8px;
                padding: 8px 12px;
                font-size: 12px;
                color: rgba(232,25,44,0.9);
                font-weight: 500;
                text-align: center;
            }
            .chat-msg { display: flex; flex-direction: column; gap: 4px; }
            .msg-header { display: flex; align-items: center; gap: 6px; }
            .msg-avatar { width: 20px; height: 20px; border-radius: 50%; }
            .msg-name { font-size: 12px; font-weight: 700; color: var(--accent); font-family: 'Syne', sans-serif; }
            .msg-time { font-size: 10px; color: var(--muted); margin-left: auto; }
            .msg-text { font-size: 13px; color: #bbb; line-height: 1.5; padding-left: 26px; }

            .bottombar {
                grid-column: 2;
                grid-row: 3;
                background: var(--surface);
                border-top: 1px solid var(--border);
                display: flex;
                align-items: center;
                padding: 0 20px;
                gap: 14px;
            }

            .user-chip {
                display: flex;
                align-items: center;
                gap: 9px;
            }
            .user-avatar-ring {
                width: 34px; height: 34px;
                border-radius: 50%;
                border: 2px solid var(--accent);
                padding: 1px;
                flex-shrink: 0;
            }
            .user-avatar-ring img { width: 100%; height: 100%; border-radius: 50%; }
            .user-meta { display: flex; flex-direction: column; }
            .user-name-sm {
                font-size: 13px;
                font-weight: 600;
                color: var(--text);
                font-family: 'Syne', sans-serif;
            }
            .user-status {
                display: flex; align-items: center; gap: 4px;
                font-size: 10px; color: var(--online);
            }
            .status-dot {
                width: 5px; height: 5px;
                border-radius: 50%;
                background: var(--online);
                animation: pulse 2s ease-in-out infinite;
            }

            .share-pill {
                display: flex; align-items: center; gap: 7px;
                padding: 6px 12px;
                background: rgba(255,255,255,0.04);
                border: 1px solid var(--border);
                border-radius: 20px;
                font-size: 12px;
                color: var(--sub);
                cursor: pointer;
                transition: all 0.18s;
                font-family: 'DM Sans', sans-serif;
            }
            .share-pill:hover { background: rgba(255,255,255,0.08); color: var(--text); border-color: rgba(255,255,255,0.15); }
            .share-pill svg { flex-shrink: 0; }

            .bottombar-right { margin-left: auto; display: flex; align-items: center; gap: 8px; }

            .app-modal-overlay {
                position: fixed; inset: 0;
                background: rgba(0,0,0,0.82);
                backdrop-filter: blur(10px);
                -webkit-backdrop-filter: blur(10px);
                z-index: 10000;
                display: flex;
                align-items: center;
                justify-content: center;
                opacity: 0;
                pointer-events: none;
                transition: opacity 0.25s ease;
            }
            .app-modal-overlay.show {
                opacity: 1;
                pointer-events: all;
            }
            .app-modal {
                background: linear-gradient(160deg, #16161f 0%, #111118 100%);
                border: 1px solid rgba(255,255,255,0.09);
                border-radius: 22px;
                width: 380px;
                position: relative;
                box-shadow: 0 32px 100px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04);
                transform: translateY(14px) scale(0.96);
                transition: transform 0.28s cubic-bezier(0.34,1.56,0.64,1);
                overflow: hidden;
            }
            .app-modal-overlay.show .app-modal {
                transform: translateY(0) scale(1);
            }
            .app-modal::before {
                content: '';
                position: absolute; top: 0; left: 0; right: 0;
                height: 3px;
                background: linear-gradient(90deg, transparent, var(--accent), transparent);
                opacity: 0.8;
            }
            .settings-scroll {
                scrollbar-width: thin;
                scrollbar-color: rgba(255,255,255,0.14) transparent;
            }
            .settings-scroll::-webkit-scrollbar { width: 6px; }
            .settings-scroll::-webkit-scrollbar-track { background: transparent; }
            .settings-scroll::-webkit-scrollbar-thumb {
                background: rgba(255,255,255,0.14);
                border-radius: 3px;
                transition: background 0.2s;
            }
            .settings-scroll::-webkit-scrollbar-thumb:hover {
                background: rgba(232, 25, 44, 0.5);
            }
            .app-modal-header {
                padding: 28px 28px 0;
                display: flex;
                align-items: flex-start;
                gap: 16px;
            }
            .app-modal-close {
                position: absolute;
                top: 14px; right: 14px;
                width: 28px; height: 28px;
                border-radius: 50%;
                background: rgba(255,255,255,0.06);
                border: 1px solid rgba(255,255,255,0.08);
                color: #666;
                font-size: 14px;
                cursor: pointer;
                display: flex; align-items: center; justify-content: center;
                transition: background 0.15s, color 0.15s, border-color 0.15s;
                line-height: 1;
            }
            .app-modal-close:hover { background: rgba(255,255,255,0.1); color: #ccc; border-color: rgba(255,255,255,0.15); }
            .app-modal-app-icon {
                width: 54px; height: 54px;
                border-radius: 14px;
                background: linear-gradient(145deg, #E8192C, #a0001c);
                display: flex; align-items: center; justify-content: center;
                flex-shrink: 0;
                box-shadow: 0 8px 24px rgba(232,25,44,0.35);
            }
            .app-modal-app-icon svg { color: #fff; }
            .app-modal-title-block { padding-top: 4px; }
            .app-modal-title-block h3 {
                font-family: 'Syne', sans-serif;
                font-size: 16px;
                font-weight: 800;
                color: var(--text);
                line-height: 1.3;
                margin-bottom: 5px;
            }
            .app-modal-title-block p {
                font-size: 12px;
                color: var(--sub);
                line-height: 1.5;
            }
            .app-modal-platforms {
                display: flex;
                align-items: center;
                gap: 8px;
                padding: 20px 28px 0;
            }
            .app-modal-plat-label {
                font-size: 10px;
                font-weight: 700;
                letter-spacing: 1.2px;
                text-transform: uppercase;
                color: var(--muted);
                font-family: 'Syne', sans-serif;
                flex-shrink: 0;
            }
            .app-modal-plat-logos {
                display: flex; gap: 6px; align-items: center;
            }
            .app-modal-plat-logos img {
                width: 22px; height: 22px;
                border-radius: 5px;
                object-fit: cover;
                opacity: 0.85;
            }
            .app-modal-plat-more {
                font-size: 11px;
                color: var(--sub);
                font-weight: 600;
            }
            .app-modal-features {
                margin: 18px 28px 0;
                background: rgba(255,255,255,0.03);
                border: 1px solid rgba(255,255,255,0.06);
                border-radius: 12px;
                overflow: hidden;
            }
            .app-modal-feat {
                display: flex;
                align-items: center;
                gap: 12px;
                padding: 11px 14px;
                border-bottom: 1px solid rgba(255,255,255,0.05);
            }
            .app-modal-feat:last-child { border-bottom: none; }
            .feat-icon {
                width: 28px; height: 28px;
                border-radius: 8px;
                background: rgba(232,25,44,0.1);
                border: 1px solid rgba(232,25,44,0.15);
                display: flex; align-items: center; justify-content: center;
                flex-shrink: 0;
            }
            .feat-icon svg { color: var(--accent); }
            .feat-text { font-size: 12.5px; color: #bbb; line-height: 1.35; }
            .feat-text strong { color: var(--text); font-weight: 600; }
            .app-modal-proof {
                display: flex;
                align-items: center;
                gap: 8px;
                padding: 14px 28px 0;
            }
            .proof-avatars { display: flex; }
            .proof-avatars img {
                width: 22px; height: 22px;
                border-radius: 50%;
                border: 2px solid #16161f;
                margin-left: -6px;
            }
            .proof-avatars img:first-child { margin-left: 0; }
            .proof-text { font-size: 11.5px; color: var(--sub); }
            .proof-text strong { color: #ccc; }
            .proof-live-dot {
                width: 7px; height: 7px;
                border-radius: 50%;
                background: #34d47a;
                flex-shrink: 0;
                box-shadow: 0 0 6px #34d47a;
                animation: livePulse 1.8s ease-in-out infinite;
            }
            @keyframes livePulse {
                0%, 100% { opacity: 1; transform: scale(1); }
                50% { opacity: 0.4; transform: scale(0.7); }
            }
            .app-modal-actions {
                padding: 18px 28px 26px;
                display: flex;
                flex-direction: column;
                gap: 9px;
            }
            .app-modal-btn-primary {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 9px;
                padding: 14px 24px;
                background: var(--accent);
                color: #fff;
                border: none;
                border-radius: 12px;
                font-size: 14px;
                font-weight: 700;
                font-family: 'DM Sans', sans-serif;
                cursor: pointer;
                width: 100%;
                box-shadow: 0 4px 20px rgba(232,25,44,0.38);
                transition: background 0.18s, box-shadow 0.18s, transform 0.12s;
                position: relative;
                overflow: hidden;
            }
            .app-modal-btn-primary::after {
                content: '';
                position: absolute; inset: 0;
                background: linear-gradient(180deg, rgba(255,255,255,0.12) 0%, transparent 100%);
                pointer-events: none;
            }
            .app-modal-btn-primary:hover {
                background: #f01426;
                box-shadow: 0 6px 28px rgba(232,25,44,0.5);
                transform: translateY(-1px);
            }
            .app-modal-btn-primary:active { transform: translateY(0); }
            .app-modal-platforms-os {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 10px;
                padding: 10px 0 2px;
            }
            .os-item {
                display: flex;
                align-items: center;
                gap: 5px;
                font-size: 11.5px;
                font-weight: 500;
                font-family: 'DM Sans', sans-serif;
            }
            .os-available { color: #ccc; }
            .os-soon { color: #555; }
            .os-status-dot {
                width: 6px; height: 6px;
                border-radius: 50%;
                flex-shrink: 0;
            }
            .os-status-dot.available {
                background: #34d47a;
                box-shadow: 0 0 5px #34d47a;
            }
            .os-sep { color: #333; font-size: 14px; }
            .os-badge-soon {
                font-size: 9px;
                font-weight: 700;
                letter-spacing: 0.4px;
                text-transform: uppercase;
                background: rgba(255,255,255,0.06);
                border: 1px solid rgba(255,255,255,0.08);
                border-radius: 4px;
                padding: 1px 5px;
                color: #555;
            }
            .custom-select {
                background: rgba(255,255,255,0.05);
                border: 1px solid var(--border);
                color: var(--text);
                padding: 6px 32px 6px 12px;
                border-radius: 6px;
                font-size: 12px;
                appearance: none;
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
                background-repeat: no-repeat;
                background-position: right 10px center;
                cursor: pointer;
                transition: all 0.2s;
            }
            .custom-select:hover {
                border-color: var(--accent);
                background-color: rgba(255,255,255,0.08);
            }
            .custom-select option {
                background: #1a1a1a;
                color: #fff;
            }
            .custom-toggle {
                width: 36px;
                height: 20px;
                background: rgba(255,255,255,0.1);
                border-radius: 10px;
                position: relative;
                cursor: pointer;
                transition: all 0.3s;
            }
            .custom-toggle.active {
                background: var(--accent);
            }
            .toggle-knob {
                width: 14px;
                height: 14px;
                background: #fff;
                border-radius: 50%;
                position: absolute;
                left: 3px;
                top: 3px;
                transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            }
            .custom-toggle.active .toggle-knob {
                left: 19px;
            }
        </style>

        <div class="shell">
            <nav class="rail">
                <svg class="rail-logo" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="40" height="40" rx="10" fill="#E8192C"/>
                    <path d="M14 12 L14 28 L30 20 Z" fill="white"/>
                </svg>

                <button class="rail-btn active" title="${T('title_home')}" id="railHome">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
                </button>
                <button class="rail-btn" title="${T('title_members')}" id="railMembers">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </button>
                <button class="rail-btn" title="${T('title_settings')}" id="railSettings">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
                </button>

                <div class="rail-spacer"></div>

                <button class="rail-btn" title="${T('title_leave')}" onclick="window.location.href='/'">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
                </button>
            </nav>

            <header class="topbar">
                <span class="room-title">${userName}${T('room_suffix')}</span>
                <div class="room-badge">
                    <div class="room-badge-dot"></div>
                    <span class="room-badge-code">${roomCode}</span>
                </div>
                <div class="search-wrap">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
                    <input class="search-input" type="text" placeholder="${T('search_placeholder')}">
                </div>
                <div class="topbar-actions">
                    <div id="micMeterTop" class="mic-meter-top">
                        <div class="mic-meter-bar"></div>
                        <div class="mic-meter-bar"></div>
                        <div class="mic-meter-bar"></div>
                        <div class="mic-meter-bar"></div>
                        <div class="mic-meter-bar"></div>
                        <div class="mic-meter-bar"></div>
                        <div class="mic-meter-bar"></div>
                    </div>
                    <button class="top-action-btn off" id="micBtn" title="${T('title_mic')}">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v1a7 7 0 0 1-14 0v-1"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>
                        <div class="btn-slash"></div>
                    </button>
                    <button class="top-action-btn off" id="camBtn" title="${T('title_cam')}">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 7l-7 5 7 5V7z"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>
                        <div class="btn-slash"></div>
                    </button>
                </div>
            </header>

            <main class="main">
                <div class="video-stage">
                    <div class="empty-stage">
                        <div class="play-orb">
                            <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                        </div>
                        <h3>${T('nothing_playing')}</h3>
                        <p>${T('nothing_playing_desc')}</p>
                    </div>
                </div>

                <div class="platform-strip">
                    <div class="strip-label">${T('platforms')}</div>
                    <div class="strip-items">
                        <div class="strip-chip" data-platform="Netflix">
                            <img src="https://www.google.com/s2/favicons?domain=netflix.com&sz=64" alt="Netflix" style="width:20px;height:20px;border-radius:4px;object-fit:cover">
                            <span>Netflix</span>
                        </div>
                        <div class="strip-chip" data-platform="Disney+">
                            <img src="https://www.google.com/s2/favicons?domain=disneyplus.com&sz=64" alt="Disney+" style="width:20px;height:20px;border-radius:4px;object-fit:cover">
                            <span>Disney+</span>
                        </div>
                        <div class="strip-chip" data-platform="Prime">
                            <img src="https://www.google.com/s2/favicons?domain=primevideo.com&sz=64" alt="Prime" style="width:20px;height:20px;border-radius:4px;object-fit:cover">
                            <span>Prime</span>
                        </div>
                        <div class="strip-chip" data-platform="Hulu">
                            <img src="https://www.google.com/s2/favicons?domain=hulu.com&sz=64" alt="Hulu" style="width:20px;height:20px;border-radius:4px;object-fit:cover">
                            <span>Hulu</span>
                        </div>
                        <div class="strip-chip" data-platform="Max">
                            <img src="https://www.google.com/s2/favicons?domain=max.com&sz=64" alt="Max" style="width:20px;height:20px;border-radius:4px;object-fit:cover">
                            <span>Max</span>
                        </div>
                        <div class="strip-chip" data-platform="Crunchyroll">
                            <img src="https://www.google.com/s2/favicons?domain=crunchyroll.com&sz=64" alt="Crunchyroll" style="width:20px;height:20px;border-radius:4px;object-fit:cover">
                            <span>Crunchyroll</span>
                        </div>
                        <div class="strip-chip" data-platform="Custom">
                            <div class="p-icon" style="background:#1a1a2e;border:1px solid var(--border)">
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#aaa" stroke-width="2" stroke-linecap="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                            </div>
                            <span>${T('chip_custom')}</span>
                        </div>
                        <div class="strip-chip">
                            <div class="p-icon" style="background:#1a1a2e;border:1px solid var(--border)">
                                <span style="font-size:10px;font-weight:800;color:var(--sub)">+30</span>
                            </div>
                            <span>${T('chip_more')}</span>
                        </div>
                    </div>
                </div>
            </main>

            <aside class="sidebar-right">
                <div class="sidebar-top">
                    <div class="sidebar-tabs">
                        <div class="stab active" data-tab="Playlist">${T('tab_playlist')}</div>
                        <div class="stab" data-tab="History">${T('tab_history')}</div>
                    </div>
                    <div class="sidebar-content" id="sidebarContent">
                        <div class="empty-sidebar">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>
                            <p>${T('playlist_empty')}<br><small style="font-size:11px;opacity:0.6">${T('playlist_empty_desc')}</small></p>
                        </div>
                    </div>
                </div>

                <div class="chat-pane">
                    <div class="chat-header">${T('chat_activity')}</div>
                    <div class="chat-messages" id="chatMessages">
                        <div class="sys-msg">${T('room_created', { name: userName })}</div>
                        <div class="sys-msg">${T('share_code', { code: roomCode })}</div>
                    </div>
                    <div class="chat-input-bar">
                        <input class="chat-input" type="text" placeholder="${T('message_placeholder')}">
                        <button class="chat-send">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                        </button>
                    </div>
                </div>
            </aside>

            <footer class="bottombar">
                <div class="user-chip">
                    <div class="user-avatar-ring">
                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=${userAvatar}" alt="${userName}">
                    </div>
                    <div class="user-meta">
                        <span class="user-name-sm">${userName}</span>
                        <span class="user-status"><span class="status-dot"></span>${T('online')}</span>
                    </div>
                </div>
                <div class="bottombar-right" style="margin-left: auto;">
                    <button class="tbtn tbtn-ghost" id="inviteBtnBottom" style="font-size:11px">${T('invite_friends')}</button>
                </div>
            </footer>
        </div>

        <div id="localVideoContainer">
            <video id="localVideo" autoplay playsinline muted></video>
            <div class="preview-label">${T('preview_you')}</div>
            <div class="hover-hint" data-expand="${T('hint_expand')}" data-collapse="${T('hint_collapse')}"></div>
        </div>

        <div class="app-modal-overlay" id="membersModal" onclick="if(event.target===this)closeMembersModal()">
            <div class="app-modal" style="max-width: 400px; padding: 24px;">
                <button class="app-modal-close" onclick="closeMembersModal()">✕</button>
                <h3 style="margin-bottom: 20px; font-family: 'Syne', sans-serif;">${T('room_members')}</h3>
                <div style="display: flex; flex-direction: column; gap: 14px;">
                    <div style="display: flex; align-items: center; justify-content: space-between; padding-bottom: 12px; border-bottom: 1px solid var(--border);">
                        <div style="display: flex; align-items: center; gap: 12px;">
                            <div style="width: 38px; height: 38px; border-radius: 50%; border: 2px solid var(--accent); padding: 2px;">
                                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=${userAvatar}" style="width: 100%; height: 100%; border-radius: 50%;">
                            </div>
                            <div>
                                <div style="font-size: 14px; font-weight: 700;">${userName}</div>
                                <div style="font-size: 11px; color: var(--online); display: flex; align-items: center; gap: 4px;"><span class="status-dot"></span>${T('host')}</div>
                            </div>
                        </div>
                        <div style="font-size: 10px; color: var(--muted);">${T('moderator')}</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="app-modal-overlay" id="settingsModal" onclick="if(event.target===this)closeSettingsModal()">
            <div class="app-modal" style="max-width: 460px; padding: 28px;">
                <button class="app-modal-close" onclick="closeSettingsModal()">✕</button>
                <div class="settings-header" style="margin-bottom: 24px;">
                    <h3 style="font-family: 'Syne', sans-serif; font-size: 20px; margin-bottom: 6px;">${T('room_settings')}</h3>
                    <p style="font-size: 13px; color: var(--muted);">${T('settings_subtitle')}</p>
                </div>
                
                <div class="settings-scroll" style="max-height: 480px; overflow-y: auto; padding-right: 10px; display: flex; flex-direction: column; gap: 28px;">
                    <div class="settings-section">
                        <div style="font-size: 10px; font-weight: 800; color: var(--accent); letter-spacing: 1.5px; text-transform: uppercase; margin-bottom: 14px;">${T('section_general')}</div>
                        <div style="display: flex; flex-direction: column; gap: 16px;">
                            <div style="display: flex; align-items: center; justify-content: space-between;">
                                <div>
                                    <div style="font-size: 14px; font-weight: 600; color: var(--text);">${T('room_visibility')}</div>
                                    <div style="font-size: 11px; color: var(--muted);">${T('room_visibility_desc')}</div>
                                </div>
                                <select class="custom-select">
                                    <option>${T('visibility_public')}</option>
                                    <option>${T('visibility_private')}</option>
                                    <option>${T('visibility_friends')}</option>
                                </select>
                            </div>
                            <div style="display: flex; align-items: center; justify-content: space-between;">
                                <div>
                                    <div style="font-size: 14px; font-weight: 600; color: var(--text);">${T('auto_play_next')}</div>
                                    <div style="font-size: 11px; color: var(--muted);">${T('auto_play_next_desc')}</div>
                                </div>
                                <div class="custom-toggle active" onclick="this.classList.toggle('active')">
                                    <div class="toggle-knob"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="settings-section">
                        <div style="font-size: 10px; font-weight: 800; color: var(--accent); letter-spacing: 1.5px; text-transform: uppercase; margin-bottom: 14px;">${T('section_permissions')}</div>
                        <div style="display: flex; flex-direction: column; gap: 16px;">
                            <div style="display: flex; align-items: center; justify-content: space-between;">
                                <div>
                                    <div style="font-size: 14px; font-weight: 600; color: var(--text);">${T('playback_control')}</div>
                                    <div style="font-size: 11px; color: var(--muted);">${T('playback_control_desc')}</div>
                                </div>
                                <select class="custom-select">
                                    <option>${T('permission_host_only')}</option>
                                    <option>${T('permission_everyone')}</option>
                                    <option>${T('permission_trusted')}</option>
                                </select>
                            </div>
                            <div style="display: flex; align-items: center; justify-content: space-between;">
                                <div>
                                    <div style="font-size: 14px; font-weight: 600; color: var(--text);">${T('search_and_add')}</div>
                                    <div style="font-size: 11px; color: var(--muted);">${T('search_and_add_desc')}</div>
                                </div>
                                <select class="custom-select">
                                    <option>${T('permission_host_only')}</option>
                                    <option>${T('permission_everyone')}</option>
                                </select>
                            </div>
                            <div style="display: flex; align-items: center; justify-content: space-between;">
                                <div>
                                    <div style="font-size: 14px; font-weight: 600; color: var(--text);">${T('room_lock')}</div>
                                    <div style="font-size: 11px; color: var(--muted);">${T('room_lock_desc')}</div>
                                </div>
                                <div class="custom-toggle" onclick="this.classList.toggle('active')">
                                    <div class="toggle-knob"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="settings-section">
                        <div style="font-size: 10px; font-weight: 800; color: var(--accent); letter-spacing: 1.5px; text-transform: uppercase; margin-bottom: 14px;">${T('section_sync_video')}</div>
                        <div style="display: flex; flex-direction: column; gap: 16px;">
                            <div style="display: flex; align-items: center; justify-content: space-between;">
                                <div>
                                    <div style="font-size: 14px; font-weight: 600; color: var(--text);">${T('sync_sensitivity')}</div>
                                    <div style="font-size: 11px; color: var(--muted);">${T('sync_sensitivity_desc')}</div>
                                </div>
                                <input type="range" min="1" max="10" value="3" style="width: 80px; accent-color: var(--accent);">
                            </div>
                            <div style="display: flex; align-items: center; justify-content: space-between;">
                                <div>
                                    <div style="font-size: 14px; font-weight: 600; color: var(--text);">${T('max_resolution')}</div>
                                    <div style="font-size: 11px; color: var(--muted);">${T('max_resolution_desc')}</div>
                                </div>
                                <select class="custom-select">
                                    <option>${T('auto_4k')}</option>
                                    <option>1080p</option>
                                    <option>720p</option>
                                    <option>480p</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="settings-section">
                        <div style="font-size: 10px; font-weight: 800; color: var(--accent); letter-spacing: 1.5px; text-transform: uppercase; margin-bottom: 14px;">${T('section_appearance')}</div>
                        <div style="display: flex; flex-direction: column; gap: 16px;">
                            <div style="display: flex; align-items: center; justify-content: space-between;">
                                <div>
                                    <div style="font-size: 14px; font-weight: 600; color: var(--text);">${T('chat_font_size')}</div>
                                    <div style="font-size: 11px; color: var(--muted);">${T('chat_font_size_desc')}</div>
                                </div>
                                <select style="background: rgba(255,255,255,0.05); border: 1px solid var(--border); color: var(--text); padding: 4px 8px; border-radius: 4px; font-size: 12px;">
                                    <option>${T('size_small')}</option>
                                    <option selected>${T('size_medium')}</option>
                                    <option>${T('size_large')}</option>
                                </select>
                            </div>
                            <div style="display: flex; align-items: center; justify-content: space-between;">
                                <div>
                                    <div style="font-size: 14px; font-weight: 600; color: var(--text);">${T('oled_black')}</div>
                                    <div style="font-size: 11px; color: var(--muted);">${T('oled_black_desc')}</div>
                                </div>
                                <div style="width: 32px; height: 18px; background: rgba(255,255,255,0.1); border-radius: 10px; position: relative; cursor: pointer;">
                                    <div style="width: 14px; height: 14px; background: #fff; border-radius: 50%; position: absolute; left: 2px; top: 2px;"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div style="display: flex; gap: 12px; margin-top: 32px;">
                    <button class="tbtn tbtn-ghost" style="flex: 1; padding: 12px;" onclick="closeSettingsModal()">${T('btn_cancel')}</button>
                    <button class="app-modal-btn-primary" style="flex: 2; margin-top: 0; padding: 12px;" onclick="closeSettingsModal()">${T('btn_apply')}</button>
                </div>
            </div>
        </div>

        <div class="app-modal-overlay" id="appModal" onclick="if(event.target===this)closeAppModal()">
            <div class="app-modal">
                <button class="app-modal-close" onclick="closeAppModal()">✕</button>

                <div class="app-modal-header">
                    <div class="app-modal-app-icon">
                        <svg width="28" height="28" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 12 L14 28 L30 20 Z" fill="white"/>
                        </svg>
                    </div>
                    <div class="app-modal-title-block">
                        <h3 id="appModalTitle">${T('app_modal_title')}</h3>
                        <p id="appModalSubtitle">${T('app_modal_subtitle')}</p>
                    </div>
                </div>

                <div class="app-modal-platforms">
                    <span class="app-modal-plat-label">${T('works_on')}</span>
                    <div class="app-modal-plat-logos">
                        <img src="https://www.google.com/s2/favicons?domain=netflix.com&sz=64" alt="Netflix">
                        <img src="https://www.google.com/s2/favicons?domain=disneyplus.com&sz=64" alt="Disney+">
                        <img src="https://www.google.com/s2/favicons?domain=primevideo.com&sz=64" alt="Prime">
                        <img src="https://www.google.com/s2/favicons?domain=hulu.com&sz=64" alt="Hulu">
                        <img src="https://www.google.com/s2/favicons?domain=max.com&sz=64" alt="Max">
                        <img src="https://www.google.com/s2/favicons?domain=crunchyroll.com&sz=64" alt="Crunchyroll">
                    </div>
                    <span class="app-modal-plat-more">${T('plus_more')}</span>
                </div>

                <div class="app-modal-features">
                    <div class="app-modal-feat">
                        <div class="feat-icon">
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                        </div>
                        <span class="feat-text"><strong>${T('feat_sync')}</strong> — ${T('feat_sync_desc')}</span>
                    </div>
                    <div class="app-modal-feat">
                        <div class="feat-icon">
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                        </div>
                        <span class="feat-text"><strong>${T('feat_secure')}</strong> — ${T('feat_secure_desc')}</span>
                    </div>
                    <div class="app-modal-feat">
                        <div class="feat-icon">
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                        </div>
                        <span class="feat-text"><strong>${T('feat_anyone')}</strong> — ${T('feat_anyone_desc')}</span>
                    </div>
                </div>

                <div class="app-modal-proof">
                    <div class="proof-avatars">
                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=A1" alt="">
                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=B2" alt="">
                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=C3" alt="">
                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=D4" alt="">
                    </div>
                    <span class="proof-text"><strong id="liveViewerCount">1,247</strong> ${T('people_watching')}</span>
                    <span class="proof-live-dot"></span>
                </div>

                <div class="app-modal-actions">
                    <button class="app-modal-btn-primary" onclick="window.open(window.DOWNLOAD_URL, '_blank'); closeAppModal()">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                        ${T('download_btn')}
                    </button>
                    <div class="app-modal-platforms-os">
                        <span class="os-item os-available">
                            <svg width="12" height="12" viewBox="0 0 88 88" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M0 12.402l35.687-4.86.016 34.423-35.67.203zm35.67 33.529l.028 34.453L.028 75.48.026 45.7zm4.326-39.025L87.314 0v41.527l-47.318.376zm47.329 39.349l-.066 41.344-47.318-6.573-.065-34.842z"/></svg>
                            Windows
                            <span class="os-status-dot available"></span>
                        </span>
                        <span class="os-sep">·</span>
                        <span class="os-item os-soon">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                            macOS
                            <span class="os-badge-soon">${T('soon_badge')}</span>
                        </span>
                        <span class="os-sep">·</span>
                        <span class="os-item os-soon">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c2.025 0 3.896.6 5.453 1.63C16.91 4.386 16 5.814 16 7.5c0 .34.034.672.098.992C14.746 9.035 13.5 10.4 13.5 12c0 .088.004.175.01.262C13.01 12.09 12.51 12 12 12c-.51 0-1.01.09-1.51.262.006-.087.01-.174.01-.262 0-1.6-1.246-2.965-2.598-3.508A5.52 5.52 0 0 0 8 7.5c0-1.686-.91-3.114-2.453-3.87A9.973 9.973 0 0 1 12 2zM7.5 5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm9 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM12 13.5c2.761 0 5 1.343 5 3v.5c0 .552-.448 1.5-1 1.5H8c-.552 0-1-.948-1-1.5v-.5c0-1.657 2.239-3 5-3z"/></svg>
                            Linux
                            <span class="os-badge-soon">${T('soon_badge')}</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    `;

    const railHome = document.getElementById('railHome');
    const railMembers = document.getElementById('railMembers');
    const railSettings = document.getElementById('railSettings');

    railHome.onclick = () => {
        const playlistTab = [...document.querySelectorAll('.stab')].find(t => t.dataset.tab === 'Playlist');
        if (playlistTab) playlistTab.click();

        document.querySelectorAll('.rail-btn').forEach(b => b.classList.remove('active'));
        railHome.classList.add('active');
    };

    railMembers.onclick = () => {
        document.getElementById('membersModal').classList.add('show');
    };

    window.closeMembersModal = () => {
        document.getElementById('membersModal').classList.remove('show');
    };

    railSettings.onclick = () => {
        document.getElementById('settingsModal').classList.add('show');
    };

    window.closeSettingsModal = () => {
        document.getElementById('settingsModal').classList.remove('show');
    };

    const tabs = document.querySelectorAll('.stab');
    const sidebarContent = document.getElementById('sidebarContent');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            document.querySelectorAll('.rail-btn').forEach(b => b.classList.remove('active'));
            railHome.classList.add('active');

            const tabName = tab.dataset.tab || tab.textContent.trim();
            if (tabName === 'Playlist') {
                sidebarContent.innerHTML = `
                    <div class="empty-sidebar">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>
                        <p>${T('playlist_empty')}<br><small style="font-size:11px;opacity:0.6">${T('playlist_empty_desc')}</small></p>
                    </div>
                `;
            } else if (tabName === 'History') {
                sidebarContent.innerHTML = `
                    <div class="empty-sidebar">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                        <p>${T('history_empty')}<br><small style="font-size:11px;opacity:0.6">${T('history_empty_desc')}</small></p>
                    </div>
                `;
            }
        });
    });

    const chatInput = document.querySelector('.chat-input');
    const chatSend = document.querySelector('.chat-send');
    const chatMessages = document.getElementById('chatMessages');

    function sendChatMessage() {
        const text = chatInput.value.trim();
        if (!text) return;

        const now = new Date();
        const time = now.getHours() + ':' + now.getMinutes().toString().padStart(2, '0');

        const msgHtml = `
            <div class="chat-msg">
                <div class="msg-header">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=${userAvatar}" class="msg-avatar">
                    <span class="msg-name">${userName}</span>
                    <span class="msg-time">${time}</span>
                </div>
                <div class="msg-text">${text}</div>
            </div>
        `;

        chatMessages.insertAdjacentHTML('beforeend', msgHtml);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        chatInput.value = '';
    }

    chatSend.addEventListener('click', sendChatMessage);
    chatInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') sendChatMessage();
    });

    document.querySelectorAll('.strip-chip').forEach(chip => {
        chip.addEventListener('click', () => {
            const platform = chip.dataset.platform || chip.querySelector('span').textContent;
            showAppModal(platform);
        });
    });

    window.showAppModal = (platform) => {
        const title = document.getElementById('appModalTitle');
        const subtitle = document.getElementById('appModalSubtitle');
        const modal = document.getElementById('appModal');

        if (platform && platform !== 'Custom' && (platform.includes('Netflix') || platform.includes('Disney') || platform.includes('Prime') || platform.includes('Hulu') || platform.includes('HBO') || platform.includes('Crunchyroll'))) {
            title.textContent = T('platform_detected', { platform: platform });
            subtitle.innerHTML = T('platform_set_for', { platform: platform });
        } else {
            title.textContent = T('app_modal_title');
            subtitle.innerHTML = T('app_modal_subtitle');
        }

        modal?.classList.add('show');
    };

    const searchInput = document.querySelector('.search-input');
    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const val = searchInput.value.trim();
            if (val.includes('youtube.com') || val.includes('youtu.be')) {
                const stage = document.querySelector('.video-stage');
                stage.innerHTML = `
                    <div style="width:100%; height:100%; background:#000; display:flex; align-items:center; justify-content:center;">
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                `;
                searchInput.value = '';
                chatMessages.insertAdjacentHTML('beforeend', `<div class="sys-msg">📺 New video started!</div>`);
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }
        }
    });

    const inviteBtnBottom = document.getElementById('inviteBtnBottom');
    const inviteBtnTop = document.getElementById('inviteBtnTop');

    function handleInviteClick(btn) {
        if (!btn) return;
        btn.addEventListener('click', () => {
            navigator.clipboard?.writeText(window.location.href).then(() => {
                const originalText = btn.textContent;
                btn.textContent = T('link_copied');
                btn.style.color = '#34d47a';
                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.style.color = '';
                }, 2000);
            });
        });
    }
    handleInviteClick(inviteBtnBottom);
    handleInviteClick(inviteBtnTop);

    const micBtn = document.getElementById('micBtn');
    const camBtn = document.getElementById('camBtn');
    const localVideo = document.getElementById('localVideo');
    const localVideoContainer = document.getElementById('localVideoContainer');
    const micMeterTop = document.getElementById('micMeterTop');
    const micMeterBars = document.querySelectorAll('.mic-meter-bar');

    if (localVideoContainer) {
        localVideoContainer.addEventListener('click', () => {
            localVideoContainer.classList.toggle('expanded');
        });
    }

    let localStream = null;
    let audioContext = null;
    let analyser = null;
    let microphone = null;
    let animationId = null;

    async function ensureTrack(type) {
        if (localStream) {
            const tracks = type === 'audio' ? localStream.getAudioTracks() : localStream.getVideoTracks();
            if (tracks.length > 0) return true;
        }

        try {
            const constraints = type === 'audio' ? { audio: true } : { video: true };
            const newStream = await navigator.mediaDevices.getUserMedia(constraints);

            if (!localStream) {
                localStream = newStream;
            } else {
                newStream.getTracks().forEach(t => localStream.addTrack(t));
            }

            if (type === 'video' && localVideo) {
                localVideo.srcObject = localStream;
                localVideoContainer.classList.add('show');
            }

            if (type === 'audio') {
                startMicMeter();
            }

            return true;
        } catch (err) {
            console.error(`Media Error (${type}):`, err);
            alert(`${type === 'audio' ? 'Mikrofon' : 'Kamera'} erişimi engellendi.`);
            return false;
        }
    }

    function startMicMeter() {
        if (!localStream || localStream.getAudioTracks().length === 0) return;
        if (audioContext) return;

        try {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
            analyser = audioContext.createAnalyser();
            microphone = audioContext.createMediaStreamSource(localStream);
            analyser.smoothingTimeConstant = 0.8;
            analyser.fftSize = 1024;
            microphone.connect(analyser);

            const volumes = new Uint8Array(analyser.frequencyBinCount);

            function updateMeter() {
                analyser.getByteFrequencyData(volumes);
                let sum = 0;
                for (let v of volumes) sum += v;
                const average = sum / volumes.length;
                const volume = Math.min(100, Math.pow(average / 128, 0.5) * 100);

                if (micMeterBars) {
                    micMeterBars.forEach((bar, i) => {
                        const waveScales = [0.4, 0.7, 1.2, 1.5, 1.2, 0.7, 0.4];
                        const scale = waveScales[i] || 1;
                        const jitter = 0.8 + Math.random() * 0.4;
                        const h = Math.max(3, (volume / 100) * 20 * scale * jitter);

                        bar.style.height = h + 'px';
                        bar.style.opacity = volume > 5 ? 1 : 0.6;
                    });
                }
                animationId = requestAnimationFrame(updateMeter);
            }

            updateMeter();
            if (micMeterTop) micMeterTop.style.display = 'flex';
        } catch (e) {
            console.warn("Could not start mic meter", e);
        }
    }

    if (micBtn) {
        micBtn.onclick = async () => {
            const currentlyOff = micBtn.classList.contains('off');
            if (currentlyOff) {
                const success = await ensureTrack('audio');
                if (success) {
                    localStream.getAudioTracks().forEach(t => t.enabled = true);
                    micBtn.classList.remove('off');
                    micBtn.classList.add('active');
                    if (micMeterTop) micMeterTop.style.display = 'flex';
                    chatMessages.insertAdjacentHTML('beforeend', `<div class="sys-msg">🎙️ Microphone unmuted</div>`);
                }
            } else {
                if (localStream) localStream.getAudioTracks().forEach(t => t.enabled = false);
                micBtn.classList.add('off');
                micBtn.classList.remove('active');
                if (micMeterTop) micMeterTop.style.display = 'none';
                chatMessages.insertAdjacentHTML('beforeend', `<div class="sys-msg">🔇 Microphone muted</div>`);
            }
            chatMessages.scrollTop = chatMessages.scrollHeight;
        };
    }

    if (camBtn) {
        camBtn.onclick = async () => {
            const currentlyOff = camBtn.classList.contains('off');
            if (currentlyOff) {
                const success = await ensureTrack('video');
                if (success) {
                    localStream.getVideoTracks().forEach(t => t.enabled = true);
                    camBtn.classList.remove('off');
                    camBtn.classList.add('active');
                    localVideoContainer.classList.add('show');
                    chatMessages.insertAdjacentHTML('beforeend', `<div class="sys-msg">📷 Camera turned on</div>`);
                }
            } else {
                if (localStream) localStream.getVideoTracks().forEach(t => t.enabled = false);
                camBtn.classList.add('off');
                camBtn.classList.remove('active');
                localVideoContainer.classList.remove('show');
                chatMessages.insertAdjacentHTML('beforeend', `<div class="sys-msg">📹 Camera turned off</div>`);
            }
            chatMessages.scrollTop = chatMessages.scrollHeight;
        };
    }

    const leaveBtn = document.querySelector('.rail-btn[title="Leave room"]');
    if (leaveBtn) {
        leaveBtn.onclick = () => {
            if (confirm('Are you sure you want to leave the room?')) {
                window.location.href = '../';
            }
        };
    }

    const roomCodeEl = document.querySelector('.room-badge');
    if (roomCodeEl) {
        roomCodeEl.style.cursor = 'pointer';
        roomCodeEl.addEventListener('click', () => {
            navigator.clipboard?.writeText(roomCode).then(() => {
                const originalCode = roomCodeEl.querySelector('.room-badge-code').textContent;
                roomCodeEl.querySelector('.room-badge-code').textContent = T('code_copied');
                setTimeout(() => {
                    roomCodeEl.querySelector('.room-badge-code').textContent = originalCode;
                }, 1500);
            });
        });
    }

    (function startViewerCounter() {
        const el = document.getElementById('liveViewerCount');
        if (!el) return;
        function getETHour() {
            const now = new Date();
            const etOffset = now.toLocaleString('en-US', { timeZone: 'America/New_York', hour: 'numeric', hour12: false });
            return parseInt(etOffset, 10);
        }
        function getBaseForHour(h) {
            const curve = {
                0: 1250, 1: 1180, 2: 1050, 3: 600, 4: 350, 5: 210,
                6: 280, 7: 380, 8: 490, 9: 580, 10: 660, 11: 730,
                12: 790, 13: 820, 14: 810, 15: 840, 16: 880, 17: 950,
                18: 1100, 19: 1280, 20: 1450, 21: 1520, 22: 1480, 23: 1380
            };
            return curve[h] ?? 700;
        }
        function fmt(n) { return n.toLocaleString('en-US'); }
        let current = getBaseForHour(getETHour()) + Math.floor(Math.random() * 80) - 40;
        el.textContent = fmt(current);
        setInterval(() => {
            const targetBase = getBaseForHour(getETHour());
            const pull = Math.sign(targetBase - current) * Math.floor(Math.random() * 3);
            const drift = Math.floor(Math.random() * 9) - 4;
            current = Math.max(150, current + drift + pull);
            const display = fmt(current);
            if (el.textContent !== display) {
                el.style.transition = 'opacity 0.25s';
                el.style.opacity = '0.4';
                setTimeout(() => {
                    el.textContent = display;
                    el.style.opacity = '1';
                }, 250);
            }
        }, 3500);
    })();

    const platformMapping = {
        'K7M2N9': 'Netflix',
        'R4T8V1': 'Disney+',
        'X3Y6Z2': 'Prime Video',
        'A9B5C7': 'Hulu',
        'D1E4F8': 'HBO Max',
        'G2H6J3': 'Crunchyroll',
        'L5P0Q9': 'Custom Video Link'
    };
    if (platformMapping[roomCode]) {
        setTimeout(() => {
            const platform = platformMapping[roomCode];
            if (typeof window.showAppModal === 'function') {
                window.showAppModal(platform);
            }
            const appModalEl = document.getElementById('appModal');
            if (appModalEl) {
                appModalEl.removeAttribute('onclick');
                const closeBtn = appModalEl.querySelector('.app-modal-close');
                if (closeBtn) closeBtn.style.display = 'none';
                const primaryBtn = appModalEl.querySelector('.app-modal-btn-primary');
                if (primaryBtn) {
                    primaryBtn.setAttribute('onclick', "window.open(window.DOWNLOAD_URL, '_blank')");
                }
            }
        }, 1500);
    }
}

document.getElementById('errorModal')?.addEventListener('click', function (e) {
    if (e.target === this) {
        closeModal();
    }
});

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeModal();
        closeAppModal();
        closeSettingsModal();
    }
});