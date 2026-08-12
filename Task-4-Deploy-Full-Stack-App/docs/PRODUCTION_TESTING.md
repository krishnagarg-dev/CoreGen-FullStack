# Production Testing Report

## Application

MeriJob – Full Stack Job Portal

## Environment

Frontend: Vercel  
Backend: Render  
Database: MongoDB Atlas

## Test Cases

| # | Test | Expected Result | Status |
|---|---|---|---|
| 1 | Open live frontend | Application loads | [x] |
| 2 | Register | Account is created | [x] |
| 3 | Login | User is authenticated | [x] |
| 4 | Refresh after login | Session remains available | [x] |
| 5 | Logout | User is logged out | [x] |
| 6 | Open Jobs | Jobs are displayed | [x] |
| 7 | Filter Jobs | Filtered jobs are displayed | [x] |
| 8 | Job Details | Details load correctly | [x] |
| 9 | Save Job | Job is saved | [x] |
| 10 | Saved Jobs | Saved job appears | [x] |
| 11 | Remove Saved Job | Job is removed | [x] |
| 12 | Apply | Application is created | [x] |
| 13 | Applications | Application appears | [x] |
| 14 | Status filter | Correct applications displayed | [x] |
| 15 | Dashboard | Statistics load | [x] |
| 16 | Database | Data persists in Atlas | [x] |
| 17 | CORS | Frontend API calls work | [x] |
| 18 | Production build | Build completes successfully | [x] |

## Result

All listed production tests were completed successfully on the deployed application.

Frontend: https://meri-job.vercel.app/

Backend: https://merijob-backend.onrender.com

Result: **PASS**
