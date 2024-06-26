# SolidStart

Everything you need to build a Solid project, powered by [`solid-start`](https://start.solidjs.com);

## To install packages
```bash
pnpm install
```
## To make a new project
Follow instructions:
SolidStart Doc: https://docs.solidjs.com/solid-start/getting-started

Shadcn UI for Solid: https://www.solid-ui.com/docs/installation/solid-start

Lucide Icon: https://lucide.dev/guide/packages/lucide-solid
```bash
# create a new project in the current directory
pnpm create solid
pnpm dlx solidui-cli@latest init
pnpm install @fontsource/inter
pnpm install lucide-solid
```

## File Structure
- Place the UI components in the components/ui folder.
- The rest of the components such as <PageHeader /> or <MainNav /> are placed in the components folder.
- The lib folder contains all the utility functions.

## Shadcn UI Theme
Set your overall Theme settings at the first `@layer base {}` section in src/app.css, not the bottom two `@layer base {}` and `@media (max-width: 640px){}` section

set `--radius: 2rem;` to soothe the grader more

## Developing
Add more Shadcn UI components:
```bash
pnpm dlx solidui-cli@latest add button
pnpm dlx solidui-cli@latest add avatar popover separator
pnpm dlx solidui-cli@latest add sheet drawer
```

Add more Lucide Icons:


```bash
bun dev

# or start the server and open the app in a new browser tab
bun dev -- --open
```

## Building

Solid apps are built with _presets_, which optimise your project for deployment to different environments.

By default, `npm run build` will generate a Node app that you can run with `npm start`. To use a different preset, add it to the `devDependencies` in `package.json` and specify in your `app.config.js`.

## This project was created with the [Solid CLI](https://solid-cli.netlify.app)
