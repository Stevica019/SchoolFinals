import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

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
});
// import { defineConfig } from "vite";
// import laravel from "laravel-vite-plugin";
// import tailwindcss from "@tailwindcss/vite";
// import react from "@vitejs/plugin-react";

// export default defineConfig({
//     plugins: [
//         laravel({
//             input: "resources/js/app.jsx",
//             refresh: true,
//         }),
//         tailwindcss(),
//         react(),
//     ],
// });
