require('./src/js/init.js');
require('./src/styles/materialize.css');
require('./src/styles/app.css');
require.context(
    "./src/imgs", // context folder
    true, // include subdirectories
    /.*/ // RegExp
);