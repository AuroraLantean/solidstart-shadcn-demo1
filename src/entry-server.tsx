// @refresh reload
import { createHandler, StartServer } from "@solidjs/start/server";
import SidebarDesktop from "./components/Sidebar-desktop";

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang="en" class="dark">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
          {assets}
        </head>
        <body>
          <SidebarDesktop />
          <main id="app" class="ml-[300px] mt-3">{children}</main>
          {scripts}
        </body>
      </html>
    )}
  />
));
