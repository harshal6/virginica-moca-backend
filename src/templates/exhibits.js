import React from 'react';
import { graphql, Link } from 'gatsby'

import Image from '../components/Image'
import Layout from '../components/Layout/'
import Navigation from '../components/Navigation/'
import Footer from '../components/Footer/'

const Exhibitions = ({ data }) => {
  
  const exhibits = data.exhibits.edges
  const page = data.page

  return (
    <Layout settings={page.settings} seo={page.seo} company={page.company}>
      <Navigation company={page.company} navigation={page.navigation} slug={"exhibitions"} />
      <div className="wrapper">
        <div className="exhibits">
  
          <section className="container px-md-0 module">
            <div className="row">
                <div className="col-sm-12">
                    <div className="headline">
                        <h2 className="headline-size-large">EXHIBITIONS</h2>
                        <span></span>
                    </div>
                </div>
            </div>
          </section>
  
          <section className="container px-md-0 module my-5 jump-links">
            <div className="row">
              <div className="col-md-7 d-flex justify-content-between">
                <a href="#current">CURRENT EXHIBITIONS</a>
                <a href="#upcoming">UPCOMING EXHIBITIONS</a>
                <a href="#past">PAST EXHIBITIONS</a>
              </div>
            </div>
          </section>
  
          <section id="current" className="container px-md-0 module mb-5">
            {exhibits.map(({node: exhibit}) => (
              exhibit.status === "current" && (
                exhibit.featured ? (
                  <div className="row mb-2" key={exhibit.id}>
                    <Image props={exhibit.photos} />
                    <h6>FEATURED</h6>
                    <Link to={`/exhibit/${exhibit.slug}`} title="View exhibit"><h3>{exhibit.mainTitle} {exhibit.subTitle}</h3></Link>
                    <p dangerouslySetInnerHTML={{ __html: exhibit.excerpt.childMarkdownRemark.html }} />
                    <h5>{exhibit.date.toUpperCase()}</h5>
                  </div>
                ):(
                  <div className="row mb-5" key={exhibit.id}>
                    <div className="col-md-5">
                      <Image props={exhibit.photos} />
                    </div>
                    <div className="col-md-7">
                      <Link to={`/exhibit/${exhibit.slug}`} title="View exhibit"><h3>{exhibit.mainTitle} {exhibit.subTitle}</h3></Link>
                      <p dangerouslySetInnerHTML={{ __html: exhibit.excerpt.childMarkdownRemark.html }} />
                      <h5><small>{exhibit.date.toUpperCase()}</small></h5>
                    </div>
                  </div>
                )
              )
            ))}
          </section>
  
          <section id="upcoming" className="container px-md-0 module mb-5">
            <div className="row">
              <div className="col-sm-12">
                <div className="headline">
                  <h5>UPCOMING EXHIBITIONS</h5>
                </div>
              </div>
            </div>
            {exhibits.map(({node: exhibit}) => (
              exhibit.status === "upcoming" && (
                <div className="row mb-5" key={exhibit.id}>
                  <div className="col-md-5">
                    <Image props={exhibit.photos} />
                  </div>
                  <div className="col-md-7">
                    <Link to={`/exhibit/${exhibit.slug}`} title="View exhibit"><h3>{exhibit.mainTitle} {exhibit.subTitle}</h3></Link>
                    <p dangerouslySetInnerHTML={{ __html: exhibit.excerpt.childMarkdownRemark.html }} />
                    <h5><small>{exhibit.date.toUpperCase()}</small></h5>
                  </div>
                </div>
              )
            ))}
          </section>
  
          <section id="past" className="container px-md-0 module mb-5">
            <div className="row">
              <div className="col-sm-12 ">
                <div className="headline">
                  <h5>PAST EXHIBITIONS</h5>
                </div>
              </div>
            </div>
            {exhibits.map(( {node: exhibit}) => (
              exhibit.status === "past" && (
                <div className="row mb-5" key={exhibit.id}>
                  {exhibit.mainTitle}
                </div>
                )
            ))}
          </section>
        </div>
      </div>
      <Footer company={page.company} footer={page.footer} />
    </Layout>
  )
}


export const query = graphql`
  {
    exhibits: allContentfulExhibition(
      sort: { fields: [date], order: DESC }
    ) {
      edges {
        node {
          id
          slug
          status
          featured
          mainTitle
          subTitle
          photos {
            alt
            file {
              description
              fluid(maxWidth: 1500) {
                ...GatsbyContentfulFluid_withWebp_noBase64
              }
            }
          }
          date
          hasAdmission
          admissionSecondary
          admissionFundedBy
          admissionLink {
            to
            title
            label
            icon {
              name
              icon
              isBrand
            }
          }
          excerpt {
            childMarkdownRemark {
              html
              plainText
            }
          }
        }
      }
    }
    page: contentfulPage(slug: { eq: "exhibitions" }) {
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

export default Exhibitions