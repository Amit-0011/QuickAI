# ⚡ QuickAI – AI Content & Utility Platform

**QuickAI** is a full-stack AI-powered platform that provides multiple productivity tools such as article writing, blog title generation, image generation, background removal, object removal, resume review, and community features — all inside a single authenticated dashboard.

🌐 **Live Demo:** https://quickai-orcin-eight.vercel.app  
📦 **Repository:** https://github.com/Amit-0011/QuickAI

---

## ✨ Features

- 🔐 Authentication & User Management (Clerk)
- 📝 Write AI Articles
- 📰 Generate Blog Titles
- 🎨 AI Image Generation
- 🖼 Remove Image Background
- ✂ Remove Objects from Images
- 📄 Resume Review using AI
- 👥 Community Section
- 📊 Dashboard with Tool Navigation
- ☁ Cloudinary Image Storage
- 📱 Fully Responsive UI

> This is not a single-tool demo app — it’s a **multi-feature AI SaaS-style platform**.

---

## 🛠 Tech Stack

### 🌐 Frontend

![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=ffffff)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=ffffff)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=ffffff)
![Clerk](https://img.shields.io/badge/Clerk-3B82F6?logo=clerk&logoColor=ffffff)
![Axios](https://img.shields.io/badge/Axios-5A29E4?logo=axios&logoColor=ffffff)
![React Router](https://img.shields.io/badge/React_Router-CA4245?logo=react-router&logoColor=ffffff)
![Lucide Icons](https://img.shields.io/badge/Lucide_Icons-000000?logo=lucide&logoColor=ffffff)

---

### 🖥 Backend

![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=ffffff)
![Express](https://img.shields.io/badge/Express-000000?logo=express&logoColor=ffffff)
![OpenAI](https://img.shields.io/badge/OpenAI-412991?logo=openai&logoColor=ffffff)
![Neon](https://img.shields.io/badge/Neon_DB-00E5FF?logo=postgresql&logoColor=ffffff)
![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?logo=cloudinary&logoColor=ffffff)
![Clerk](https://img.shields.io/badge/Clerk_Auth-3B82F6?logo=clerk&logoColor=ffffff)

---

### 🔌 Utilities

![Multer](https://img.shields.io/badge/Multer-FF6F00?logo=node.js&logoColor=ffffff)
![dotenv](https://img.shields.io/badge/dotenv-000000?logo=dotenv&logoColor=ffffff)
![CORS](https://img.shields.io/badge/CORS-FF6347?logo=cors&logoColor=ffffff)
![PDF Parse](https://img.shields.io/badge/PDF_Parse-FF0000?logo=adobe&logoColor=ffffff)

---

## 📁 Project Structure

```
QuickAI/
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── services/
│   │   └── App.jsx
│   └── package.json
│
├── server/
│   ├── routes/
│   ├── controllers/
│   ├── middlewares/
│   ├── utils/
│   ├── .env
│   └── server.js
│
└── README.md
```

---

## 🧠 How QuickAI Works

### 🔐 Authentication
- User authentication handled using **Clerk**
- Secure session management
- Role-ready architecture for future plans

### 🤖 AI Tools
- Text-based tools powered by **OpenAI API**
- Image operations handled via **Cloudinary**
- Resume analysis uses **PDF parsing + AI feedback**

### ☁ Media Handling
- File uploads via **Multer**
- Images stored and processed on Cloudinary
- Background/object removal via AI pipelines

---

## 📌 Core AI Tools

| Tool | Description |
|----|-----------|
| Write Article | Generate long-form AI articles |
| Blog Titles | Generate SEO-friendly blog titles |
| Generate Images | AI-powered image generation |
| Remove Background | Auto background removal |
| Remove Object | AI object removal from images |
| Resume Review | AI feedback on uploaded resume |
| Community | Shared content & interaction |

---

## ⚙️ Environment Variables

Create a `.env` file inside **server/**:

```
##################################
# Server
##################################
PORT=5000

##################################
# OpenAI
##################################
OPENAI_API_KEY=your_openai_api_key

##################################
# Clerk
##################################
CLERK_SECRET_KEY=your_clerk_secret_key

##################################
# Database (Neon)
##################################
DATABASE_URL=your_neon_database_url

##################################
# Cloudinary
##################################
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

⚠️ Never commit `.env` files.

---

## 🚀 Getting Started

### Backend

```
cd server
npm install
npm run dev
```

### Frontend

```
cd client
npm install
npm run dev
```

---

## 🔒 Security Notes

- Authentication handled via Clerk (no password storage)
- API keys stored securely in environment variables
- File uploads validated before processing
- CORS configured for controlled access

---

## 📈 Future Improvements

- Usage limits per plan (Free / Premium)
- Payment integration
- AI history & exports
- Admin dashboard
- Rate limiting on AI endpoints

---

## 🏁 Conclusion

**QuickAI** is a multi-tool AI SaaS-style platform demonstrating real-world integration of **authentication, AI APIs, media processing, and scalable frontend architecture** using modern web technologies.

This is **not a demo toy app** — it’s a strong foundation for a production AI product.
