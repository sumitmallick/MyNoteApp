# 📝 Full-Stack Note App (Node.js + React)

This is a simple full-stack note-taking application built using:

- 🚀 Node.js (Express) for the backend API  
- ⚛️ React for the frontend user interface  
- 📦 Axios for HTTP requests  
- 💾 In-memory storage (no database required, but easy to extend)

---

## 🧱 Project Structure

NoteApp/
├── note-app/ <!-- Node.js Express API -->
│   ├── controllers/ <!-- Handles logic for each route -->
│   ├── routes/ <!-- API route definitions -->
│   ├── server.js <!-- Entry point of backend app -->
│   └── package.json <!-- Backend dependencies and scripts -->
├── note-app-fe/ <!-- React application -->
│   ├── public/ <!-- Public static files -->
│   ├── src/
│   │   ├── api/ <!-- Axios HTTP client setup -->
│   │   ├── components/ <!-- Reusable React components -->
│   │   ├── App.js <!-- Main React component -->
│   │   └── index.js <!-- Entry point of React app -->
│   └── package.json <!-- Frontend dependencies and scripts -->
└── README.md <!-- Project documentation -->


---

## 🚀 Features

- Create, Read, Update, Delete (CRUD) notes  
- React frontend with dynamic form and list display  
- RESTful Express backend with CORS enabled  
- Clean project structure (scalable and easy to maintain)

---

## 🧰 Tech Stack

| Frontend | Backend         |
|----------|------------------|
| React    | Node.js (Express) |
| Axios    | Body-Parser      |
| CSS      | CORS Middleware  |

---

## 🛠️ Getting Started

Follow these steps to run the app locally.

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/note-app.git
cd note-app

## 📦 Backend Setup (Node.js API)

📁 Path: `./backend`

### 1. Install dependencies

```bash
cd backend
npm install

2. Start the server

npm start
🟢 The API server will run on:
http://localhost:3000


📡 API Endpoints
| Method | Endpoint        | Description     |
| ------ | --------------- | --------------- |
| GET    | /api/notes      | Get all notes   |
| POST   | /api/notes      | Create new note |
| GET    | /api/notes/\:id | Get note by ID  |
| PUT    | /api/notes/\:id | Update note     |
| DELETE | /api/notes/\:id | Delete note     |


⚛️ Frontend Setup (React)
📁 Path: ./frontend

1. Install dependencies
cd ../frontend
npm install

2. Start the React app
npm start

🟢 React will run on http://localhost:3001
(or http://localhost:5173 if using Vite)

🛑 Important: Make sure the backend server is running on http://localhost:3000

🧪 Testing the App
1. Run backend server (from /note-app):
npm start

2. Run frontend app (from /note-app-fe):
npm start

Open http://localhost:3001 in your browser

Create, edit, and delete notes via the UI

Open browser dev tools → Network tab to inspect API calls

📌 Example Notes API Payload
POST /api/notes
Request Body:
{
  "title": "Meeting Notes",
  "content": "Discuss project deadlines"
}

{
  "id": 1,
  "title": "Meeting Notes",
  "content": "Discuss project deadlines"
}
#
curl --location --request GET 'http://localhost:3000/api/notes' \
--header 'Content-Type: application/json' \
--data '{
    "title": "NewNote9",
    "content": "New Great Note9"
}'
