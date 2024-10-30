import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // base: 'https://rehla-iq.com/',
  plugins: [react()],
  // base: '/web'
})

