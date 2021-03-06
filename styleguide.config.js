module.exports = {
  sections: [
    {
      name: 'Introduction',
      content: 'docs/intro.md',
    },
    // {
    //   name: 'Documentation',
    //   sections: [
    //     {
    //       name: 'Installation',
    //       content: 'docs/installation.md',
    //       description: 'The description for the installation section',
    //     },
    //     {
    //       name: 'Configuration',
    //       content: 'docs/configuration.md',
    //     },
    //     {
    //       name: 'Live Demo',
    //       external: true,
    //       href: 'http://example.com',
    //     },
    //   ],
    // },
    {
      name: 'UI Components',
      // content: 'docs/ui.md',
      components: 'src/Form2/controls/**/*.jsx',
      // components: 'src/*/*.jsx',
      ignore: ['**/__tests__/**', '**/*.test.{js,jsx,ts,tsx}', '**/*.spec.{js,jsx,ts,tsx}', '**/*.d.ts', '**/*story.{js,jsx}'],
      // components: 'src/Button/*.jsx',
      exampleMode: 'expand', // 'hide' | 'collapse' | 'expand'
      usageMode: 'expand', // 'hide' | 'collapse' | 'expand'
    },
  ],
  webpackConfig: require('./tools/webpack.config')[0],
};
