# Post Sync App

A NestJS application that fetches posts from an external API and stores them in PostgreSQL.

## 🚀 Tech Stack

- NestJS
- TypeScript
- PostgreSQL
- TypeORM
- REST API

## ✨ Features

- Fetch posts from JSONPlaceholder API
- Store posts in PostgreSQL database
- Export posts through REST API
- Pagination support
- Sorting support
- Environment-based configuration
- TypeORM database integration

## 🌐 External API Source

https://jsonplaceholder.typicode.com/posts

# 👨‍💻 Author

**Ankit Vyas**

- GitHub: https://github.com/vyasankit2008
- Project: https://github.com/vyasankit2008/post-sync-app

---

## 📬 Contact

- Mobile : 7383444315
- Email : vyasankit2008@gmail.com

For any queries or suggestions, feel free to create an issue or contact the author.


# 📦 Installation

## Clone Repository

```bash
git clone https://github.com/vyasankit2008/post-sync-app.git

## Install dependencies : 
npm install

## Environment Create .env
PORT=500

DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_NAME=post-sync-app
DATABASE_USER=postgres
DATABASE_PASSWORD=password

## Run in Development : 
npm run start:dev

## Run in Production : 
npm run build

npm run start:prod

## API Example
Get posts: GET /posts?page=1&limit=10&sort=id&order=ASC

## Project Structure
src
│
├── posts
│   │
│   ├── entities
│   │   └── post.entity.ts
│   │
│   ├── dto
│   │   └── query-post.dto.ts
│   │
│   ├── posts.controller.ts
│   ├── posts.service.ts
│   └── post.module.ts
│
├── app.module.ts
└── main.ts
