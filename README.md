# Stones of Scotland 🪨

A website for rock collectors in Scotland, built with **Next.js** (a tool for making websites) and **React 19** (the system that builds each part of the page).

Live site: https://scotland-rocks.vercel.app

## How the files are organised

| Folder or file | What it is |
| --- | --- |
| `data/stones.js` | **The list of every stone.** Edit this to change text or add new stones. Every page updates automatically. |
| `app/` | **The pages.** Each folder is a web address, so `app/identify/` becomes `/identify`. |
| `app/page.jsx` | The home page. |
| `app/layout.jsx` | The top menu and footer that appear on every page. |
| `app/globals.css` | **The look of the site:** colours, fonts and spacing. The colours are at the very top. |
| `components/` | Reusable building blocks, like the stone cards and the stone drawings. |
| `lib/useCollection.js` | Remembers which stones each visitor has found, saved in their own browser. |
| `package.json` | The list of tools the site needs. Vercel reads this to build it. |

## How changes go live

1. A change is made to the files on the computer.
2. The change is saved to GitHub (the online copy of the code).
3. Vercel takes the code from GitHub, builds the website and puts it online.

## Running it on your own computer (optional)

This needs [Node.js](https://nodejs.org) installed. Then, in this folder:

```bash
npm install
npm run dev
```

and open http://localhost:3000 in your browser.
