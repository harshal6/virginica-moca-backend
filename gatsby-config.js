const config = require('./src/utils/siteConfig')
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})
let contentfulConfig

try {
  contentfulConfig = require('./.contentful')
} catch (e) {
  contentfulConfig = {
    production: {
      spaceId: process.env.SPACE_ID,
      accessToken: process.env.ACCESS_TOKEN,
    },
  }
} finally {
  const { spaceId, accessToken } = contentfulConfig.production
  if (!spaceId || !accessToken) {
    throw new Error('Contentful space ID and access token need to be provided.')
  }
}

module.exports = {
  siteMetadata: {
    siteUrl: config.siteUrl,
    rssMetadata: {
      site_url: config.siteUrl,
      feed_url: `${config.siteUrl}/rss.xml`,
      title: config.siteTitle,
      description: config.siteDescription,
      image_url: `${config.siteUrl}${config.siteLogo}`,
      author: config.author,
      copyright: config.copyright,
    },
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en',
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ["GTBold, GTRegular, GTMedium, GTLight, GTMono"],
          urls: ["/fonts/fonts.css"],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /svgs/
        }
      }
    },
    {
      resolve: '@mkitio/gatsby-theme-password-protect',
      options: {
        password: 'vmocaart987'
      }
    },
    {
      resolve: 'gatsby-plugin-bundle-stats',
      options: {
        compare: true,
        outDir: '../artifacts',
        stats: {
          context: './src'
        }
      }
    },
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: config.siteUrl,
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-preact',
    `@contentful/gatsby-transformer-contentful-richtext`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://virginiamoca.org/',
        siteMap: 'https://virginiamoca.org/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
          },
          `gatsby-remark-autolink-headers`,
          {
            resolve: `gatsby-remark-images-contentful`,
            options: {
              maxWidth: 650,
              backgroundColor: 'white',
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    `gatsby-transformer-remark-plaintext`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-source-contentful',
      options:
        process.env.NODE_ENV === 'development'
          ? contentfulConfig.development
          : contentfulConfig.production,
    },
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.siteTitle,
        short_name: config.shortTitle,
        description: config.siteDescription,
        start_url: '/',
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: 'minimal-ui',
        icon: `static/icons/android-chrome-192x192.png`,
      },
    },
    'gatsby-plugin-offline',
    // {
    //   resolve: 'gatsby-plugin-feed',
    //   options: {
    //     setup(ref) {
    //       const ret = ref.query.site.siteMetadata.rssMetadata
    //       ret.allMarkdownRemark = ref.query.allMarkdownRemark
    //       ret.generator = config.siteTitle
    //       return ret
    //     },
    //     query: `{
    //       site {
    //         siteMetadata {
    //           rssMetadata {
    //             site_url
    //             feed_url
    //             title
    //             description
    //             image_url
    //             author
    //             copyright
    //           }
    //         }
    //       }
    //     }`,
    //     feeds: [
    //       {
    //         serialize(ctx) {
    //           const rssMetadata = ctx.query.site.siteMetadata.rssMetadata
    //           return ctx.query.allContentfulPost.edges.map(edge => ({
    //             date: edge.node.publishDate,
    //             title: edge.node.title,
    //             description: edge.node.body.childMarkdownRemark.excerpt,

    //             url: rssMetadata.site_url + '/' + edge.node.slug,
    //             guid: rssMetadata.site_url + '/' + edge.node.slug,
    //             custom_elements: [
    //               {
    //                 'content:encoded': edge.node.body.childMarkdownRemark.html,
    //               },
    //             ],
    //           }))
    //         },
    //         query: `{
    //         allContentfulPost(limit: 1000, sort: {fields: [publishDate], order: DESC}) {
    //            edges {
    //              node {
    //                title
    //                slug
    //                publishDate(formatString: "MMMM DD, YYYY")
    //                body {
    //                  childMarkdownRemark {
    //                    html
    //                    excerpt(pruneLength: 80)
    //                  }
    //                }
    //              }
    //            }
    //          }
    //        }`,
    //         output: '/rss.xml',
    //         title: config.rssTitle,
    //       },
    //     ],
    //   },
    // },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: config.themeColor,
      },
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          '/**/*.html': [
            'cache-control: public',
            'cache-control: max-age=0',
            'cache-control: must-revalidate',
          ],
          '/**/*.js': [
            'cache-control: public',
            'cache-control: max-age=0',
            'cache-control: must-revalidate',
          ],
          '/page-data/*.json': [
            'cache-control: public',
            'cache-control: max-age=0',
            'cache-control: must-revalidate',
          ],
          '/app-data.json': [
            'cache-control: public',
            'cache-control: max-age=0',
            'cache-control: must-revalidate',
          ],
          '/static/*': [
            'cache-control: public',
            'cache-control: max-age=31536000',
            'cache-control: immutable',
          ],
        },
      },
    },
  ],
}
