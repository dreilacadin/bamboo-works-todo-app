# Create T3 App

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

## What's next? How do I make an app with this?

We try to keep this project as simple as possible, so you can start with just the scaffolding we set up for you, and add additional things later when they become necessary.

If you are not familiar with the different technologies used in this project, please refer to the respective docs. If you still are in the wind, please join our [Discord](https://t3.gg/discord) and ask for help.

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [Drizzle](https://orm.drizzle.team)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

## Learn More

To learn more about the [T3 Stack](https://create.t3.gg/), take a look at the following resources:

- [Documentation](https://create.t3.gg/)
- [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available) — Check out these awesome tutorials

You can check out the [create-t3-app GitHub repository](https://github.com/t3-oss/create-t3-app) — your feedback and contributions are welcome!

## How do I deploy this?

Follow our deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel), [Netlify](https://create.t3.gg/en/deployment/netlify) and [Docker](https://create.t3.gg/en/deployment/docker) for more information.

## Todo App Checklist:

1. Core To-Do List Features

   - [x] Users can add new tasks with a title and description.
   - [x] Tasks should have a status: Pending, In Progress, Completed.
   - [x] Users can edit and delete tasks.
   - [] Users can filter tasks by their status (Pending, In Progress,
     Completed).
   - [] Implement a search bar to find tasks by title.
   - [] Tasks should have due dates, and tasks that are past the due date
     should be highlighted.

2. State Management:
   - [] Implement a state management solution (Zustand)
   - [] Ensure tasks and their statuses are managed globally, while the UI state (filters, search query) can be managed locally.
3. Performance Optimizations
   - [] Handle large numbers of tasks efficiently by virtualizing the list of
     tasks (e.g., using react-window or react-virtualized).
   - [] Optimize re-rendering to avoid unnecessary updates when adding,
     editing, or reordering tasks (e.g., with React.memo).

## Libraries used

1. T3 App
2. Zustand state management

### How to launch the app:

- pnpm run install
- pnpm run dev
