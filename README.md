# SolidStart

Everything you need to build a Solid project, powered by [`solid-start`](https://start.solidjs.com);

## To install packages
```bash
pnpm install
```
## To make a new project
https://docs.solidjs.com/solid-start/getting-started
https://www.solid-ui.com/docs/installation/solid-start
```bash
# create a new project in the current directory
pnpm create solid
pnpm dlx solidui-cli@latest init
```

## File Structure
- I place the UI components in the components/ui folder.
- The rest of the components such as <PageHeader /> or <MainNav /> are placed in the components folder.
- The lib folder contains all the utility functions. I have a utils.ts where I define the cn helper.

## Developing
Add more UI components:
```bash
pnpm dlx solidui-cli@latest add button
```

```bash
bun dev

# or start the server and open the app in a new browser tab
bun dev -- --open
```

## Building

Solid apps are built with _presets_, which optimise your project for deployment to different environments.

By default, `npm run build` will generate a Node app that you can run with `npm start`. To use a different preset, add it to the `devDependencies` in `package.json` and specify in your `app.config.js`.

## This project was created with the [Solid CLI](https://solid-cli.netlify.app)
