module.exports = function(grunt) {
    const sass = require('node-sass');



    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            options: {
                implementation: sass,
            },
            build: {
                files: {
                    'css/style.css': 'style.scss'
                }
            }
        },
        cssmin: {
            target: {
                files: [{
                    src: 'css/style.css',
                    dest: 'css/style.min.css'
                }]
            }
        },
        uglify: {

            build: {
                files: [{
                    src: 'script.js',
                    dest: 'build/script-uglified.js'
                }]
            }
        },
        autoprefixer: {
            options: {
                browsers: ["last 2 versions", "ie 8", "ie 9"],
            },
            build: {
                files: {
                    'css/style.css': 'css/style.css'
                },
            },
        },
    });
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.registerTask('default', ['sass']);


}