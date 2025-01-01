# Project dyndydyd

pronounced: done did it

PWA task management app written in Svelte 5/SvelteKit and IndexedDB.

Check it out at [dyn.kraenz.eu](https://dyn.kraenz.eu)

## Requirements

- usable on desktop and android
- great UX for my use-cases
- no lag, but shared
- okay design
- recurring tasks
  - see habitica dailies
    - repeats weekly, daily, etc
    - every x weeks, days, etc
    - if weekly, then on which weekdays
- todos lists
  - sublists under common heading, whole list is also checkable
    - Task with checklist?
  - today (incl automatic date in title)
  - short term
  - mid term
    - weekly/monthly

## Requirements-derived architecture

- [x] Svelte 5
- [x] deployment
- [x] mobile-first
- [x] local-first
  - [x] local persistence
- [x] PWA (installable on desktop mainly. maybe notifications.)
  - [x] [pwa with svelte](https://www.youtube.com/watch?v=_wiOcdEVgks) and [svelte docs service workers](https://svelte.dev/docs/kit/service-workers)
- [ ] Auth (via Google Signin?)
- [x] Localization (just because i want to)
  - [x] setup and basics
  - [x] all texts localized
- [x] pico css for starters
  - [ ] maybe top up using [shadcdn-svelte](https://next.shadcn-svelte.com/)
- [x] routing? (svelte kit)
- [ ] some backend for sync (maybe hono single sls function)

## Tech Stack

- Svelte 5 + SvelteKit
- PWA - vite-plugin-pwa
- localization - paraglide
- routing - sveltekit
- local persistence - IndexedDB + Dexie
- Styling - [Pico CSS](https://picocss.com/) + custom CSS
- drag-and-drop - svelte-dnd-action

## sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

## Runes

```svelte
$props $state $effect
```

## Directives

```svelte
style:transform={flipped  'rotateY(0)' : ''}
style:--bg-1="black"

class:someClassName={mycondition}

use:someAction

# import transitions from svelte/transition
transition:someTransition
in:someTransition
out:someTransition
```

## Actions

js function that attaches to the lifecycle of a component. On mount, it gets called with the node. On unmount, the returned cleanup function gets called.

## Blocks

```svelte
{#if}{:else}{:else if}{/if}
{each colors as color}{/each}
{#key i}
```

svelte 5 todo list / task tracker

similar to habitica

<https://www.youtube.com/watch?v=uSWMvDPpG0k>

## Why

- I want to learn/refresh some Svelte
- habitica often lags and is occasionaly clunky

## How

- inside the mono repo
- with Svelte 5

## Development

### Bugs & Gimmicks

Running `pnpm run dev --host` and accessing the page on phone may render properly but the buttons don't work. I am not sure why this is happening but I guess it might be because of being served over http and not https or because some parts aren't hosted properly. Anyway, exposing the regular `pnpm run dev` port via `ngrok http <port>` makes things work.

## PWA and Service Worker

### Keep in mind

- Sveltekit automatically registers a service worker under specific filepaths.
- Don't change the filename of the service worker.
  > When updating your service worker, keep the filename the same. If you change the name, even by adding file hashes, the browser will never get the new version.

### Refs

- [Course Learn PWA](https://web.dev/learn/pwa/)
