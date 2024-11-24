import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true, // 자동으로 브라우저 열기
    port: 3000  // 포트 번호 지정 (선택사항)
  }
}) 