# Deploy to Render - Step-by-Step Guide

## ✅ Files Created for Render Deployment

✅ `Dockerfile` - Container configuration  
✅ `render.yaml` - Render deployment config  
✅ `.dockerignore` - Exclude unnecessary files  
✅ `testing/main_new.py` - Updated to serve React  

---

## 🚀 Deploy in 5 Steps

### **Step 1: Push to GitHub**

```bash
git add Dockerfile render.yaml .dockerignore
git commit -m "Add Render deployment configuration"
git push origin main
```

### **Step 2: Go to Render.com**

1. Visit [render.com](https://render.com)
2. Click **Sign Up** (or **Log In** if you have an account)
3. Connect your GitHub account

### **Step 3: Create New Web Service**

1. Click **New +** → **Web Service**
2. Select your repository: `cozy-critter-cafe-77`
3. Fill in details:
   - **Name**: `chatgpt-clone` (or your choice)
   - **Region**: `Oregon` (or closest to you)
   - **Branch**: `main`
   - **Build Command**: Leave empty (uses Dockerfile)
   - **Start Command**: Leave empty (uses Dockerfile)
4. Select plan: **Free** (or Starter if you want better performance)
5. Click **Create Web Service**

### **Step 4: Add Environment Variables**

1. After service is created, go to **Environment**
2. Click **Add Environment Variable** for each:

```
Key: GEMINI_API_KEY
Value: [YOUR_GEMINI_KEY_FROM_https://aistudio.google.com/app/apikeys]

Key: OPENAI_API_KEY
Value: [YOUR_OPENAI_KEY_FROM_https://platform.openai.com/api-keys]

Key: APP_API_KEY
Value: sk-test-key-12345
```

3. Click **Save**

### **Step 5: Deploy!**

1. Render will automatically start building
2. Watch the logs in the **Logs** tab
3. Wait 5-10 minutes for build to complete
4. Once done, visit your app at: `https://chatgpt-clone.onrender.com`

---

## 🔍 What's Happening

```
GitHub (your code)
    ↓
Render (pulls from GitHub)
    ↓
Builds Docker image
    ↓
Installs Node dependencies
    ↓
Builds React frontend (npm run build)
    ↓
Installs Python dependencies
    ↓
Starts FastAPI server
    ↓
Serves React at https://chatgpt-clone.onrender.com
```

---

## ✨ After Deployment

### **Test Your API**

```bash
# Health check
curl https://chatgpt-clone.onrender.com/api/health

# Chat endpoint
curl -X POST https://chatgpt-clone.onrender.com/api/chat \
  -H "X-API-Key: sk-test-key-12345" \
  -H "Content-Type: application/json" \
  -d '{"messages": [{"role": "user", "content": "Hello!"}]}'
```

### **View Logs**

On Render dashboard:
1. Select your service
2. Click **Logs** tab
3. See real-time logs of your app

### **Update Your App**

Just push to GitHub:
```bash
git add .
git commit -m "Update code"
git push origin main
```

Render automatically redeploys! ✅

---

## 🆘 Troubleshooting

### **Build Fails - "npm run build" error**

Check your `package.json` has a build script:
```json
{
  "scripts": {
    "build": "vite build",
    ...
  }
}
```

If not using Vite, update to your build command.

### **"GEMINI_API_KEY not found"**

Make sure you added environment variables in Render dashboard under **Environment**.

### **App crashes after deploy**

1. Check **Logs** tab for errors
2. Ensure Python dependencies are in `testing/requirements_new.txt`
3. Ensure `dist/` folder is created by npm build

### **Static files not serving**

Make sure React builds:
```bash
npm run build  # Creates dist/ folder
```

Dockerfile copies and serves this folder.

---

## 📊 Monitoring

Once deployed, monitor your app:

1. **Logs** - View real-time application logs
2. **Metrics** - CPU, memory, bandwidth usage
3. **Alerts** - Get notified if app goes down
4. **Analytics** - Track requests and performance

---

## 💰 Pricing Reminder

- **Free**: $0/month, spins down after 15 min inactivity
- **Starter**: $7/month, always running
- **Standard**: $25+/month, high performance

Start with Free tier to test!

---

## 🎯 Your App is Now Live!

```
Frontend:  https://chatgpt-clone.onrender.com
API:       https://chatgpt-clone.onrender.com/api/*
Docs:      https://chatgpt-clone.onrender.com/docs
Health:    https://chatgpt-clone.onrender.com/api/health
```

---

## 📝 Files Explained

### **Dockerfile**
- Builds your app into a Docker container
- Installs Node + Python dependencies
- Builds React frontend
- Starts FastAPI server

### **render.yaml**
- Tells Render how to deploy
- Sets region, plan, and environment variables
- Configures health checks

### **.dockerignore**
- Excludes unnecessary files from Docker build
- Speeds up deployment

### **main_new.py (updated)**
- Now serves React static files from `dist/` folder
- Mounts static files at root path `/`

---

## 🚀 Next Steps

1. ✅ Push code to GitHub
2. ✅ Go to render.com and create Web Service
3. ✅ Add environment variables
4. ✅ Deploy!
5. ✅ Share your app: `https://chatgpt-clone.onrender.com`

**Questions?** Check logs on Render dashboard for detailed error messages.

Good luck! 🎉
