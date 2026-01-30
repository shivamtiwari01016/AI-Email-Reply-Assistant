# 📧 AI Email Reply Assistant

An AI-powered Email Reply Assistant that helps users generate professional, context-aware email replies directly from Gmail or a web interface.  
This project includes:

- 🖥 **Spring Boot Backend (REST API)**
- ⚛️ **React Frontend (Web UI with tone selection)**
- 🧩 **Chrome Extension (Gmail integration – Professional tone only)**

It demonstrates full-stack integration, browser extension development, REST API design, and AI API consumption.

---
## 🧠 Problem Statement

AI tools like ChatGPT are widely used to draft email replies. However, in real-world usage, users often need to:
- Switch between Gmail and AI tools
- Copy and paste email content manually
- Reformat responses before sending

This context switching interrupts workflow and reduces productivity—especially for professionals handling a high volume of emails.

At the same time, users may want:
- Fine-grained tone control
- A separate drafting interface
- A safe testing environment for AI-generated responses

## ✅ Solution

This project provides **two modes of AI-powered email drafting**, designed for both speed and flexibility:

### 🔹 Chrome Extension Mode (Gmail Integration)
- Generates professional replies directly inside Gmail
- Eliminates tab switching
- Automatically inserts AI-generated responses into the email editor

### 🔹 Web UI Mode (React Application)
- Allows manual email input
- Supports tone selection (Professional, Casual, Friendly)
- Provides copy-to-clipboard functionality

---

## 🚀 What This Project Does

### Chrome Extension (Gmail Integration)
- Detects Gmail compose window
- Injects an **"AI Reply"** button
- Extracts email content
- Sends request to backend
- Inserts generated reply automatically
- Uses **Professional tone by default**

### React Web UI
- User pastes email content manually
- Selects tone:
  - Professional
  - Casual
  - Friendly
- Displays AI-generated reply
- Supports dark/light mode

---

## 🛠 Tech Stack

### Frontend (React)
- React (Vite)
- Material UI (MUI)
- Axios
- JavaScript ES6+

### Backend
- Java 21
- Spring Boot
- REST Controller
- WebClient
- Maven

### Chrome Extension
- Manifest V3
- Content Scripts
- DOM Manipulation
- MutationObserver API

### AI Integration
- Google Gemini API

---

## 🏗 Architecture Overview

```text
┌──────────────────────────┐        ┌──────────────────────────┐
│     Chrome Extension     │        │       React Web UI       │
│   (Gmail Integration)    │        │   (Standalone Interface) │
└─────────────┬────────────┘        └─────────────┬────────────┘
              │ HTTP Requests (JSON)              │ HTTP Requests (JSON)
              └───────────────┬───────────────────┘
                              ▼
                   ┌──────────────────────────┐
                   │     Spring Boot API      │
                   │     (Backend Service)    │
                   └─────────────┬────────────┘
                                 │ REST API Call
                                 ▼
                   ┌──────────────────────────┐
                   │       Gemini AI API      │
                   │   (External AI Service)  │
                   └──────────────────────────┘
```
Both the Chrome Extension and React Web UI communicate with a centralized Spring Boot backend, which interacts with the Gemini AI API.

---
## ⚙️ Setup Instructions

### 🔑 Prerequisites
- Node.js (v18+)
- Java 21
- Maven
- Gemini API key
- Chrome Browser

### 🖥 Run Backend (Spring Boot)
1. cd backend 
2. Set environment variables:
```text
set GEMINI_URL
set GEMINI_KEY
```
3. Run backend:
```text
mvn spring-boot:run
```
4. Backend runs at:
  ```text
  http://localhost:8080
````

### ⚛️ Run Frontend (React UI)

1. cd frontend 
2. Run the command:
```text
npm install
npm run dev
```
3. Open at:
```text
http://localhost:5173
```

### 🧩 Load Chrome Extension

1. Open Chrome
2. Go to: chrome://extensions
3. Enable Developer Mode
4. Click Load Unpacked
5. Select the extension folder
6. Open Gmail and compose an email
7. Click AI Reply

<sub>Note: Extension generates replies in Professional tone only.</sub>
---
## 📸 Screenshots

### Chrome Extension (Gmail)
![Chrome Extension Gmail Integration](screenshots/gmail-extension.jpeg)

### Web UI
![React Web UI](screenshots/web-ui.jpeg)

---
## 📈 Future Improvements

- Gmail OAuth integration
- User authentication
- Tone auto-detection
- Cloud deployment (Render + Vercel)
- Chrome Web Store publishing
- Email history tracking
This dual-mode approach balances **workflow efficiency** with **customization and control**
