import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {VitePWA} from 'vite-plugin-pwa'
export default defineConfig({
 plugins:[react(),VitePWA({registerType:'autoUpdate',manifest:{name:'SIMS - إدارة المخزون لعدة قطاعات',short_name:'SIMS',description:'نظام إدارة المخزون متعدد القطاعات',theme_color:'#0284c7',background_color:'#f8fafc',display:'standalone',lang:'ar',dir:'rtl',icons:[]},workbox:{runtimeCaching:[]}})],
 server:{port:5173,host:'0.0.0.0',proxy:{'/api':{target:'http://localhost:4000',changeOrigin:true}}}
})
