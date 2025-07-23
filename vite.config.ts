import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'pages/index.html'
        //user: '/pages/user-page.html',
        //about: 'pages/about.html',
      },
    },
  },
})
