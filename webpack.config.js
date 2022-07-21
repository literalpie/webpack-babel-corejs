const path = require("path");

const config = {
  mode: "production",
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {},
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    alias: {},
    symlinks: false,
  },
  output: {
    publicPath: "/public/out",
    path: path.resolve(__dirname, "public/out"),
    filename: "bundle.js",
  },
  plugins: [
    // new HTMLWebpackPlugin({
    //   inject: "body",
    //   template: path.resolve("public/index.html"),
    // }),
  ],
};

module.exports = config;
