module.exports = function( grunt, pkg ) {
    grunt.config.merge( {

        // Sass
        // https://github.com/sindresorhus/grunt-sass
        sass: {
            options: {
                includePaths: [
                    "./styles"
                ],
                sourceMap: true,
                outputStyle: "compressed",
            },
            styles: {
                files: [ {
                    expand: true,
                    cwd: "./styles",
                    src: [ "**/*.scss", "!_**/*.scss" ],
                    dest: "tmp/css",
                    ext: ".css"
                } ]
            },
            pages: {
                files: [ {
                    expand: true,
                    cwd: "./examples/",
                    src: [ "**/*.scss", "!_**/*.scss" ],
                    dest: "tmp/css",
                    ext: ".css"
                } ]
            }
        },

        // https://github.com/DennisBecker/grunt-sass-globbing
        sass_globbing: {
            your_target: {
                files: {
                    "styles/base/__base.scss":
                        "styles/base/**/*.scss",
                    "styles/components/__components.scss":
                        "styles/components/*.scss",
                    "styles/layouts/__layouts.scss":
                        "styles/layouts/*.scss",
                    "styles/extends/__extends.scss":
                        "styles/extends/*.scss",
                    "styles/functions/__functions.scss":
                        "styles/functions/*.scss",
                    "styles/mixins/__mixins.scss":
                        "styles/mixins/*.scss",
                    "styles/variables/__variables.scss":
                        "styles/variables/*.scss"

                },
                options: {
                    useSingleQuotes: false
                }
            }
        },
        scsslint: {
            allFiles: [
              "styles/*.scss"
            ],
            options: {
                bundleExec: true,
                config: ".scss-lint.yml",
                reporterOutput: "scss-lint-report.xml",
                colorizeOutput: true,
                exclude: "styles/vendor/**/*.scss",
                maxBuffer: 1024 * 1024 * 100
            }
        },
        autoprefixer: {
            dev: {
                expand: true,
                cwd: "tmp/css/",
                src: "**/*.css",
                dest: "dist/css/",
                annotation: true,
                browsers: [ "latest 2 versions" ],
                options: {
                    map: true
                }
            }
        },
        csslint_plus: {
            rules: [
              "node_modules/grunt-more-csslint-rules/examples/*.js"
            ]
        },

        // Validate CSS files
        // https://www.npmjs.org/package/grunt-contrib-csslint
        csslint: {
            options: {
                "universal-selector": false,
                "unqualified-attributes": false,
                "regex-selectors": false,
                "box-sizing": false,
                "qualified-headings": false,
                "unique-headings": false,
                "font-sizes": false,
                "floats": false,
                "compatible-vendor-prefixes": false,
                "vendor-prefix": false
            },
            dist: [
              "tmp/css/**/*.css"
            ]
        },
        watch: {
            sass: {
                files: [
                    "styles/*.scss",
                    "styles/**/*.scss",
                    "src/**/*.scss",
                    "!src/**/_*.scss",
                ],
                tasks: [ "newer:sass" ]
            },
            autoprefixer: {
                files: [ "tmp/css/**/*.css" ],
                tasks: [ "newer:autoprefixer" ]
            }
        }

    } );
};
