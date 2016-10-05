const cpx = require("cpx");
const lib = 'dist/lib/';

cpx.copy('node_modules/es6-shim/es6-shim.min.js', lib);
cpx.copy('node_modules/moment/min/moment.min.js', lib);
cpx.copy('node_modules/react/dist/react.js', lib);
cpx.copy('node_modules/react-dom/dist/react-dom.js', lib);
