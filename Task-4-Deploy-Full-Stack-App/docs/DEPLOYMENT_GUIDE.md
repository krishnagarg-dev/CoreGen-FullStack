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
https://<your-service>.onrender.com
```

---

## 4. Vercel Frontend

Set the frontend API variable to the Render backend URL.

Example:

```env
VITE_API_URL=https://<your-service>.onrender.com
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
https://<your-project>.vercel.app
```

---

## 5. CORS

Set the backend production frontend URL:

```env
FRONTEND_URL=https://<your-project>.vercel.app
```

Redeploy the backend after changing the variable.

---

## 6. Final Verification

Open the Vercel URL and verify the full user flow.

Do not use localhost URLs for production testing.
