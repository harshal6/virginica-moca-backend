// import React, { useState, useEffect } from 'react'
import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/Layout/'
import Navigation from '../components/Navigation/'
import Icon from '../components/Icon/'
import Image from '../components/Image/'
import Text from '../components/Text'
import Card from '../components/Card'
import ArtistExhibition from '../components/ArtistExhibition'
import Media from '../components/Media'
import Footer from '../components/Footer/'

const ArtistTemplate = ({ data }) => {
  const {
    slug,
    settings,
    seo,
    company,
    navigation,
    name,
    previousArtist,
    nextArtist,
    title,
    multimedia,
    caption,
    profile,
    interview,
    works,
    exhibition,
    footer
  } = data.contentfulArtist

  const nextIcon = {
    icon: 'chevron-right',
    isBrand: false,
    color: 'grey',
    size: 'xl'
  }

  const prevIcon = {
    icon: 'chevron-left',
    isBrand: false,
    color: 'grey',
    size: 'xl'
  }


  return (
    <Layout settings={settings} seo={seo} company={company}>
      <Navigation company={company} navigation={navigation} />
      <div className="wrapper">
        <section id="artist" className="container module px-md-0 mb-5">
          <div className="row">
            <div className="col-md-6">
              <h6>EXHIBITION ARTIST PROFILE</h6>
              <h1>{previousArtist && <Link to={`../${previousArtist.slug}`} title={`View ${previousArtist.name}`} className="mr-3"><Icon props={prevIcon}/></Link>}{name}</h1>
            </div>
            <div className="col-md-6 text-right">
              <h4>{title}{nextArtist && <Link to={`../${nextArtist.slug}`} title={`View ${nextArtist.name}`} className="ml-3"><Icon props={nextIcon}/></Link>}</h4>
            </div>
          </div>
        </section>

        {multimedia && (
          <section id="profile" className="container module px-md-0 mb-5">
            <div className="row">
              <Image props={multimedia} />
            </div>
          </section>
        )}

        {profile && (
          <section id="profile" className="container module px-md-0 mb-5">
            <div className="row px-md-0">
                <div className="col-12 px-md-0">
                    <div className="headline">
                        <h5>PROFILE</h5>
                    </div>
                </div>
            </div>
            <div className="row">
              <div className={`text d-flex flex-nowrap px-md-0 ${profile.layout === 'Half' && 'col-md-5'} ${profile.layout === 'Half' && 'col-md-7'} ${profile.layout === 'Split Push Right' && 'col-md-7 offset-md-5'}`}>
                <span className={`${profile.copySize === 'Large' && 'text-size-large'} ${profile.copySize === 'Extra Large' && 'text-size-xlarge'}`} dangerouslySetInnerHTML={{ __html: profile.copy.childMarkdownRemark.html }} />
                {profile.link &&  (
                  <Link to={profile.link.destination} title={profile.link.title}>{profile.link.label}</Link>
                )}
              </div>
            </div>
          </section>
        )}

        {interview && (
          <section id="interview" className="container module px-md-0 mb-5">
            <div className="row px-md-0">
                <div className="col-12 px-md-0">
                    <div className="headline">
                        <h5>INTERVIEW</h5>
                    </div>
                </div>
            </div>
            <div className="row">
              <div className="d-flex flex-column px-md-0 col-md-7 offset-md-5">
                <Media props={interview} />
                <p dangerouslySetInnerHTML={{ __html: interview.excerpt.childMarkdownRemark.html }} />
              </div>
            </div>
          </section>
        )}

        {works && (
          <section id="works" className="container module px-md-0 mb-5">
            <div className="row px-md-0">
                <div className="col-12 px-md-0">
                    <div className="headline">
                        <h5>WORKS</h5>
                    </div>
                </div>
            </div>
            <div className="row">
              <div className="d-flex flex-column px-md-0">
                <Card props={works} />
              </div>
            </div>
          </section>
        )}

        {exhibition && (
          <section id="exhibition" className="container module px-md-0 mb-5 artist-exhibition">
            <div className="row px-md-0">
              <div className="col-12 px-md-0">
                  <div className="headline">
                      <h5>EXHIBIT</h5>
                  </div>
              </div>
            </div>
            <ArtistExhibition props={exhibition} />
          </section>
        )}
      </div>
      <Footer company={company} footer={footer} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulArtist(slug: { eq: $slug }) {
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
      name
      previousArtist {
        name
        slug
      }
      nextArtist {
        name
        slug
      }
      title
      multimedia {
        alt
        file {
          description
          fluid(maxWidth: 1500) {
            ...GatsbyContentfulFluid_withWebp_noBase64
          }
        }
      }
      caption
      profile {
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
      interview {
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
      works {
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
      exhibition {
        name
        slug
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
        admissionSecondary
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
      }
    }
  }
`

export default ArtistTemplate