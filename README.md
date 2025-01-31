# **JWT Authentication Project**

This repository contains a complete implementation of JWT-based authentication built using **Node.js**, **Express.js**, **MongoDB**, and **React.js**. The project demonstrates user authentication with secure login, registration, and token-based session management.

## **Features**

- **User Registration**: New users can sign up by providing their credentials.
- **User Login**: Existing users can log in to access protected resources.
- **JWT Authentication**: Secure token-based authentication for APIs.
- **Protected Routes**: Restrict access to specific pages unless authenticated.
- **Logout Functionality**: Invalidate user sessions.

---

## **Technologies Used**

### **Backend**
- **Node.js**: JavaScript runtime for building server-side applications.
- **Express.js**: Framework for building RESTful APIs.
- **MongoDB**: NoSQL database for storing user information.
- **Mongoose**: Object Data Modeling (ODM) library for MongoDB.
- **JWT (jsonwebtoken)**: Library for generating and validating JSON Web Tokens.

### **Frontend**
- **React.js**: JavaScript library for building user interfaces.
- **Axios**: HTTP client for API communication.
- **React Router**: For handling navigation and protected routes.

---

## **Getting Started**

Follow these steps to run the project locally on your machine.

### **Prerequisites**
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or above)
- [MongoDB](https://www.mongodb.com/) (Community Edition or Atlas)
- [Git](https://git-scm.com/)
- [Visual Studio Code](https://code.visualstudio.com/) (or any code editor)

---

## **API Endpoints**

### **Authentication**
| Method | Endpoint         | Description               |
|--------|------------------|---------------------------|
| POST   | `/api/auth`      | User login                |
| POST   | `/api/register`  | User registration         |
| GET    | `/api/logout`    | Logout and invalidate JWT |

---

## **Screenshots**

### **Login Page**
Secure login for existing users.
![Login Page Screenshot](https://raw.githubusercontent.com/Prasath-36/JWT-Auth/main/screenshots/login.png)

### **Signup Page**
Secure signup for new users.
![Signup Page Screenshot](https://raw.githubusercontent.com/Prasath-36/JWT-Auth/main/screenshots/login.png)

### **Home Page**
Home page after authorizing the token
![Home Page Screenshot](https://raw.githubusercontent.com/Prasath-36/JWT-Auth/main/screenshots/login.png)
---



