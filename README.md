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
![Image](https://github.com/user-attachments/assets/416f5839-ce54-4996-bc2e-ec2854257491)
![Image](https://github.com/user-attachments/assets/4d74cf4f-97ac-4d25-b7bd-6d26a555e67e)

### **Signup Page**
Secure signup for new users.
![Image](https://github.com/user-attachments/assets/3101fb43-9661-43e2-bf83-f0321e57fbec)
![Image](https://github.com/user-attachments/assets/0aeef06a-dc76-4691-8ca3-2d41ddfaefad)

### **Home Page**
Home page after authorizing the token
![Image](https://github.com/user-attachments/assets/1f49ef04-24f5-4a1d-ad0f-debd245068ea)
---



