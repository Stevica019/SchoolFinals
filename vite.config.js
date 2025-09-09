import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
    server: {
        host: "localhost",
        port: 5173,
        hmr: {
            host: "localhost",
            port: 5173,
            protocol: "ws",
        },
    },
    plugins: [
        laravel({
            input: ["resources/js/app.jsx"],
            refresh: true,
        }),
        tailwindcss(),
        react(),
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "resources"), // root resources
            "@components": path.resolve(__dirname, "resources/components"),
        },
    },
});
