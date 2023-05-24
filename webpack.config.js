const path = require('path')

module.exports = {
    mode: 'development',
    
    module: {
      rules: [
        {
          test: /\.m?js$/,
          enforce: 'pre',
          use: ['source-map-loader'],
        },
      ],
    },
      
    entry:'./src/index.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    watch: true
    
}

