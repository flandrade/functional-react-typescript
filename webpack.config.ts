"use strict";

import * as path from "path";
import * as webpack from "webpack";

const excludedFiles = [
  /node_modules/,
  /dist/
];

const config: webpack.Configuration = {
  devtool: "eval-source-map",
  entry: [ "./src/app.tsx" ],
  module: {
    rules: [ 
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: "awesome-typescript-loader",
          }
        ]
      } 
    ]
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build")

  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  stats: {
    colors: true,
    errorDetails: true,
    reasons: true,
  },
  watch: true
};

export default config;
