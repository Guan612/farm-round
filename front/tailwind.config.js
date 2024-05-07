/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx,vue}'],
    theme: {
        extend: {},
    },
    plugins: [],
    corePlugins: {
        preflight: false // 关闭默认样式
    }
}

