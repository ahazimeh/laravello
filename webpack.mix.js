const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.postCss('resources/css/app.css','public/css',[
    require('tailwindcss')
]);

class Example {
    dependencies() {
        return ['graphql','graphql-tag']
    }
    webpackRules() {
        return {
            test: /\.(graphql|gql)$/,
            exclude: /node_modules/,
            loader: 'graphql-tag/loader'
        }
    }
}
mix.extend('graphql', new Example());
mix.graphql();



mix.js('resources/js/app.js', 'public/js')
    .vue()
    // .sass('resources/sass/app.scss', 'public/css');
