const proxy = require("http-proxy-middleware");
module.exports = function(app) {
  app.use(
    proxy("/uploadImages", { target: "http://localhost:4000" }),
    proxy("/graphql", { target: "http://localhost:4000" })
    )
};