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

### Admin Portal
- Manage subjects, lessons, teachers, and students.

## Technology Stack

### Frontend
- **Framework:** React.js (via Vite)
- **Routing:** React Router DOM
- **Icons:** Lucide React
- **Styling:** Vanilla CSS (Modern, vibrant, and interactive design system)
- **API Calls:** Axios

### Backend
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB (via Mongoose)
- **Authentication:** JWT (JSON Web Tokens) & bcryptjs for password hashing

## Project Structure

```text
Rural-STEM-Quest/
├── backend/                  # Node.js + Express + MongoDB
│   ├── package.json
│   ├── server.js             # Entry point
│   ├── .env                  # Environment variables
│   ├── config/
│   │   └── db.js             # MongoDB connection
│   ├── controllers/          # Request handlers
│   ├── models/               # Mongoose schemas (User, Lesson, Progress)
│   ├── routes/               # API routes (Auth, Quiz, User)
│   └── middleware/           # Auth middlewares
│
├── frontend/                 # React + Vite
│   ├── package.json
│   ├── vite.config.js
│   ├── index.html
│   ├── src/
│   │   ├── main.jsx          # React DOM render
│   │   ├── App.jsx           # Main routing component
│   │   ├── index.css         # Global styles
│   │   ├── components/       # Reusable UI (Navbar, GameCard, Badge)
│   │   ├── pages/            # View components (Home, Dashboards, Quiz)
│   │   ├── context/          # React Context (Auth, Language)
│   │   ├── services/         # API calls (Axios)
│   │   └── assets/           # Images, icons, static files
│   └── public/
└── README.md
```

## Running the Project

### Starting the Backend
```bash
cd backend
npm install
npm start (or node server.js)
```

### Starting the Frontend
```bash
cd frontend
npm install
npm run dev
```
