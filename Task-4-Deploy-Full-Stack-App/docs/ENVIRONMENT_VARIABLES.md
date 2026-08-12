# Environment Variables

## Backend `.env.example`

Create this locally as `server/.env`:

```env
MONGO_URI=
JWT_SECRET=
ADZUNA_APP_ID=
ADZUNA_APP_KEY=
FRONTEND_URL=
PORT=5000
```

## Frontend `.env.example`

Create this locally as `client/.env`:

```env
VITE_API_URL=http://localhost:5000
```

For production, configure the same variable through Vercel:

```env
VITE_API_URL=https://<your-render-backend>.onrender.com
```

## Important

The following must NEVER be committed:

```text
.env
.env.local
.env.production
```

Only example files containing empty placeholders should be committed.
