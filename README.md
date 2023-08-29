## Introduction

This is the repository for my personal website at https://www.sook.dev/.

### Project Structure

This repository is constructed with [pnpm workspace](https://pnpm.io/workspaces). It consists of the following packages:

- `packages/www` (@website/app)
  - The main website (next.js app)
- `packages/components` (@website/components)
  - A storybook app on top of a vite react project.
  - All the UI components used in `packages/www` are developed here.
- `packages/tailwindcss-config` (@website/tailwindcss-config)
  - Shared parts of `tailwind.config.ts`
  - It's used by `packages/www` and `packages/components`
- `packages/tailwindcss-plugin-animate` (@website/tailwindcss-plugin-animate)
  - A tailwindcss plugin used in `packages/tailwindcss-config`
