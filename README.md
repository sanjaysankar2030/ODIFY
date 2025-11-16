# **README**
# **Read this to understand how to run and modify the code**
# **ODIFY – Intelligent On-Duty (OD) Management System**

A MERN-stack application for managing OD requests in colleges.
Students submit OD forms, faculty/HoD review them, and admins track department-wise statistics.

This project contains:

```
/backend     -> Node.js + Express + MongoDB
/frontend    -> React (Vite or CRA — adjust below)
```

---

# **Prerequisites**

Install these before running:

* Node.js (v18+)
* npm or yarn
* MongoDB (local or Atlas)

---

# **1. Clone the Repository**

```bash
git clone https://github.com/<your_repo>/ODIFY.git
cd ODIFY
```

---

# **2. Backend Setup (Node + Express)**

### **Go to backend**

```bash
cd backend
```

### **Install dependencies**

```bash
npm install
```

### **Create `.env`**

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/odify
```

If you're using MongoDB Atlas, paste the SRV link.

### **Run backend**

```bash
npm run dev   # nodemon
```

Backend default URL:

```
http://localhost:5000
```

---

# **3. Frontend Setup (React)**

### **Go to frontend**

```bash
cd ../frontend
```

### **Install dependencies**

```bash
npm install
```

### **Start the frontend**

If you're using Vite:

```bash
npm run dev
```

If you're using CRA:

```bash
npm start
```

Frontend default URL:

```
http://localhost:5173   (Vite)
http://localhost:3000   (CRA)
```

---

# **4. Connecting Frontend to Backend**

Inside your frontend project, create a file:

```
src/config.js
```

Add:

```js
export const API_URL = "http://localhost:5000";
```

Use it in Axios:

```js
import axios from "axios";
import { API_URL } from "./config";

axios.post(`${API_URL}/od/create`, formData);
```

---

# **5. Available Backend Routes**

Adjust based on your implementation. Example:

```
POST   /od/create
GET    /od/list
GET    /od/:id
PUT    /od/:id
DELETE /od/:id
```

---

# **6. Running Both Together**

Open two terminals:

### Terminal 1:

```bash
cd backend
npm run dev
```

### Terminal 2:

```bash
cd frontend
npm run dev
```

Frontend → Backend communication is automatic via Axios.

---

# **7. Common Issues**

### **Frontend fails to start**

Delete and reinstall:

```bash
rm -rf node_modules package-lock.json
npm install
```

### **Backend not connecting to Mongo**

Check:

* MongoDB is running
* Correct MONGO_URI in `.env`

---

# **8. Project Structure**

```
ODIFY/
│
├── backend/
│   ├── server.js
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   ├── .env
│   └── package.json
│
└── frontend/
    ├── src/
    ├── public/
    └── package.json
```

---

If you want, I can generate a **production-ready README with badges**, or customize it to EXACTLY match your folder names and routes.
