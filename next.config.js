const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");
const withTM = require("next-transpile-modules")(["monaco-editor"]);

module.exports = withTM({
  webpack: config => {
    const rule = config.module.rules
      .find(rule => rule.oneOf)
      .oneOf.find(
        r =>
          r.issuer && r.issuer.include && r.issuer.include.includes("_app")
      );
    if (rule) {
      rule.issuer.include = [
        rule.issuer.include,
        /[\\/]node_modules[\\/]monaco-editor[\\/]/
      ];
    }

    config.plugins.push(
      new MonacoWebpackPlugin({
        languages: [
          "json",
          "markdown",
          "css",
          "typescript",
          "javascript",
          "html",
          "graphql",
          "python",
          "scss",
          "yaml"
        ],
        filename: "static/[name].worker.js"
      })
    );
    return config;
  }
});