import { defineConfig } from 'vite'
import path from "path"
import reactRefresh from '@vitejs/plugin-react-refresh'
import antdDayjs from 'antd-dayjs-vite-plugin'

export default defineConfig({
  plugins: [reactRefresh(), antdDayjs()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    port: 3001,
    strictPort: false,
    open: true
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  }
})
