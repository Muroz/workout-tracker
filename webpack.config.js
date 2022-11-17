const isProd = process.env.NODE_ENV === "production";

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: isProd ? "production" : "development",
  entry: "./src/index.tsx",
  output: {
    path: __dirname + "/dist/"
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: [".ts", ".tsx", ".js", ".json"]
        },
        use: "ts-loader"
      }
    ]
  },
  devtool: isProd ? undefined : "source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html"
    })
  ]
};
