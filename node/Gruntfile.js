var path = require('path');
var fs = require('fs');

module.exports = function(grunt) {

  var packageJson = grunt.file.readJSON('package.json');
  var HOME = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;
  grunt.initConfig({
      pkg: packageJson,
      jade: {
          compile: {
              options: {
                  data: {},
                  pretty: false
              },
              files: [ { 
                expand: true, 
                src: ["*.jade"], 
                dest: "public/templates", 
                cwd: "views/", 
                ext: '.html'
              } ]
          }
      },
      jshint: {
        options: {
          '-W069': true, // ignore ['HEAD'] is better written in dot notation        
        },
        web: {
          options: {
            node: true,
            browser: true,
            globals: {
              'io': true,
              'can': true
            }
          },
          src: ['public/js/*.js', '*.js', 'public/js/source/*.js']
        },
        node: {
          options: {
            node: true
          },
          src: [
            'Gruntfile.js',
            'bin/*',
            'serenedi.js',
          ]
        }
      },
      less: {
        production: {
          files: {
            "../styles.css": ['public/css/main.less', "bower_components/blueimp-bootstrap-image-gallery/css/bootstrap-image-gallery.min.css", "bower_components/blueimp-gallery/css/blueimp-gallery.min.css"]
          }
        }
      },
      browserify: {
        dist: {
          files: {
            '../script.js': ['public/js/main.js']
          }
        }
      },
      templates: {
        files: ['public/*.html'],
        tasks: ['templates'],
        options: {
          spawn: false,
        },
      },
      clean: ["public/templates"],
      copy: {
        main: {
          files: [
            {expand: true, flatten: true, filter: 'isFile', src: 'bower_components/bootstrap/dist/fonts/*', dest: '../fonts/'},
            {expand: true, flatten: true, src: 'public/fonts/*', dest: '../fonts/'},
            {expand: true, flatten: true, src: 'bower_components/jquery/jquery.min.map', dest: '../'},
            {expand: true, flatten: true, src: 'bower_components/blueimp-gallery/img/*', dest: '../img/'}
          ]
        }
      }
  });

  var templateIncludeRegexp = /<!-- serenedi-import-[a-z]*Template: "([^"^.])*.html"-->/gm;
  grunt.registerTask('templates', 'Compiling templates', function() {
    function compileTemplate(inFilename, outFilename) {
      var template = fs.readFileSync(inFilename, 'utf8');
      var newTemplate = template.replace(templateIncludeRegexp, function(match) {
        var templateName = match.split("\"")[1];
        console.log('Replacing:  ' + templateName);
        var res = fs.readFileSync(path.join(path.dirname(inFilename), templateName), 'utf8');

        if(match.indexOf('mustache') > 0) {
          res = '<script type="text/mustache" id="' + templateName.substring(0, templateName.length - 5) + '">' + res + '</script>';
        }

        return res;
      });
      fs.writeFileSync(outFilename, newTemplate);
    }
    compileTemplate('public/templates/index.html', '../index.html');
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['clean','jade', 'browserify', 'less', 'jshint', 'templates', 'copy']);
};
