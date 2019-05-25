const path = require('path');

// Export a function. Accept the base config as the only param.
module.exports = ({ config, mode }) => {

  /* Support for React Native Web */
  config.resolve = {
    modules: ['node_modules'],
    extensions: ['.web.js', '.js', '.json', '.web.jsx', '.jsx', 'ts', 'tsx'],
    alias: {
      'react-native': 'react-native-web',
    },
  };

  /* PostCSS Support */
  config.module.rules.push({
    test: /\.css$/,
    loaders: [
      // Loader for webpack to process CSS with PostCSS
      {
        loader: 'postcss-loader',
        options: {
          /* 
            Enable Source Maps
           */
          sourceMap: true,
          /*
            Set postcss.config.js config path && ctx 
           */
          config: {
            path: './.storybook/',
          },
        },
      },
    ],

    include: path.resolve(__dirname, '../'),
  });

  // Return the altered config
  return config;
};