# 📚 AI Study Buddy

<div align="center">

### Your Personal Smart Learning Assistant

Learn smarter with personalized study tools, interactive quizzes and study planning 🚀

![HTML](https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)

</div>

---

## 📌 Project Overview

**AI Study Buddy** is a web-based smart learning application designed to help students improve their learning experience and organize their studies.

It provides interactive quizzes, adaptive lesson cards, a study dashboard, task planning and revision notes. The backend also supports generating flashcards, quizzes and answers to study-related doubts from user-provided notes.

This project demonstrates frontend development, backend integration and interactive learning features.

## 🎯 Objectives

- Develop a user-friendly study assistant.
- Create interactive learning and quiz features.
- Help students organize their study tasks.
- Generate flashcards and quizzes from study notes.
- Provide topic-related responses based on user notes.
- Track learning progress and study activities.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| HTML | Web page structure |
| CSS | Styling and responsive layout |
| JavaScript | Interactive functionality |
| Node.js | Backend runtime |
| Express.js | Backend server and API development |
| CORS | Cross-origin resource sharing |

## ✨ Features

| Feature | Description |
|---|---|
| Adaptive Lessons | Explore lesson cards and learning topics |
| Interactive Quiz | Answer questions and receive feedback |
| Study Dashboard | View learning progress and study statistics |
| Study Planner | Add and manage study tasks |
| Revision Notes | Write and organize quick study notes |
| Flashcard Generator | Generate flashcards from study notes |
| Quiz Generator | Create quizzes based on provided notes |
| Doubt Assistance | Get responses based on study notes |

## 🔗 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | Open the Study Buddy application |
| POST | `/api/flashcards` | Generate flashcards from notes |
| POST | `/api/quiz` | Generate quiz questions from notes |
| POST | `/api/doubt` | Get a response to a study-related question |

**Note:** The flashcard, quiz and doubt APIs require study notes containing at least 100 characters.

## 📂 Project Structure

```text
study-buddy/
│
├── .vscode/
├── index.html
├── pro.html
├── project.html
├── poject2.html
├── styles.css
├── script.js
├── server.js
├── package.json
└── README.md
```

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/Navanthika13/study-buddy.git
```

### 2. Navigate to the project directory

```bash
cd study-buddy
```

### 3. Install dependencies

```bash
npm install
```

### 4. Run the application

```bash
npm start
```

### 5. Open the application

Visit the following URL in your browser:

```text
http://localhost:3000
```

The Express server serves the application and handles the backend API requests.

## 🔍 API Testing

Example flashcard request:

```http
POST /api/flashcards
```

Example quiz request:

```http
POST /api/quiz
```

Example doubt assistance request:

```http
POST /api/doubt
```

These endpoints accept JSON request data containing study notes and the relevant information.

## 📚 Concepts Learned

- Frontend web development
- HTML, CSS and JavaScript integration
- Node.js and Express.js
- REST API development
- HTTP methods and JSON data handling
- Backend and frontend communication
- Interactive quiz development
- Processing user-provided study notes

## 🚧 Future Improvements

- User login and authentication
- Save individual study progress
- Add more subjects and learning materials
- Improve quiz difficulty levels
- Add persistent storage for notes and tasks
- Enhance personalized learning recommendations

## 👩‍💻 Developer

**Navanthika**

Information Technology Student | Aspiring Software Developer

[GitHub Profile](https://github.com/Navanthika13)

[Project Repository](https://github.com/Navanthika13/study-buddy)

---

<div align="center">

### 💜 Built with HTML, CSS, JavaScript & Node.js

**Learn | Practice | Grow**

</div>
