module.exports = {
  source: ['libs/shared/styles/tokens/*.tokens.json'],
  platforms: {
    scss: {
      transformGroup: 'scss',
      buildPath: 'libs/shared/styles/',
      files: [
        {
          destination: 'tokens.module.scss',
          format: 'scss/variables',
        },
      ],
    },
  },
};
