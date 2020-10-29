module.exports = {
  siteMetadata: {
    title: '4log',
    author: 'Han sanghyeon',
    description: '매일매일 1%',
    siteUrl: 'https://4log.hyeon.pro/',
    social: {
      github: 'Hansanghyeon',
    },
  },
  plugins: [
    'gatsby-plugin-cname',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static`,
        name: 'static',
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: '4log | 매일매일 1%',
        short_name: '4log',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#1f2430',
        display: 'minimal-ui',
        icon: 'static/favicon.png',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/views/styles/typography',
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: [
            'Noto Sans KR',
            'Noto Sans',
            'Fira Code',
            'Nanum Gothic',
            'Fira Sans',
            'Cookie',
          ],
        },
        custom: {
          families: ['D2 coding'],
          urls: [
            'https://cdn.jsdelivr.net/gh/joungkyun/font-d2coding/d2coding.css',
          ],
        },
      },
    },
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-PTM9Q7M',
        includeInDevelopment: false,
        defaultDataLayer: { platform: 'gatsby' },
      },
    },
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}/src/views/pages`,
        ignore: [`*.style.(js|ts)?(x)`],
      },
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: 'WPGraphQL',
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: 'wpgql',
        // Url to query from
        url: 'https://wp.hyeon.pro/graphql',
        // refetch interval in seconds
        // refetchInterval: 60,
      },
    },
    {
      resolve: `gatsby-plugin-transition-link`,
      options: {
        layout: require.resolve(
          `${__dirname}/src/views/containers/Layout/index.ts`,
        ),
      },
    },
    `gatsby-plugin-remove-trailing-slashes`,
    `gatsby-plugin-sitemap`,
  ],
};
