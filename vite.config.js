import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/personal-website/", // <-- replace with your repo name; leave as '/' if repo is YOUR_USERNAME.github.io
 
})
