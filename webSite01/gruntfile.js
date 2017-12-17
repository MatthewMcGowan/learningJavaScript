module.exports = function(grunt) {
    grunt.initConfig({
        nodemon: {
            all: {
                script: "expressServer01.js",
                options: {
                    watchedExtensions: ["js"]
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-nodemon");
    grunt.registerTask("default", ["nodemon"]);
};