let path = require('path')

module.exports={
    // mode:'production',
    mode:"development",
    entry:"./src/all.js",
    output:{
        path:path.resolve(__dirname,"public"),
        filename:"mydev.js"
    }
}