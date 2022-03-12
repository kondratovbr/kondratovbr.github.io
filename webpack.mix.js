const mix = require('laravel-mix');

mix.disableNotifications();

mix
    //.js("resources/js/app.js", "public/js")
    .postCss("source/css/main.pcss", "public/css", [
        require('postcss-import'),
        require('tailwindcss/nesting'),
        require("tailwindcss"),
        require('autoprefixer'),
    ]);
