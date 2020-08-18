/**
 *
 * Refrence : https://github.com/vercel/next.js/blob/master/errors/postcss-shape.md
 */

const PURGECSS_OPTIONS = {
  // Specify the paths to all of the template files in your project
  content: [
    "./src/components/**/*.tsx",
    "./src/pages/**/*.tsx",
    // etc.
  ],
  whitelist: ["html", "body", "__next"],
  // Include any special characters you're using in this regular expression
  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
};

const postCSSPlugins = [
  ["tailwindcss", {}],
  ["autoprefixer", {}],
];

if (process.env.NODE_ENV === "production") {
  postCSSPlugins.push(["@fullhuman/postcss-purgecss", PURGECSS_OPTIONS]);
}

module.exports = {
  plugins: postCSSPlugins,
};
