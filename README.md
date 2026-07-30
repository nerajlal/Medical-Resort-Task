# React Project

This is a React project bootstrapped with Vite. 

## Prerequisites

- Node.js (LTS version recommended)
- `nvm` (Node Version Manager) is recommended for managing Node versions.

## Setup

First, install the project dependencies:

```bash
# Using nvm to ensure you have the LTS version
source ~/.nvm/nvm.sh && nvm use --lts

# Install dependencies
npm install
```

## Development

To start the development server with Hot Module Replacement (HMR):

```bash
npm run dev
```
This will start the Vite development server. Open the URL provided in your terminal (usually `http://localhost:5173`) to view the app.

## Production

To build the application for production and serve the built files:

```bash
# Ensure you're on the LTS version of Node
source ~/.nvm/nvm.sh && nvm use --lts
npm run build
npm run start
```

The `npm run start` command uses `vite preview` to serve the production build generated in the `dist` folder.
