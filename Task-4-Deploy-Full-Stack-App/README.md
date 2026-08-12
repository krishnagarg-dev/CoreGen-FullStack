# CoreGen Week 4 – Task 1: Full Stack App Deployment

## Project: MeriJob

This task documents the deployment of the **MeriJob** full-stack job portal as a production-ready application.

> **Source Code:** The complete MeriJob source code is maintained in the dedicated MeriJob GitHub repository. This CoreGen Task 4 repository contains the deployment documentation and evidence for the task.

---

## 1. Task Objective

Deploy a complete full-stack application consisting of:

- React frontend
- Node.js + Express backend
- MongoDB cloud database
- Production environment variables
- Production CORS configuration
- Production build
- Live end-to-end testing

### Deployment targets

| Component | Platform |
|---|---|
| Frontend | Vercel |
| Backend | Render |
| Database | MongoDB Atlas |

---

## 2. Project Overview

**MeriJob** is a job portal application that allows users to:

- Register and log in
- Maintain authenticated sessions using JWT
- Browse jobs
- Search/filter jobs
- View job details
- Save jobs
- Remove saved jobs
- Apply for jobs
- Track applications
- View application status
- View dashboard statistics
- Log out securely

The application uses a React frontend and a Node.js/Express backend connected to MongoDB Atlas.

---

## 3. Technology Stack

### Frontend

- React
- Vite
- React Router
- Tailwind CSS
- JavaScript
- Fetch API

### Backend

- Node.js
- Express.js
- JWT authentication
- REST APIs
- CORS

### Database

- MongoDB
- MongoDB Atlas

### Deployment

- Vercel – frontend
- Render – backend
- MongoDB Atlas – database

### External Job Data

- Adzuna Jobs API

---

## 4. Deployment Architecture

```text
                    ┌──────────────────────┐
                    │      User / Browser   │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │       Vercel         │
                    │   React Frontend     │
                    └──────────┬───────────┘
                               │
                         HTTPS API calls
                               │
                               ▼
                    ┌──────────────────────┐
                    │       Render         │
                    │ Node + Express API   │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │    MongoDB Atlas     │
                    │     Cloud Database   │
                    └──────────────────────┘

                       External Job API
                              ▲
                              │
                    ┌─────────┴──────────┐
                    │   Adzuna API      │
                    └────────────────────┘
```

---

## 5. Source Code Repository

The complete source code is maintained separately.

**MeriJob GitHub Repository:**  
`[ADD MERIJOB GITHUB REPOSITORY URL]`

This repository is used for the application source code. The current CoreGen repository documents the deployment process and final deployment evidence.

---

# 6. Pre-Deployment Preparation

Before deployment, the application was tested locally.

## 6.1 Backend verification

The backend was started locally using:

```bash
cd server
npm install
npm run dev
```

The backend was verified to:

- Start successfully
- Connect to MongoDB
- Serve authentication APIs
- Serve job APIs
- Serve saved-job APIs
- Serve application APIs

---

## 6.2 Frontend verification

The frontend was started locally using:

```bash
cd client
npm install
npm run dev
```

The frontend was tested for:

- Login
- Registration
- Logout
- Job listing
- Job details
- Save job
- Saved jobs
- Apply
- Applications
- Dashboard

---

## 6.3 Production build

The frontend production build was verified using:

```bash
cd client
npm run build
```

A successful build confirms that the React application can be compiled for production.

---

# 7. MongoDB Atlas Setup

MongoDB Atlas was used as the cloud database.

## Step 1 – Create Atlas Project

1. Log in to MongoDB Atlas.
2. Create or select the project for MeriJob.
3. Create a free/shared cluster if required.

## Step 2 – Create Database User

Create a database user with the required permissions.

Store the username and password securely.

Do not commit database credentials to GitHub.

## Step 3 – Configure Network Access

Configure the Atlas network access rules required by the deployed backend.

For development/testing, access may be configured according to the project requirements.

For production, use an appropriate secure network configuration whenever supported by the hosting setup.

## Step 4 – Obtain Connection String

Copy the MongoDB connection string.

It should be stored in the backend environment variables and never committed to Git.

Example:

```env
MONGO_URI=<MONGODB_ATLAS_CONNECTION_STRING>
```

---

# 8. Backend Deployment – Render

The Node.js + Express backend was deployed to Render.

## Step 1 – Create Render Web Service

1. Log in to Render.
2. Create a new Web Service.
3. Connect the GitHub repository containing the MeriJob backend.
4. Select the backend/server directory if deploying from a monorepo.

## Step 2 – Configure Runtime

Typical configuration:

```text
Runtime: Node
Build Command: npm install
Start Command: npm start
```

Use the actual `package.json` scripts if they differ.

## Step 3 – Configure Environment Variables

Add the required production environment variables in Render.

Example:

```env
MONGO_URI=<MONGODB_ATLAS_CONNECTION_STRING>
JWT_SECRET=<PRODUCTION_JWT_SECRET>
ADZUNA_APP_ID=<ADZUNA_APP_ID>
ADZUNA_APP_KEY=<ADZUNA_APP_KEY>
FRONTEND_URL=<VERCEL_FRONTEND_URL>
PORT=5000
```

Do not paste actual secret values into this documentation.

## Step 4 – Deploy

Start the Render deployment.

Verify that:

- The build succeeds.
- The Node server starts.
- MongoDB Atlas connection succeeds.
- No missing environment-variable errors occur.

## Backend URL

```text
[ADD RENDER BACKEND URL]
```

---

# 9. Production CORS Configuration

The backend must allow requests from the deployed frontend.

The production frontend URL should be configured using an environment variable.

Example:

```env
FRONTEND_URL=https://your-vercel-app.vercel.app
```

The backend CORS configuration should use the production frontend URL instead of relying only on localhost.

### Local vs production

Local:

```text
http://localhost:5173
```

Production:

```text
https://your-vercel-app.vercel.app
```

After changing the CORS configuration, redeploy the backend.

---

# 10. Frontend Deployment – Vercel

The React/Vite frontend was deployed using Vercel.

## Step 1 – Create Vercel Project

1. Log in to Vercel.
2. Import the GitHub repository containing the frontend.
3. Select the frontend/client directory if using a monorepo.

## Step 2 – Configure Build

Typical Vite configuration:

```text
Framework: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

## Step 3 – Configure API Environment Variable

The frontend must point to the deployed backend instead of localhost.

Example:

```env
VITE_API_URL=https://your-render-backend.onrender.com
```

The actual variable name must match the one used by the application.

## Step 4 – Deploy

Deploy the frontend.

After deployment, open the Vercel URL and test the application.

## Frontend URL

```text
[ADD VERCEL FRONTEND URL]
```

---

# 11. Production Environment Variables

Environment variables are used to keep deployment-specific configuration and secrets outside the source code.

## Backend

```env
MONGO_URI=
JWT_SECRET=
ADZUNA_APP_ID=
ADZUNA_APP_KEY=
FRONTEND_URL=
PORT=
```

## Frontend

```env
VITE_API_URL=
```

### Security rules

Never commit:

```text
.env
.env.local
.env.production
```

Never commit:

- MongoDB passwords
- JWT secrets
- API keys
- Access tokens
- Private credentials

Use the hosting platform's environment-variable settings instead.

---

# 12. End-to-End Production Testing

After both frontend and backend were deployed, the application was tested through the live frontend.

## Authentication

- [ ] Register a new account
- [ ] Verify registration succeeds
- [ ] Verify user is redirected after registration
- [ ] Log in with valid credentials
- [ ] Verify JWT token is stored
- [ ] Refresh the page
- [ ] Verify authenticated state remains
- [ ] Log out
- [ ] Verify token/session is removed
- [ ] Verify protected pages redirect unauthenticated users

## Jobs

- [ ] Open Jobs page
- [ ] Verify jobs load
- [ ] Test job search/filter
- [ ] Test pagination
- [ ] Open Job Details
- [ ] Verify job information loads

## Saved Jobs

- [ ] Save a job
- [ ] Verify it appears in Saved Jobs
- [ ] Refresh Saved Jobs
- [ ] Verify saved job remains
- [ ] Remove saved job
- [ ] Verify it disappears

## Applications

- [ ] Apply for a job
- [ ] Verify application is created
- [ ] Open My Applications
- [ ] Verify application appears
- [ ] Verify application status
- [ ] Test status filtering

## Dashboard

- [ ] Open Dashboard
- [ ] Verify total applications
- [ ] Verify applications sent
- [ ] Verify interviews
- [ ] Verify offers
- [ ] Verify recent applications
- [ ] Verify saved-job count

## Production connectivity

- [ ] Frontend communicates with Render backend
- [ ] Backend communicates with MongoDB Atlas
- [ ] CORS works correctly
- [ ] No localhost API calls remain in production
- [ ] No authentication errors occur
- [ ] No missing environment-variable errors occur

---

# 13. Deployment Evidence

Screenshots demonstrating the deployment should be placed in:

```text
screenshots/
```

Recommended evidence:

```text
01-vercel-project.png
02-vercel-deployment.png
03-render-service.png
04-render-environment-variables.png
05-mongodb-atlas-cluster.png
06-live-homepage.png
07-live-login.png
08-live-jobs.png
09-live-job-details.png
10-live-saved-jobs.png
11-live-applications.png
12-live-dashboard.png
13-production-testing.png
```

Do not include screenshots that expose:

- API keys
- passwords
- JWT secrets
- MongoDB credentials
- private tokens

---

# 14. Final Deployment Checklist

Before submitting the task:

- [ ] Source code repository link added
- [ ] MongoDB Atlas configured
- [ ] Backend deployed to Render
- [ ] Frontend deployed to Vercel
- [ ] Production environment variables configured
- [ ] CORS configured for production frontend
- [ ] Frontend production build succeeds
- [ ] Live frontend opens successfully
- [ ] Backend API responds successfully
- [ ] Database connection works
- [ ] Authentication tested
- [ ] Jobs tested
- [ ] Job details tested
- [ ] Saved jobs tested
- [ ] Applications tested
- [ ] Dashboard tested
- [ ] Logout tested
- [ ] Screenshots/evidence added
- [ ] No secrets committed to GitHub

---

# 15. Live Application

### Frontend

`[ADD VERCEL URL]`

### Backend

`[ADD RENDER URL]`

### Source Code

`[ADD MERIJOB GITHUB URL]`

---

# 16. Task Completion

**CoreGen Week 4 – Task 1: Deploy Full Stack App**

The MeriJob full-stack application was prepared for production and deployed with:

- React frontend on Vercel
- Node.js + Express backend on Render
- MongoDB database on MongoDB Atlas
- Production environment variables
- Production CORS configuration
- Production build
- End-to-end live testing

The deployed application and source-code repository are provided above.
