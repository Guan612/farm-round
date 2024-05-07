/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx,vue}'],
    theme: {
        extend: {},
    },
    plugins: [],
    corePlugins: {
        preflight: false // 关闭默认样式
    },
    presets: [
        require('tailwindcss-rem2px-preset').createPreset({
            // 32 意味着 1rem = 32rpx
            fontSize: 32,
            // 转化的单位,可以变成 px / rpx
            unit: 'rpx'
        })
    ],
}

