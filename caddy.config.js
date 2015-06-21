var pkg = require('./package.json');

module.exports = {
    pkg: pkg,
    buildPaths: [
        {source: "./src", targets: ['./_footy-ext'], minify: true},
        {source: "./test/fixtures", targets: ['./_footy-ext']}
    ],
    tasks : {
        copy: ['fonts', 'images', 'server-config', '**/*.json'],
        build: ['sass', 'mustache', 'browserify'],
        serve: 'staticApp',
        test: 'karma',
        release: ['git', 'gh-pages']
    },
    karma: ['./test/karma.unit.js']
};