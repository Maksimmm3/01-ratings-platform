# Ratings Platform

![CI](https://github.com/Maksimmm3/01-ratings-platform/actions/workflows/ci.yml/badge.svg)

A fullstack course catalog platform where users can browse IT courses by category, search, sort, and leave reviews.

The main goal of this project was to get hands-on experience with the latest features of Next.js (App Router) and to practice building a type-safe, fullstack application with TypeScript, Prisma, and PostgreSQL.

## ✨ Features

- 📚 Browse courses by category
- 🔍 Search courses by title
- 📊 Sort courses by rating and price (URL-based)
- ⭐ Read and write reviews
- 🎨 Responsive design (mobile-first)
- ♿ Accessible UI (keyboard navigation, ARIA attributes, landmarks)
- ⚡ ISR (Incremental Static Regeneration) with revalidation
- 🚫 Custom 404 and error pages
- 🔒 Server-side validation for review submission

## 🛠 Tech Stack

**Frontend:**

- Next.js 16 (App Router)
- React 19
- TypeScript
- CSS Modules + classnames
- react-icons

**Backend:**

- Next.js API Routes
- Prisma ORM 7
- PostgreSQL

**Tools:**

- ESLint
- Stylelint
- GitHub Actions (CI)

## 🚀 Getting Started

### Prerequisites

- Node.js 20+
- PostgreSQL

### Installation

```bash
git clone https://github.com/YOUR_USERNAME/REPO_NAME.git
cd REPO_NAME
npm install
```

### Environment Variables

Create a `.env.local` file in the root:

```
DATABASE_URL="postgresql://user:password@localhost:5432/dbname"
```

### Database Setup

```bash
npx prisma migrate dev
npx prisma db seed
```

### Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
app/                — pages and API routes (App Router)
components/         — reusable UI components
context/            — React Context for global state
helpers/            — utility functions
lib/                — Prisma client
prisma/             — schema, migrations, seed data
```

## 🧪 Available Scripts

- `npm run dev` — start development server
- `npm run build` — build for production
- `npm run start` — start production server
- `npm run lint` — run ESLint

## 📸 Screenshots

### Home page

![Home page](./public/screenshots/home.png)

### Category page

![Category page](./public/screenshots/category.png)

### Course page

![Course page](./public/screenshots/course.png)

### Reviews and review form

![Reviews](./public/screenshots/course-reviews.png)

## 📄 License

This project is for learning and portfolio purposes.
