// https://github.com/prettier/prettier/issues/5322#issuecomment-1276302630
module.exports = {
  overrides: [
    {
      files: "*.svg",
      options: {
        parser: "html",
      },
    },
  ],
};
