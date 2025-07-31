import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: "./postcss.config.js",
  },
});

// ====================================================
// Tools for Node.js Native Modules Installation Script
// ====================================================

// This script will install Python and the Visual Studio Build Tools, necessary
// to compile Node.js native modules. Note that Chocolatey and required Windows
// updates will also be installed.

// This will require about 3 GiB of free disk space, plus any space necessary to
// install Windows updates. This will take a while to run.

// Please close all open programs for the duration of the installation. If the
// installation fails, please ensure Windows is fully updated, reboot your
// computer and try to run this again. This script can be found in the
// Start menu under Node.js.

// You can close this window to stop now. Detailed instructions to install these
// tools manually are available at https://github.com/nodejs/node-gyp#on-windows

// Press any key to continue . . .
