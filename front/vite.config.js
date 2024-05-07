import {defineConfig} from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import AutoImport from 'unplugin-auto-import/vite'
import tailwindcss from 'tailwindcss';
import uniTailwind from '@uni-helper/vite-plugin-uni-tailwind'
const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
    css: {
        postcss: {
            plugins: [
                tailwindcss(),
            ],
        },
    },
    plugins: [
        uni(),
        uniTailwind(),
        AutoImport({
            imports: ['vue', 'vue-router']
        }),
    ],
    resolve: {
        // 配置路径别名
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    },
    server: {
        host: '0.0.0.0',
        port: 8991,
        // 是否开启 https
        https: false,
    },
})
