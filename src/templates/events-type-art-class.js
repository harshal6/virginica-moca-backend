import React from 'react';
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/Layout'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const ArtClassEvents = ({ data }) => {

  const events = data.events.edges
  const page = data.page

  return (
    <Layout settings={page.settings} seo={page.seo} company={page.company}>
      <Navigation company={page.company} navigation={page.navigation} slug="events" />
      <div className="wrapper">
        <div className="events">
  
          <section className="container module">
            <div className="row px-0">
                <div className="col-12 px-0">
                  <h6 className="mb-0">EVENTS</h6>
                  <div className="headline">
                      <h2>ART CLASS</h2>
                      <span></span>
                  </div>
                </div>
            </div>
          </section>
  
          <section className="container">
            {!events ? <h6>There are currently no Art Class events</h6> : (
              events.map(( {node: event}) => (
                event.type === "Art Class" && (
                  <div className="row mb-5" key={event.id}>
                    <div className="col-md-2"><h5>{event.date}</h5></div>
                    <div className="col-md-4">
                      <Img
                        key={event.photo.id}
                        fluid={event.photo.file.fluid}
                        alt={event.photo.file.alt}
                        className=""
                      />
                    </div>
                    <div className="col-md-6">
                      <Link to={`/event/${event.slug}`} title="View event" className="event-title"><h5>{event.title}</h5></Link>
                      <p dangerouslySetInnerHTML={{ __html: event.description.copy.childMarkdownRemark.excerpt }} />
                      <p>
                        {!event.endDate && (
                          <span>{event.days}, {event.startDate}<br />
                            {event.startTime && event.endTime && `${event.startTime}-${event.endTime}`}
                            {!event.endTime && `${event.startTime}`}
                            {event.endTime && `${event.startTime}-${event.startTime}`}</span>
                        )}
                        {event.startDate && event.endDate && (
                          <span>{event.startDate} - {event.endDate}<br />{event.days} {event.startTime && event.endTime && `${event.startTime}-${event.endTime}`}</span>
                        )}
                        <span><br />{event.location}</span>
                      </p>
                      <p>{event.type.toUpperCase()}</p>
                    </div>
                  </div>
                )
              ))
            )}
            
          </section>
        </div>
      </div>
      <Footer company={page.company} footer={page.footer} />
    </Layout>
  )
}


export const query = graphql`
  {
    events: allContentfulEvent(
      sort: { fields: [date], order: DESC }
    ) {
      edges {
        node {
          id
          slug
          title
          isFeatured
          type
          date(formatString: "MMM DD")
          startDate
          endDate
          days
          startTime
          endTime
          location
          photo {
            alt
            file {
              description
              fluid(maxWidth: 1500) {
                ...GatsbyContentfulFluid_withWebp_noBase64
              }
            }
          }
          description {
            layout
            copySize
            copy {
              childMarkdownRemark {
                html
                plainText
                excerpt(pruneLength: 200)
              }
            }
          }
        }
      }
    }
    page: contentfulPage(slug: { eq: "events/type/art-class" }) {
      name
      slug
      settings {
        name
      }
      seo {
        pageTitle
        description
        keywords
        canonical
        robots
        twitterCard
        twitterSite
        twitterTitle
        twitterDescription
        twitterCreator
        twitterImage {
          file {
            fluid {
              src
            }
          }
          alt
        }
        ogTitle
        ogUrl
        ogImage {
          file {
            fluid {
              src
            }
          }
          alt
        }
        ogImageWidth
        ogImageHeight
        ogDescription
        ogSiteName
      }
      company {
        name
        address {
          childMarkdownRemark {
            html
            plainText
          }
        }
        phone
        email
        socialProfiles {
          to
          title
          label
          icon {
            name
            icon
            isBrand
          }
        }
        googleMapApiKey
      }
      navigation {
        logo {
          alt
          file {
            description
            fluid(maxWidth: 500) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
        }
        buttons {
          id
          style
          size
          destination
          title
          label
          type
          opensInNewTab
        }
        sections {
          id
          group
           image {
             alt
             file {
               description
               fluid(maxWidth: 500) {
                 ...GatsbyContentfulFluid_withWebp_noBase64
               }
             }
           }
           link {
             to
             title
             label
             icon {
               name
               icon
               isBrand
             }
           }
           title
           copy
          links {
            to
            title
            label
            icon {
              name
              icon
              isBrand
            }
          }
        }
      }
      footer {
        logo {
          alt
          file {
            description
            fluid(maxWidth: 500) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
        }
        copyright
        slogan
        emailTitle
        socialTitle
        links {
          to
          title
          label
          icon {
            name
            icon
            isBrand
          }
        }
      }
    }
  }
`

export default ArtClassEvents