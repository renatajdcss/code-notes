module.exports = {
  siteMetadata: {
    title: 'Renata\'s Code notes',
    description: `Quick notes and snippets I can reference to later.`
  },
  pathPrefix: "/code-notes",
  plugins: [
    {
      resolve: 'gatsby-theme-code-notes',
      options: {
        contentPath: 'notes',
        basePath: '/',
        showThemeInfo: true,
        showDescriptionInSidebar: true,
        gitRepoContentPath: 'https://github.com/renatajdcss/code-notes/',
        logo: 'https://avatars2.githubusercontent.com/u/12951469?s=460&u=6dd26b0dc82ea2277ea7660d67f4634c3092803e&v=4'
      },
    },
  ],
}
