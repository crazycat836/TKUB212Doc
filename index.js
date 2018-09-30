require('./src/js/init.js');
require('./src/styles/materialize.css');
require('./src/styles/app.css');
require('./src/js/jquery.lazyload.js');
require.context(
    "./src/imgs", // context folder
    true, // include subdirectories
    /.*/ // RegExp
);