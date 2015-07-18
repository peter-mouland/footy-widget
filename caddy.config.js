var pkg = require('./package.json');

module.exports = {
    pkg: pkg,
    buildPaths: [
        {source: "./src", target: './_footy-ext', minify: true},
        {source: "./test/fixtures", target: './_footy-ext'}
    ],
    tasks : {
        copy: ['images', '/*{CNAME,.htaccess,robots.txt,manifest.json}', '**/*.json'],
        build: ['sass', 'mustache', 'browserify'],
        serve: 'staticApp',
        release: ['git', 'gh-pages']
    }
};