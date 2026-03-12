import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
    output: 'static',
    trailingSlash: 'always',
    site: 'https://jitzian.github.io',

    // HTML compression is enabled by default in Astro v6 (compressHTML: true)
    // CSS is minified by Vite via Lightning CSS
    // JS is minified by Vite via esbuild

    // Single page, no prefetch needed
    prefetch: false,

    vite: {
        plugins: [tailwindcss()],
        build: {
            // Use terser for JS minification so we can drop console/debugger statements
            minify: 'terser',
            terserOptions: {
                compress: {
                    drop_console: true,
                    drop_debugger: true,
                }
            }
        }
    },

    integrations: [
        sitemap(),
    ]
});
