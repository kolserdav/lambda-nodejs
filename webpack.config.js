const path = require('path');

module.exports = {
    target: "node",
    mode: 'production',
    entry: ["./dist/index.js"], // string | object | array
    // Here the application starts executing
    // and webpack starts bundling

    output: {
        // options related to how webpack emits results

        path: path.resolve(__dirname, "assets/js"), // string
        // the target directory for all output files
        // must be an absolute path (use the Node.js path module)

        filename: "module.js", // string
        // the filename template for entry chunks
        libraryTarget: 'var',
        library: 'ui'
    },
    watch : true
};
