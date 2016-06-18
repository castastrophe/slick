module.exports = function( grunt, pkg, path ) {

    grunt.config.merge( {

        // Connect server for hologram
        // https://github.com/gruntjs/grunt-contrib-connect
        connect: {
            server: {
                options: {
                    livereload: 1337,
                    port: 9001,
                    hostname: "0.0.0.0",
                    base: "dist/",
                    open: {
                        target: "http://localhost:9001/examples"  // Target url to open
                    }
                }
            }
        },

    } );

};
