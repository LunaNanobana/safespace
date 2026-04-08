
# 🛡️ SafeSpace — Women's Safety & Support Platform


A mobile and web platform designed to support women's safety, providing emergency tools, community support, shelter maps, and resources — all in one place.

---

## Features

- 🆘 **Emergency Screen** — one-tap SOS with location sharing
- 🗺️ **Shelter Map** — find nearby safe shelters and support centres
- 💬 **Community** — peer support and moderated discussion space
- 📚 **Resources** — curated legal, psychological, and safety resources
- 🤖 **AI Chat** — confidential AI-powered support conversations
- 🏠 **Welcome Flow** — thoughtful onboarding that doesn't overwhelm

---

## Tech Stack

**Mobile (Flutter)**
`Dart` · `Flutter` · `Google Maps`

**Web (React)**
`React` · `Vite` · `CSS Modules`

---

## Project Structure

```
safespace/
├── flutter/                  # Mobile app
│   └── lib/
│       ├── main.dart
│       ├── screens/
│       │   ├── welcome_screen.dart
│       │   ├── home_screen.dart
│       │   ├── emergency_screen.dart
│       │   ├── shelter_map_screen.dart
│       │   ├── community_screen.dart
│       │   ├── resources_screen.dart
│       │   └── chat_screen.dart
│       ├── widgets/
│       └── theme/app_theme.dart
└── web/                      # React web app
    └── src/
        ├── App.jsx
        ├── pages/
        │   ├── LandingPage.jsx
        │   ├── EmergencyPage.jsx
        │   ├── CommunityPage.jsx
        │   └── ChatPage.jsx
        ├── components/
        │   ├── Navbar.jsx
        │   └── Footer.jsx
        └── styles/global.css
```

---

## Run the Web App

```bash
cd web
npm install
npm run dev
```

## Run the Flutter App

```bash
cd flutter
flutter pub get
flutter run
```

---

## Design Decisions

- **Soft colour palette** — intentionally calming, not alarming
- **No login required for emergency features** — speed matters in a crisis
- **Offline-first emergency data** — key numbers and shelter addresses available without internet

---

*Built at Women's Hack Day 5th · 2026 · 2nd Place*
