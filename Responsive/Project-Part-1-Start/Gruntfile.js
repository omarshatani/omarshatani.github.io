/*
 After you have changed the settings at "Your code goes here",
 run this with one of these options:
  "grunt" alone creates a new, completed images directory
  "grunt clean" removes the images directory
  "grunt responsive_images" re-processes images without removing the old ones
*/

module.exports = function(grunt) {

  const mozjpeg = require('imagemin-mozjpeg');

  grunt.initConfig({

    imagemin: {
      static: {
              options: {
                  optimizationLevel: 7,
                  // svgoPlugins: [{removeViewBox: false}],
                  use: [mozjpeg()] // Example plugin usage
              }
        },

      dynamic: {
        optimizationLevel: 7,
          files: [{
              expand: true,
              cwd: 'images_src/',
              src: ['**/*.{png,jpg,gif}'],
              dest: 'images/'
          }]
      }
  },

    responsive_images: {
      dev: {
        options: {
          // engine: 'im',
          sizes: [{
            width: 800,
            quality: 100
          }]
        },

        /*
        You don't need to change this part if you don't change
        the directory structure.
        */
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'images_src/',
          dest: 'images/'
        }]
      }
    },

    /* Clear out the images directory if it exists */
    clean: {
      dev: {
        src: ['images'],
      },
    },

    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['images']
        },
      },
    },

    /* Copy the "fixed" images that don't go through processing into the images/directory */
    copy: {
      dev: {
        files: [{
          expand: true,
          src: 'images_src/fixed/*.{gif,jpg,png}',
          dest: 'images/'
        }]
      },
    },
  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.registerTask('default', ['clean', 'mkdir', 'copy', 'responsive_images', 'imagemin']);

};
