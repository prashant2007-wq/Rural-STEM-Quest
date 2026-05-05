# Rural STEM Quest

**SIH25048 — Gamified Learning Platform for Rural Education**

Rural STEM Quest is a gamified digital learning platform built for rural school students from grades 6–12. It focuses on STEM subjects (Maths, Science, Computer Science) and offers interactive learning through mini-games, quizzes, levels, badges, and progress tracking. 

The platform provides a highly engaging interface, offline-ready capabilities, and a multilingual experience to cater to rural education needs.

## Features

### Student Portal
- **Class Selection:** Support for grades 6 to 12.
- **Subject Choice:** Maths, Science, and Computer Science.
- **Gamified Learning:** Quiz-based games, XP systems, badges, and level progression.
- **Progress Tracking:** Personal dashboard for monitoring learning milestones.
- **Multilingual Support:** Seamless switching between English and Hindi.
- **Offline Access:** Capability to download lessons for offline study.

### Teacher Portal
- **Class Management:** Login and manage student classes.
- **Content Creation:** Add and edit custom quiz questions.
- **Analytics Dashboard:** Track class performance, monitor individual student progress, and identify weak topics.

## Technology Stack

- **Framework:** React.js (via Vite)
- **Routing:** React Router DOM
- **Icons:** Lucide React
- **Styling:** Vanilla CSS (Modern, vibrant, and interactive design system)
- **Data Persistence:** LocalStorage (Simulated backend persistence)

## Project Structure

```text
Rural-STEM-Quest/
├── package.json
├── vite.config.js
├── index.html
├── src/
│   ├── main.jsx          # React DOM render
│   ├── App.jsx           # Main routing component
│   ├── index.css         # Global styles
│   ├── components/       # Reusable UI (Navbar, Sidebar, GameCard, Badge)
│   ├── pages/            # View components (Home, Dashboards, Quiz, Lessons)
│   ├── context/          # React Context (Auth, Language)
│   └── assets/           # Images, icons, static files
├── public/
└── README.md
```

## Running the Project

```bash
npm install
npm run dev
```
