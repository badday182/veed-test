# Todo List Test Task

## Project Overview

This project is implemented as a test task utilizing Next.js framework and React hooks. The application features a todo list with basic CRUD operations, styled using Tailwind CSS and leveraging TanStack Query (React Query) for API state management.

## Demo

[Live Demo](https://veed-test.vercel.app/)

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/badday182/veed-test.git
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:3000`

## Technical Stack

- Next.js
- React Hooks
- TanStack Query (React Query)
- Tailwind CSS
- Axios/Fetch API

## Features

- Fetch and display todos
- Create new todos
- Delete existing todos
- Loading skeletons for better UX

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
NEXT_PUBLIC_API_URL=https://jsonplaceholder.typicode.com
```

This environment variable is used to configure the base API URL for the application.
