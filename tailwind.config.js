module.exports = {
  purge: {
    enabled: false, // Not getting expected result so default purgeccs disabled
    content: ["./src/components/**/*.tsx", "./src/pages/**/*.tsx"],
    options: {
      whitelist: ["html", "body", "__next"],
    },
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
  },
};
