# 🎓 Student Management System

<div align="center">

### A Full-Stack Application for Managing Student Records

Built with Python, Django and React 🚀

![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Django](https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![REST API](https://img.shields.io/badge/REST-API-purple?style=for-the-badge)

</div>

---

## 📌 Project Overview

The **Student Management System** is a full-stack web application developed using Django and React.

It allows users to manage student information, including personal details, course information, enrollment dates and student status.

The application performs CRUD operations through REST API integration between the frontend and backend.

This project demonstrates full-stack development, API integration, database operations and student record management.

## 🎯 Objectives

- Understand full-stack application architecture.
- Develop backend APIs using Django REST Framework.
- Build a frontend using React.
- Perform CRUD operations on student records.
- Connect frontend and backend using Axios.
- Manage student and course information.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| Python | Backend programming language |
| Django | Backend framework |
| Django REST Framework | REST API development |
| React.js | Frontend development |
| JavaScript | Frontend programming |
| HTML & CSS | User interface |
| Axios | API communication |
| SQLite / Configured Database | Data storage |

## ✨ Features

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/students/` | Retrieve all students |
| POST | `/api/students/` | Add a new student |
| GET | `/api/students/<id>/` | Retrieve a specific student |
| PUT/PATCH | `/api/students/<id>/` | Update student details |
| DELETE | `/api/students/<id>/` | Delete a student |

## 📂 Project Structure

```text
student-management-system/
│
├── backend/
│   ├── manage.py
│   ├── ...
│
├── frontend/
│   ├── src/
│   ├── package.json
│   └── ...
│
└── README.md
```

*Note: The structure is simplified. Update it to match your actual repository files.*

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/Navanthika13/student-management-system.git
```

### 2. Navigate to the project directory

```bash
cd student-management-system
```

### 3. Setup the backend

```bash
cd backend
```

Install dependencies:

```bash
pip install django djangorestframework django-cors-headers
```

Run database migrations:

```bash
py manage.py migrate
```

### 4. Run the backend server

```bash
py manage.py runserver
```

Backend URL:

```text
http://127.0.0.1:8000/
```

### 5. Setup the frontend

Open another terminal:

```bash
cd student-management-system/frontend
```

Install dependencies:

```bash
npm install
```

### 6. Run the frontend

```bash
npm run dev
```

*Note: Use the start command configured in your frontend project if it differs.*

## 🔍 API Testing

The backend REST APIs can be tested using a browser or API testing tools.

Example API request:

```http
GET /api/students/
```

Example student creation:

```http
POST /api/students/
```

## 📚 Concepts Learned

- Full-stack web development
- Django and React integration
- REST API development
- CRUD operations
- HTTP methods
- Axios API requests
- Student and course data management
- Frontend and backend communication

## 🚧 Future Improvements

- User authentication and authorization
- Student search and filtering
- Dashboard with student statistics
- Improved user interface
- Advanced reporting features

## 👩‍💻 Developer

**Navanthika**

Information Technology Student | Aspiring Software Developer

[GitHub Profile](https://github.com/Navanthika13)

---

<div align="center">

### 💜 Built with Django & React

**Learn | Build | Improve**

</div>
