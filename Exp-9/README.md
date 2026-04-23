# 🔐 Spring Security + JWT Authentication 
by Kunal Raina

This project shows how to build a secure login system using Spring Security and JWT (JSON Web Tokens) in a REST API.

After logging in, users get a token which they can use to access protected APIs.

## 🚀 Features

- Login using email and password
- JWT Token Generation on Login
- Stateless Session Management
- Secure REST APIs using Spring Security
- Role-based Authorization (optional extension)
- MySQL / PostgreSQL Database Integration
- Password Encryption using BCrypt

## 🛠️ Tech Stack

- Java 17+
- Spring Boot
- Spring Security
- JWT (JSON Web Token)
- Hibernate / JPA
- MySQL / PostgreSQL
- Maven

## 📁 Project Structure

```text
com.agam.rest_example
│
├── Controller
├── Service
├── Repository
├── Entity
├── Security
└── Config
```

## 🔑 Authentication Flow

1. User sends login request with credentials
2. Server validates user using Spring Security
3. JWT token is generated
4. Token is returned to client
5. Client sends token in Authorization header for protected APIs
6. Server validates token before granting access

## 📌 API Endpoints

### 🔓 Public Endpoints

- `POST /register`
- `POST /login`

### 🔒 Protected Endpoints

- `GET /api/students/{id}`

Headers: `Authorization: Bearer <your_jwt_token>`

## 🧪 Testing with Postman

1. Login using `/api/auth/login`
2. Copy token
3. Use it in Authorization header for protected APIs

## 🔐 Security Configuration

- CSRF disabled
- Stateless session
- JWT filter added before `UsernamePasswordAuthenticationFilter`
- BCrypt password encoding

## Screenshots
<img width="1242" height="818" alt="Screenshot 2026-04-02 191842" src="screenshots/run.png" />
<img width="1578" height="685" alt="Screenshot 2026-04-02 191645" src="screenshots/1.png" />
<img width="1590" height="619" alt="Screenshot 2026-04-02 191740" src="screenshots/2.png" />
<img width="1573" height="719" alt="Screenshot 2026-04-02 191824" src="screenshots/3.png" />














