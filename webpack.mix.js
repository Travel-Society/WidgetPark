const mix = require('laravel-mix');


    mix.sass('assets/parks.scss', 'assets/parksNew.min.css'); // Compila SCSS a CSS

    mix.js('assets/WidgetPark.js','widgetpark-1.min.js');
