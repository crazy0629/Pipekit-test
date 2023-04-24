const express = require("express");
const webpack = require("webpack");
const webpackDev = require("webpack-dev-middleware");
const hmr = require("webpack-hot-middleware");
const bodyParser = require("body-parser");
// const cors = require("cors");

const routes = require("./routes");
const webpackConfig = require("../webpack.config");

const app = express();
const compiler = webpack(webpackConfig);

const isDeployed =
  process.env.ENVIRONMENT === "production" ||
  process.env.ENVIRONMENT === "staging";

// var corsOption = {
//   origin: `*`,
//   methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
//   credentials: true,
//   exposedHeaders: ["x-auth-token"],
//   url: ["http://localhost:3000/"],
// };
// app.use(cors(corsOption));
app.use(
  webpackDev(compiler, {
    publicPath: webpackConfig.output.publicPath,
    writeToDisk: true,
  })
);

// configure hmr
app.use(hmr(compiler));

app.use(express.static("dist"));

app.use(bodyParser.json());

app.use("/", routes);

app.listen(process.env.PORT || 3000, () => {
  // eslint-disable-next-line no-console
  console.log("server live on port: ", process.env.PORT || 3000);
});

module.exports = app;
