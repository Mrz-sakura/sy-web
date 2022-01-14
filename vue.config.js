const path = require("path");

const resolve = dir => path.join(__dirname, "./", dir);

/**
 *
 * @type {import("@vue/cli-service").ProjectOptions}
 */
module.exports = {
  outputDir: "bundle",
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("@com", resolve("src/components/"))
      .set("@img", resolve("src/assets/images/"));
    // .set("@api", resolve("src/api/"))
    // .set("@class", resolve("src/class/"));
  },
  devServer: {
    port: 2022
  }
};