const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    output: {
      publicPath: "/",
      // publicPath: "/portfolio/",
    },
  },
  // publicPath: "/portfolio/",
});

// module.exports = {
//   publicPath: "/portfolio/",
//   // publicPath: "/",
// };
