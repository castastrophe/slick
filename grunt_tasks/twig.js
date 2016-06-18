module.exports = function( grunt, pkg ) {
    var path = require( "path" );
    grunt.config.merge( {
        twigRender: {
            options: {
              // Task-specific options go here.
            },
            pages: {
                files: [
                    {
                        expand: true,
                        data: {},
                        cwd: "examples/",
                        src: [ "*.twig", "!_*.twig" ],
                        dest: "dist/examples",
                        ext: ".html"
                    }
                ]
            },
        },
        watch: {
            twig: {
                files: [
                    "examples/*.twig"
                ],
                tasks: [
                    "newer:twigRender:pages"
                ]
            }
        }
    } );
};
