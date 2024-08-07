# SolidStart

## WHY SolidJs / SolidStart

- [Introducing the SolidJS UI Library](https://dev.to/ryansolid/introducing-the-solidjs-ui-library-4mck)
- [SolidJS Official Release: The long road to 1.0](https://dev.to/ryansolid/solidjs-official-release-the-long-road-to-1-0-4ldd)
- [SolidJS: The Tesla of JavaScript UI Frameworks?](https://ryansolid.medium.com/solidjs-the-tesla-of-javascript-ui-frameworks-6a1d379bc05e)
- [JavaScript Frameworks and Metagaming](https://dev.to/this-is-learning/javascript-frameworks-and-metagaming-pb5)
- [A Look at Compilation in JavaScript Frameworks](https://dev.to/this-is-learning/a-look-at-compilation-in-javascript-frameworks-3caj)
- [JavaScript UI Compilers: Comparing Svelte and Solid](https://ryansolid.medium.com/javascript-ui-compilers-comparing-svelte-and-solid-cbcba2120cea)
- [A few reasons why I love Solid.js](https://dev.to/trusktr/a-few-reasons-why-i-love-solid-js-4036)
- [The Real Cost of UI Components Revisited](https://dev.to/this-is-learning/the-real-cost-of-ui-components-revisited-4d23)
- [Solid - The best JavaScript UI library?](https://areknawo.com/solid-the-best-javascript-ui-library/)
- [How we wrote the Fastest JavaScript UI Framework, Again!](https://levelup.gitconnected.com/how-we-wrote-the-fastest-javascript-ui-framework-again-db097ddd99b6)
- [The Journey to Isomorphic Rendering Performance](https://indepth.dev/posts/1324/the-journey-to-isomorphic-rendering-performance)
- [5 Ways SolidJS Differs from Other JS Frameworks](https://dev.to/ryansolid/5-ways-solidjs-differs-from-other-js-frameworks-1g63)
- [A Hands-on Introduction to Fine-Grained Reactivity](https://dev.to/ryansolid/a-hands-on-introduction-to-fine-grained-reactivity-3ndf)
- [Building a Reactive Library from Scratch](https://dev.to/ryansolid/building-a-reactive-library-from-scratch-1i0p)
- [Building JavaScript Frameworks to Conquer eCommerce](https://dev.to/this-is-learning/building-javascript-frameworks-to-conquer-ecommerce-3glc)
- [SolidJS creator: JavaScript innovation isn’t slowing down](https://www.infoworld.com/article/3626348/solidjs-creator-javascript-innovation-isnt-slowing-down.html)
- [JavaScript vs JavaScript. Fight!](https://dev.to/this-is-learning/javascript-vs-javascript-fight-53fa)
- [Solid.js feels like what I always wanted React to be](https://typeofnan.dev/solid-js-feels-like-what-i-always-wanted-react-to-be/)

## Official Websites

- [solid-start](https://www.solidjs.com/);
- [solid-Js](https://start.solidjs.com);

## To install packages

```bash
pnpm install
```

## To make a new project

Follow instructions:
[SolidStart Doc](https://docs.solidjs.com/solid-start/getting-started)

[Shadcn UI for Solid](https://www.solid-ui.com/docs/installation/solid-start)

[Lucide Icon](https://lucide.dev/guide/packages/lucide-solid)

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
pnpm dlx solidui-cli@latest add button avatar popover separator sheet drawer dialog number-field select text-field toast toggle flex card checkbox label
```

Add more Lucide Icons:

```bash
bun dev

# or start the server and open the app in a new browser tab
bun dev -- --open
```

## Building

Solid apps are built with _presets_, which optimise your project for deployment to different environments.

By default, `pnpm run build` will generate a Node app that you can run with `bun run start`. To use a different preset, add it to the `devDependencies` in `package.json` and specify in your `app.config.js`.

## Deployment

As of **2024 June 27, SolidStart 1.0.2** comes with `app.config.ts`. So delete `vercel.json`, and `vite.config.js`.

In app.config.ts, add this line: `server: {preset: "vercel"}`

```
import { defineConfig } from "@solidjs/start/config";

export default defineConfig({
		server: {preset: "vercel"}
	//plugins: [solid({ adapter: vercel() })]
});
```

In Vercal project settings:

- Under `Build & Development Settings`: leave all settings blank.
- Usually your Solid project should be in your repo root. So leave `Root Directory` setting empty.
- Under `Node.js Version`: setting here should match the NodeJs version you use during development, and the setting in your package.json:

```
  "engines": {
    "node": ">=20.12.2",
    "bun", ">=1.1.15"
  }
```

#### Customize Colors

Set HSL colors in app.css, which will be used in tailwind.config.cjs

#### Find Icons

Lucide Icons: https://lucide.dev/icons/

## Error

#### Loading failed for the module with source

Try to disable your ad/script blocker (Adblock, uBlock Origin, Privacy Badger…) or relocate the script such that it does not match your ad blocker's rules.

If you don't have such a plugin installed, try to reproduce the issue while running Firefox in safe mode.

## Bugs

video@3253 Popover1 and Popover2 does not work!
Popover does not work in sidebar component #110
https://github.com/sek-consulting/solid-ui/issues/110

## Reference

Build A Responsive Sidebar using Next.js 14, React, shadcn/ui, and Tailwind CSS
https://www.youtube.com/watch?v=FYBC3TjRULo
