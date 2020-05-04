module.exports = {
  stories: ['../src/**/*.story.tsx'],
  addons: ['@storybook/addon-cssresources/register'],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [ { loader: require.resolve('awesome-typescript-loader') } ]
    }, {
      test: /\.js?$/,
      use: [ { loader: require.resolve('babel-loader') } ]
    },{
      test: /\.s[ac]ss$/i,
      use: [ 'style-loader', 'css-loader', 'sass-loader' ]
    });

    config.resolve.extensions.push('.ts', '.tsx', '.js');
    return config;
  }
}