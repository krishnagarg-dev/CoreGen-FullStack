# Deployment Notes

## Date

12 August 2026

## Backend

Platform: Render

URL:
https://merijob-backend.onrender.com

Deployment status:
Live / Ready

## Frontend

Platform: Vercel

URL:
https://meri-job.vercel.app/

Deployment status:
Live / Ready

## Source Code

https://github.com/krishnagarg-dev/MeriJob

## Database

Platform: MongoDB Atlas

Connection status:
Connected successfully during production deployment.

## CORS

The backend currently uses Express `cors()` middleware, allowing the deployed frontend to communicate with the API.

## Production Build

Command:

```bash
npm run build
```

Result:
Successful Vite production build.

## Final Testing

Completed:
YES

Notes:
The live application was tested for registration, login, jobs, job details, saved jobs, applications, dashboard functionality, and production API connectivity.
