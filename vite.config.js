import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Set base to repo name for GitHub Pages project site.
// If you publish at https://pvatsa0903.github.io/phalguni-site/ keep this.
// If you use a custom domain or a user-level repo, change to '/'.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/phalguni-site/',
})
