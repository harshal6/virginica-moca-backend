const config = require('./src/utils/siteConfig')
const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const loadPages = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulPage {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      const pages = result.data.allContentfulPage.edges
      pages.map(({ node }) => {
        createPage({
          path: node.slug === 'home' ? `/` : `${node.slug}/`,
          component: node.slug === 'events' ? path.resolve(`./src/templates/events.js`): path.resolve(`./src/templates/index.js`),
          context: {
            slug: node.slug,
          },
        })
      })
      resolve()
    })
  })

  const loadExhibitionsPage = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulExhibition(
          sort: { fields: [date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              slug
              date
            }
          }
        }
      }
    `).then(result => {
      const events = result.data.allContentfulExhibition.edges
      const postsPerPage = config.postsPerHomePage
      events.map(({ node }) => {
        createPage({
          path: `exhibitions`,
          component: path.resolve(`./src/templates/exhibits.js`),
          context: {
            limit: postsPerPage,
            skip: 0,
            slug: node.slug,
          },
        })
      })
      resolve()
    })
  })

  const loadExhibitPages = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulExhibition {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      const exhibits = result.data.allContentfulExhibition.edges
      exhibits.map(({ node }) => {
        createPage({
          path: `exhibit/${node.slug}/`,
          component: path.resolve(`./src/templates/exhibit.js`),
          context: {
            slug: node.slug,
          },
        })
      })
      resolve()
    })
  })

  const loadArtistPages = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulArtist {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      const exhibits = result.data.allContentfulArtist.edges
      exhibits.map(({ node }) => {
        createPage({
          path: `artist/${node.slug}/`,
          component: path.resolve(`./src/templates/artist.js`),
          context: {
            slug: node.slug,
          },
        })
      })
      resolve()
    })
  })

  const loadEventPages = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulEvent(
          sort: { fields: [date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              slug
              date
            }
          }
        }
      }
    `).then(result => {
      const events = result.data.allContentfulEvent.edges
      const postsPerPage = config.postsPerHomePage
      events.map(({ node }) => {
        createPage({
          path: `event/${node.slug}/`,
          component: path.resolve(`./src/templates/event.js`),
          context: {
            limit: postsPerPage,
            skip: 0,
            slug: node.slug,
          },
        })
      })
      resolve()
    })
  })

  const loadEventsTypeLecturePanelPage = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulEvent(
          sort: { fields: [date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              slug
              date
            }
          }
        }
      }
    `).then(result => {
      const events = result.data.allContentfulEvent.edges
      const postsPerPage = config.postsPerHomePage
      events.map(({ node }) => {
        createPage({
          path: `events/type/lecture-panel/`,
          component: path.resolve(`./src/templates/events-type-lecture-panel.js`),
          context: {
            limit: postsPerPage,
            skip: 0,
            slug: node.slug,
          },
        })
      })
      resolve()
    })
  })

  const loadEventsTypeFilmPage = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulEvent(
          sort: { fields: [date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              slug
              date
            }
          }
        }
      }
    `).then(result => {
      const events = result.data.allContentfulEvent.edges
      const postsPerPage = config.postsPerHomePage
      events.map(({ node }) => {
        createPage({
          path: `events/type/film/`,
          component: path.resolve(`./src/templates/events-type-film.js`),
          context: {
            limit: postsPerPage,
            skip: 0,
            slug: node.slug,
          },
        })
      })
      resolve()
    })
  })

  const loadEventsTypeExhibitionPage = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulEvent(
          sort: { fields: [date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              slug
              date
            }
          }
        }
      }
    `).then(result => {
      const events = result.data.allContentfulEvent.edges
      const postsPerPage = config.postsPerHomePage
      events.map(({ node }) => {
        createPage({
          path: `events/type/exhibition/`,
          component: path.resolve(`./src/templates/events-type-exhibition.js`),
          context: {
            limit: postsPerPage,
            skip: 0,
            slug: node.slug,
          },
        })
      })
      resolve()
    })
  })

  const loadEventsTypeArtClassPage = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulEvent(
          sort: { fields: [date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              slug
              date
            }
          }
        }
      }
    `).then(result => {
      const events = result.data.allContentfulEvent.edges
      const postsPerPage = config.postsPerHomePage
      events.map(({ node }) => {
        createPage({
          path: `events/type/art-class/`,
          component: path.resolve(`./src/templates/events-type-art-class.js`),
          context: {
            limit: postsPerPage,
            skip: 0,
            slug: node.slug,
          },
        })
      })
      resolve()
    })
  })

  const loadEventsTypeTourPage = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulEvent(
          sort: { fields: [date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              slug
              date
            }
          }
        }
      }
    `).then(result => {
      const events = result.data.allContentfulEvent.edges
      const postsPerPage = config.postsPerHomePage
      events.map(({ node }) => {
        createPage({
          path: `events/type/tour/`,
          component: path.resolve(`./src/templates/events-type-tour.js`),
          context: {
            limit: postsPerPage,
            skip: 0,
            slug: node.slug,
          },
        })
      })
      resolve()
    })
  })

  const loadEventsTypeOutdoorPage = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulEvent(
          sort: { fields: [date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              slug
              date
            }
          }
        }
      }
    `).then(result => {
      const events = result.data.allContentfulEvent.edges
      const postsPerPage = config.postsPerHomePage
      events.map(({ node }) => {
        createPage({
          path: `events/type/outdoor/`,
          component: path.resolve(`./src/templates/events-type-outdoor.js`),
          context: {
            limit: postsPerPage,
            skip: 0,
            slug: node.slug,
          },
        })
      })
      resolve()
    })
  })

  const loadEventsAudienceAdultsPage = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulEvent(
          sort: { fields: [date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              slug
              date
            }
          }
        }
      }
    `).then(result => {
      const events = result.data.allContentfulEvent.edges
      const postsPerPage = config.postsPerHomePage
      events.map(({ node }) => {
        createPage({
          path: `events/audience/adults/`,
          component: path.resolve(`./src/templates/events-audience-adults.js`),
          context: {
            limit: postsPerPage,
            skip: 0,
            slug: node.slug,
          },
        })
      })
      resolve()
    })
  })

  const loadEventsAudienceTeensPage = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulEvent(
          sort: { fields: [date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              slug
              date
            }
          }
        }
      }
    `).then(result => {
      const events = result.data.allContentfulEvent.edges
      const postsPerPage = config.postsPerHomePage
      events.map(({ node }) => {
        createPage({
          path: `events/audience/teens/`,
          component: path.resolve(`./src/templates/events-audience-teens.js`),
          context: {
            limit: postsPerPage,
            skip: 0,
            slug: node.slug,
          },
        })
      })
      resolve()
    })
  })

  const loadEventsAudienceFamiliesPage = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulEvent(
          sort: { fields: [date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              slug
              date
            }
          }
        }
      }
    `).then(result => {
      const events = result.data.allContentfulEvent.edges
      const postsPerPage = config.postsPerHomePage
      events.map(({ node }) => {
        createPage({
          path: `events/audience/families/`,
          component: path.resolve(`./src/templates/events-audience-families.js`),
          context: {
            limit: postsPerPage,
            skip: 0,
            slug: node.slug,
          },
        })
      })
      resolve()
    })
  })

  const loadEventsAudienceTeachersPage = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulEvent(
          sort: { fields: [date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              slug
              date
            }
          }
        }
      }
    `).then(result => {
      const events = result.data.allContentfulEvent.edges
      const postsPerPage = config.postsPerHomePage
      events.map(({ node }) => {
        createPage({
          path: `events/audience/teachers/`,
          component: path.resolve(`./src/templates/events-audience-teachers.js`),
          context: {
            limit: postsPerPage,
            skip: 0,
            slug: node.slug,
          },
        })
      })
      resolve()
    })
  })

  const loadEventsAudienceArtistsPage = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulEvent(
          sort: { fields: [date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              slug
              date
            }
          }
        }
      }
    `).then(result => {
      const events = result.data.allContentfulEvent.edges
      const postsPerPage = config.postsPerHomePage
      events.map(({ node }) => {
        createPage({
          path: `events/audience/artists/`,
          component: path.resolve(`./src/templates/events-audience-artists.js`),
          context: {
            limit: postsPerPage,
            skip: 0,
            slug: node.slug,
          },
        })
      })
      resolve()
    })
  })

  const loadEventsAudienceMembersPage = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulEvent(
          sort: { fields: [date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              slug
              date
            }
          }
        }
      }
    `).then(result => {
      const events = result.data.allContentfulEvent.edges
      const postsPerPage = config.postsPerHomePage
      events.map(({ node }) => {
        createPage({
          path: `events/audience/members/`,
          component: path.resolve(`./src/templates/events-audience-members.js`),
          context: {
            limit: postsPerPage,
            skip: 0,
            slug: node.slug,
          },
        })
      })
      resolve()
    })
  })

  const loadEventsAudienceKidsPage = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulEvent(
          sort: { fields: [date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              slug
              date
            }
          }
        }
      }
    `).then(result => {
      const events = result.data.allContentfulEvent.edges
      const postsPerPage = config.postsPerHomePage
      events.map(({ node }) => {
        createPage({
          path: `events/audience/kids/`,
          component: path.resolve(`./src/templates/events-audience-kids.js`),
          context: {
            limit: postsPerPage,
            skip: 0,
            slug: node.slug,
          },
        })
      })
      resolve()
    })
  })

  return Promise.all([
    loadPages,
    loadExhibitPages,
    loadExhibitionsPage,
    loadEventPages,
    loadEventsTypeLecturePanelPage,
    loadEventsTypeFilmPage,
    loadEventsTypeExhibitionPage,
    loadEventsTypeArtClassPage,
    loadEventsTypeTourPage,
    loadEventsTypeOutdoorPage,
    loadEventsAudienceAdultsPage,
    loadEventsAudienceTeensPage,
    loadEventsAudienceFamiliesPage,
    loadEventsAudienceTeachersPage,
    loadEventsAudienceArtistsPage,
    loadEventsAudienceMembersPage,
    loadEventsAudienceKidsPage,
    loadArtistPages
  ])
}