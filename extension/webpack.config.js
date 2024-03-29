
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: "inline-source-map",
  entry: {
    content: path.resolve(__dirname, `src/content/content.ts`),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name]/[name].js"
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: "ts-loader"
      },

      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"] // can also use style-loader  
      },

      {
        test: /\.(png|svg|jpg|gif)$/,
        use: "file-loader"
      },
    ]
  },

  
  plugins: [

    new CleanWebpackPlugin(),

    new MiniCssExtractPlugin({
      filename: "content/[name].css"
    }),

    new CopyPlugin({
      patterns:[
      { from: 'manifest.json', to: 'manifest.json' },
      { from: 'src/icons', to: 'icons' },
    ]})
  ],

  resolve: {
    extensions: [".js", ".json", ".ts", ".tsx"],
  }
};
