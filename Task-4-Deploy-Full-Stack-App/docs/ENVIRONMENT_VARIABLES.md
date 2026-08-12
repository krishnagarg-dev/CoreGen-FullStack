# Environment Variables

## Backend `.env.example`

Create this locally as `server/.env`:

```env
MONGO_URI=
JWT_SECRET=
ADZUNA_APP_ID=
ADZUNA_APP_KEY=
PORT=5000
```

## Frontend `.env.example`

Create this locally as `client/.env`:

```env
VITE_API_URL=http://localhost:5000
```

For production, the deployed backend URL is:

```env
VITE_API_URL=https://merijob-backend.onrender.com
```

Note: the current frontend API calls use the production Render URL directly; keep this variable for centralized production configuration if the code is later refactored to read it.

## Important

The following must NEVER be committed:

```text
.env
.env.local
.env.production
```

Only example files containing empty placeholders should be committed.
