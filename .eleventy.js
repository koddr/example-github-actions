const CleanCSS = require("clean-css"); // npm i --save-dev clean-css

module.exports = function (eleventyConfig) {
  // Copy all images to output folder
  eleventyConfig.addPassthroughCopy("src/images");

  // Optimized, minimized and included CSS to final HTML
  eleventyConfig.addFilter("cssmin", function (code) {
    return new CleanCSS({}).minify(code).styles;
  });

  return {
    dir: {
      input: "src", // input folder name
      output: "dist", // output folder name
    },
    passthroughFileCopy: true, // allows to copy files to output folder
    htmlTemplateEngine: "njk", // choose Nunjucks template engine
    templateFormats: ["njk", "css"],
  };
};
