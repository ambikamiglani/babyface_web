const path = require('path');

module.exports = {
    outputDir :  path.resolve(__dirname, './babyface-backend/public'),
    devServer: {
        proxy: {
            '/' : {
                target: 'http://localhost:8080'
            }
        }
    }
};