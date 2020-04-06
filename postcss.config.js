const purgecss = require('@fullhuman/postcss-purgecss');

const testWhitelist = ['ns-', 'body', 'swiper-', 'ns-first'];
module.exports = {
    plugins: [
        require('autoprefixer'),
        require('cssnano')({
            preset: 'default',
        }),
        purgecss({
            content: ['./**/*.html'],
            keyframes: true,
            whitelist: testWhitelist,
            whitelistPatterns: [/ns-+/, /swiper-+/],
            whitelistPatternsChildren: [/$main-container$/, /swiper-container+/, /ns-first+/]
        })
    ]
}