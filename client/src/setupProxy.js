const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://linserv1.cims.nyu.edu:22346/",
      changeOrigin: true,
    })
  );
};
