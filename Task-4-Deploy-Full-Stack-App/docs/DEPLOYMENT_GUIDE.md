# Deployment Guide

## 1. Deployment Order

Follow this order:

1. Verify local application
2. Configure MongoDB Atlas
3. Deploy backend to Render
4. Obtain Render backend URL
5. Configure frontend API URL
6. Configure backend production CORS
7. Deploy frontend to Vercel
8. Update backend CORS with final Vercel URL
9. Redeploy backend if required
10. Perform end-to-end production testing

---

## 2. MongoDB Atlas

Create the cloud database first because the backend requires the database connection.

Required backend variable:

```env
MONGO_URI=<ATLAS_CONNECTION_STRING>
```

Never commit this value.

---

## 3. Render Backend

### Build

```bash
npm install
```

### Start

Use the start script defined in `server/package.json`, normally:

```bash
npm start
```

### Required environment variables

```env
MONGO_URI=
JWT_SECRET=
ADZUNA_APP_ID=
ADZUNA_APP_KEY=
FRONTEND_URL=
PORT=
```

After deployment, record:

```text
https://merijob-backend.onrender.com
```

---

## 4. Vercel Frontend

Set the frontend API variable to the Render backend URL (if the variable is used by the frontend build).

Example:

```env
VITE_API_URL=https://merijob-backend.onrender.com
```

Build:

```bash
npm run build
```

Output:

```text
dist/
```

Deploy through Vercel.

Record:

```text
https://meri-job.vercel.app/
```

---

## 5. CORS

The current backend uses Express `cors()` middleware (`app.use(cors())`), so no separate `FRONTEND_URL` variable is required for the current deployment.

---

## 6. Final Verification

Open the Vercel URL and verify the full user flow.

Do not use localhost URLs for production testing.
