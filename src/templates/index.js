// import React, { useState, useEffect } from 'react'
import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/Layout/'
import Navigation from '../components/Navigation/'
import Module from '../components/Module/'
import Footer from '../components/Footer/'

const PageTemplate = ({ data }) => {
  const {
    slug,
    settings,
    seo,
    company,
    navigation,
    modules,
    footer
  } = data.contentfulPage

  return (
    <Layout settings={settings} seo={seo} company={company}>
      <Navigation company={company} navigation={navigation} slug={slug} />
      <div className="wrapper">
        {slug === "home" && (
          <section className="module home-intro">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <div className="headline">
                      <h2 className="headline-size-large">ART'S HERE FOR YOU</h2>
                  </div>
                </div>
              </div>
              <div className="text d-flex flex-nowrap flex-column align-items-start px-md-0 col-md-7 offset-md-5 col-lg-6 offset-lg-5 flex-column">
                <p>We’re excited to be open and share our next chapter with you—a refreshed look that celebrates what’s always mattered most to us. Connecting our community with exceptional contemporary art.<br /><Link to="/tickets" title="Visit us">PLAN YOUR VISIT</Link></p>
              </div>
            </div>
          </section>
        )}
        {modules && modules.map(mod => {
          return <Module key={mod.prop} module={mod} company={company} />
        })}
      </div>
      <Footer company={company} footer={footer} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
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
      modules {
        id
        type
        preHeadline
        headline
        headlineSize
        hasBracket
        viewLink {
          to
          title
          label
          icon {
            name
            icon
            isBrand
          }
        }
        noBottomMargin
        cards {
          id
          name
          title
          photo {
            alt
            file {
              description
              fluid(maxWidth: 500) {
                ...GatsbyContentfulFluid_withWebp_noBase64
              }
            }
          }
          headline
          date
          excerpt {
            childMarkdownRemark {
              html
              plainText
            }
          }
        }
        currentExhibition {
          slug
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
          writeUp {
            childMarkdownRemark {
              html
              plainText
            }
          }
        }
        images {
          id
          alt
          file {
            description
            fluid(maxWidth: 1000) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
        }
        text {
          id
          layout
          copySize
          copy {
            childMarkdownRemark {
              html
              plainText
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
        }
        sideBySide {
          copyOnLeft
          linksUnderImages
          images {
            id
            alt
            file {
              description
              fluid(maxWidth: 1500) {
                ...GatsbyContentfulFluid_withWebp_noBase64
              }
            }
          }
          text {
            id
            layout
            copySize
            copy {
              childMarkdownRemark {
                html
                plainText
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
          }
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
        accordion {
          items {
            name
            content {
              childMarkdownRemark {
                html
                plainText
              }
            }
          }
        }
        pricingCards {
          id
          title
          price
          identifier
          details {
            childMarkdownRemark {
              html
              plainText
            }
          }
          button {
            id
            style
            size
            destination
            title
            label
            type
            opensInNewTab
          }
        }
        subText {
          sections {
            id
            title
            copy  {
              childMarkdownRemark {
                html
                plainText
              }
            }
          }
        }
        imageGrid {
          images {
            id
            alt
            file {
              description
              fluid(maxWidth: 200) {
                ...GatsbyContentfulFluid_withWebp_noBase64
              }
            }
          }
        }
        multimedia {
          name
          excerpt {
            childMarkdownRemark {
              html
              plainText
            }
          }
          isVideo
          hostedUrl
        }
        twoColumn {
          splitPushRight
          leftColumnText {
            id
            layout
            copySize
            copy {
              childMarkdownRemark {
                html
                plainText
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
          }
          rightColumnText {
            id
            layout
            copySize
            copy {
              childMarkdownRemark {
                html
                plainText
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

export default PageTemplate