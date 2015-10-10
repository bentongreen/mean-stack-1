var dest = "./public";
var src = './src';

module.exports = {
  javascript: {
    src: src + '/app/**/*.js',
    dest: dest + '/js/',
    entryPoint: src + '/webpack-entry.js',
    packedFile: 'packed.js'
  },
  sass: {
    src: src + "/sass/**/*.{sass,scss}",
    dest: dest + '/css/',
    settings: {
      indentedSyntax: true,
    }
  },
  html: {
    src: src + "/app/**/*.html",
    dest: dest + "/partials/"
  },
  server: {
    serverFile: '.server.js',
  },
  production: {
    cssSrc: dest + '/css/*.css',
    jsSrc: dest + '/*.js',
    dest: dest
  }
};

