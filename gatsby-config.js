module.exports = {
  siteMetadata: {
    title: 'Jack Jona Personal Website',
    author: 'Jack Jona',
    description: 'Hi I am Jack Jona, and welcome to my personal website. Here you can know more about me, contact me and see some of my projects.',
    siteUrl: `https://www.jackjona.live`,
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.jackjona.live`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Jack Jona Personal Website',
        short_name: 'Jack Jona',
        start_url: '/',
        background_color: '#000000',
        theme_color: '#000000',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
  ],
}
