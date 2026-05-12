# Tech Radar

A NestJS + Next.js + TypeScript + PostgreSQL starter monorepo.

## Database

PostgreSQL connection details:
- host: `localhost`
- port: `5433`
- user: `postgres`
- password: `princess123`
- database: `tech-radar`

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the backend:
   ```bash
   npm run dev:backend
   ```
3. Start the frontend:
   ```bash
   npm run dev:frontend
   ```

## Notes

The backend uses TypeORM to connect to the Postgres database and exposes CRUD endpoints at `http://localhost:3000/items`.
The frontend runs on `http://localhost:3001`.
