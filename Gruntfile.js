"use strict";

module.exports = function( grunt ) {
    var pkg = require( "./package.json" );

    require( "./grunt_tasks/sass.js" )( grunt, pkg );
    require( "./grunt_tasks/twig.js" )( grunt, pkg );
    require( "./grunt_tasks/server.js" )( grunt, pkg );

    grunt.config.merge( {
        pkg: grunt.file.readJSON( "package.json" ),

        clean: {
            tmpFolder: [ "./tmp" ],
            assetsDist: [ "./dist/*" ],
            sassGlobbing: [ "./src/sass/**/__*" ]
        },

        shell: {
            bower: {
                "command": "./node_modules/.bin/bower update && ./node_modules/.bin/bower prune",
                "options": {
                    failOnError: false
                }
            }
        },

        /**
         * https://www.npmjs.com/package/grunt-include-replace
         */
        includereplace: {
            js: {
                options: {
                    includesDir: "src/js/includes",
                    prefix: "\/\/@"
                },
                files: [ {
                    cwd: "src/pages",
                    src: [
                        "**/*.js",
                        "!_**/*.js"
                    ],
                    dest: "dist/js/",
                    expand: true
                } ]
            }
        },
        /**
         * JavaScript minify
         *
         * https://www.npmjs.com/package/grunt-contrib-uglify
         */
        uglify: {
            options: {
                mangle: {
                    except: [
                        "$",
                        "jQuery"
                    ]
                },
                sourceMap: true
            },
            all: {
                files: [ {
                    cwd: "dist/js",
                    expand: true,
                    src: [
                        "**/*.js",
                        "!**/*.min.js"
                    ],
                    dest: "dist/js",
                    extDot: "last",
                    ext: ".min.js"
                } ]
            }
        },

        /**
         * JavaScript Code Style
         *
         * http://jscs.info/
         * https://npmjs.org/package/grunt-jscs
         */
        jscs: {
            jsSrc: [
                "src/**/*.js"
            ],
            jsDist: [
                "dist/js/**/*.js",
                "!dist/js/**/*.min.js"
            ],
            grunt: [
                "Gruntfile.js",
                "grunt_tasks/**"
            ]
        },

        watch: {
            js: {
                files: [
                    "src/js/includes/**/*.js",
                    "src/pages/**/*.js"
                ],
                tasks: [
                    "js"
                ]
            }
        }

    } );

    require( "load-grunt-tasks" )( grunt );

    grunt.registerTask( "default", [
        "clean",
        "shell:bower",
        "scss",
        "js",
        "newer:copy",
        "newer:autoprefixer:dev",
        "shell:library",
        "shell:docs",
        "shell:patterns",
        "newer:twigRender:pages"
    ] );

    grunt.registerTask( "watcher", [
        "default",
        "connect",
        "watch"
    ] );


    grunt.registerTask( "scss", [
        "sass_globbing",
        "newer:sass"
    ] );


    grunt.registerTask( "js", [
        "jscs:jsSrc",
        "includereplace:js",
        "uglify",
        "jscs:jsDist"
    ] );


    grunt.registerTask( "lint", [
        "scsslint"
    ] );

};
