# 💬 Link&Sync - Realtime Chat Application

A modern realtime chat application built using **React.js**, **Node.js**, **Express.js**, **Socket.IO**, and **Tailwind CSS**. Link&Sync allows users to chat globally or create private rooms with instant realtime communication, live online users, typing indicators, and a responsive modern UI.

---

## 🚀 Live Demo

### Frontend
https://linkandsync-frontend.onrender.com

### Backend
https://link-sync-backend.onrender.com

---

# ✨ Features

- 🌍 Global Chat
- 🔐 Private Room Creation
- 🔑 Join Existing Room
- ⚡ Realtime Messaging using Socket.IO
- 👥 Live Online Users
- 🟢 User Join & Leave Notifications
- 📋 Copy Room Code
- 📱 Fully Responsive Design
- 🎨 Modern Glassmorphism UI
- 🌌 Animated Aurora Background
- 💬 Beautiful Message Bubbles
- 🔥 Smooth Framer Motion Animations
- 🚀 Fast & Lightweight
- 🌐 Deployed on Render

---

# 🛠 Tech Stack

## Frontend

- React.js
- Vite
- Tailwind CSS
- Framer Motion
- Socket.IO Client
- React Router DOM
- Lucide React

---

## Backend

- Node.js
- Express.js
- Socket.IO
- CORS
- dotenv

---

## 📂 Project Structure

```text
Task-3-Realtime-Chat-App
│
├── client
│   ├── public
│   ├── src
│   │   ├── assets
│   │   ├── components
│   │   │   ├── AnimatedButton.jsx
│   │   │   ├── AuroraBackground.jsx
│   │   │   ├── ChatHeader.jsx
│   │   │   ├── ChatWindow.jsx
│   │   │   ├── GlassCard.jsx
│   │   │   ├── InputField.jsx
│   │   │   ├── Logo.jsx
│   │   │   ├── MessageBubble.jsx
│   │   │   ├── MessageInput.jsx
│   │   │   ├── ModeCard.jsx
│   │   │   ├── OnlineUsers.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   └── StatsCard.jsx
│   │   ├── context
│   │   │   └── SocketContext.jsx
│   │   ├── hooks
│   │   │   └── useSocket.js
│   │   ├── pages
│   │   │   ├── Login.jsx
│   │   │   └── Chat.jsx
│   │   ├── socket
│   │   │   └── socket.js
│   │   ├── styles
│   │   ├── utils
│   │   ├── App.jsx
│   │   └── index.css
│   │
│   ├── package.json
│   └── vite.config.js
│
├── server
│   ├── socket
│   │   └── socketHandler.js
│   ├── server.js
│   ├── package.json
│   └── .env
│
└── README.md
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/krishnagarg-dev/CoreGen-FullStack.git
```

Move to project

```bash
cd Task-3-Realtime-Chat-App
```

---

## Frontend Setup

```bash
cd client
npm install
npm run dev
```

Runs on

```
http://localhost:5173
```

---

## Backend Setup

```bash
cd server
npm install
npm run dev
```

Runs on

```
http://localhost:5000
```

---

# 🔑 Environment Variables

Create a `.env` file inside the **server** folder.

```env
PORT=5000

FRONTEND_URL=http://localhost:5173
```

---

# 📸 Screenshots

### Login Page

(Add Screenshot Here)

---

### Global Chat

(Add Screenshot Here)

---

### Private Room

(Add Screenshot Here)

---

### Mobile Responsive UI

(Add Screenshot Here)

---

# 🚀 Deployment

### Frontend

Render Static Site

Build Command

```bash
npm install && npm run build
```

Publish Directory

```
dist
```

---

### Backend

Render Web Service

Build Command

```bash
npm install
```

Start Command

```bash
npm start
```

---

# 📌 Future Improvements

- ✅ Emoji Picker
- ✅ File Sharing
- ✅ Image Upload
- ✅ Voice Messages
- ✅ Read Receipts
- ✅ Message Search
- ✅ User Authentication
- ✅ Dark / Light Theme
- ✅ Message Reactions
- ✅ Chat History Database

---

# 👨‍💻 Author

**Krishna Garg**

GitHub

https://github.com/krishnagarg-dev

LinkedIn

(Add LinkedIn URL)

---

# ⭐ Support

If you like this project, don't forget to ⭐ star the repository.

Happy Coding ❤️