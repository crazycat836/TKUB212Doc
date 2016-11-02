require('./src/js/init.js');
require('./src/styles/materialize-0.97.8.css');
require('./src/styles/app.css');
require('./src/js/jquery.lazyload.js');
require('./src/js/jquery.scrollstop.js');
require.context(
    "./src/imgs", // context folder
    true, // include subdirectories
    /.*/ // RegExp
);