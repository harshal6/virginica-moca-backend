// import React, { useState, useEffect } from 'react'
import React from 'react'
import ReactDOM from 'react-dom'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import ReactAudioPlayer from 'react-audio-player';
import Player from 'react-soundcloud-widget-player'
import ReactPlayer from 'react-player/soundcloud'



import Button from '../components/Button/'
import Card from '../components/Card/'
import Layout from '../components/Layout/'
import Navigation from '../components/Navigation/'
import Icon from '../components/Icon/'
import Image from '../components/Image/'
import Media from '../components/Media/'
import Footer from '../components/Footer/'
// import { map } from 'lodash'

const ExhibitTemplate = ({ data }) => {
  const {
    slug,
    settings,
    seo,
    company,
    navigation,
    featured,
    mainTitle,
    subTitle,
    photos,
    hasAdmission,
    admissionSecondary,
    admissionFundedBy,
    admissionLink,
    writeUp,
    hasArtists,
    artistsTitleLarge,
    artists,
    hasCatalog,
    catalogTitleLarge,
    catalog,
    hasEvents,
    eventsTitleLarge,
    events,
    hasAudio,
    audioTitleLarge,
    audio,
    hasVideo,
    videoTitleLarge,
    videoHeadline,
    videoAuthor,
    videoAuthorTitle,
    videos,
    hasPress,
    pressTitleLarge,
    pressLinks,
    hasSponsors,
    sponsorsTitleLarge,
    sponsorsDetails,
    footer
  } = data.contentfulExhibition

  console.log('audio', audio);

  const ticketIcon = {
    icon: 'ticket-alt',
    isBrand: false,
    size: '2x'
  }

  return (
    <Layout settings={settings} seo={seo} company={company}>
      <Navigation company={company} navigation={navigation} slug="exhibitions" />
      <div className="wrapper">
        <div className="exhibit">
          <section className="container module px-md-0 mb-5">

            <div className="row">
              <div className="col-sm-12">
              {featured && <h6 className="pre-headline">FEATURED EXHIBITION</h6>}
                <div className="headline">
                <h3>{mainTitle.toUpperCase()}</h3>
                <h4>{subTitle && subTitle.toUpperCase()}</h4>
                <span></span>
                </div>
              </div>
            </div>

            <div className="row mb-4">
              <Image props={photos} />
            </div>
            <div className="row">
              {hasAdmission && (
                <div className="col-md-5 has-admission">
                  {admissionSecondary && <h5><small>{admissionSecondary.toUpperCase()}</small></h5>}
                  <div className="d-flex align-items-end py-3 border-top border-bottom border-2 border-dark">
                    <div className="d-flex align-items-start" style={{transform: "rotate(-90deg)"}}>
                      <Icon props={ticketIcon} />
                    </div>
                    <div>
                      {admissionLink && admissionLink.to && <Link to={admissionLink.to} title={admissionLink.title}>{admissionLink.label}</Link>}
                      {admissionFundedBy && <p className="pb-0 mb-0"><small>{admissionFundedBy}</small></p>}
                    </div>
                  </div>
                </div>
              )}
              <div className="col-md-7">
                <p dangerouslySetInnerHTML={{ __html: writeUp.childMarkdownRemark.html }} />
              </div>
            </div>
          </section>
          {hasArtists && artists && (
            <section id="artists" className="container module mb-5 artists">
              <div className="row px-md-0">
                  <div className="col-12 px-md-0">
                      <div className="headline">
                          {artistsTitleLarge ? <h2>ARTISTS</h2> : <h5>ARTISTS</h5>}
                          <span></span>
                      </div>
                  </div>
              </div>
              <div className="row">
                <div className="col-md-7 offset-md-5">
                  {artists && artists.map((artist, i) => (
                    <Link key={artist.id} to={`/artist/${artist.slug}`}>{artist.name}</Link>
                  ))}
                </div>
              </div>
            </section>
          )}
          {hasCatalog && (
            <section id="catalog" className="container module mb-5 catalog">
              <div className="row px-md-0">
                  <div className="col-12 px-md-0">
                      <div className="headline">
                          {catalogTitleLarge ? <h2>CATALOG</h2> : <h5>CATALOG</h5>}
                          <span></span>
                      </div>
                  </div>
              </div>
              <div className="row">
                <div className="col-md-7 offset-md-5">
                  <div className="d-flex justify-content-center">
                    <Img
                      fluid={catalog.image.file.fluid}
                      alt={catalog.image.file.alt}
                      className="catalog-image"
                    />
                    <div>
                      <p><b>{catalog.title}</b><br /></p>
                      <p dangerouslySetInnerHTML={{ __html: catalog.excerpt.childMarkdownRemark.html }} />
                      <Button props={catalog.link} />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
          {hasEvents && events && (
            <section id="events" className="container module mb-5">
              <div className="row px-md-0">
                  <div className="col-12 px-md-0">
                      <div className="headline">
                          {eventsTitleLarge ? <h2>EVENTS</h2> : <h5>EVENTS</h5>}
                          <span></span>
                      </div>
                  </div>
              </div>
              <div className="row">
                {events && <Card props={events} />}
              </div>
            </section>
          )}
          {hasAudio && (
            <section id="audio" className="container module mb-5">
              <div className="row px-md-0">
                  <div className="col-12 px-md-0">
                      <div className="headline">
                          {audioTitleLarge ? <h2>AUDIO</h2> : <h5>AUDIO</h5>}
                      </div>
                  </div>
              </div>
              <div className="row">
                <div className="col-md-7 offset-md-5">
                  <div className='player-wrapper'>
                    <ReactPlayer
                      className='react-player'
                      url={audio.hostedUrl}
                      width='100%'
                      height='100%'
                    />
                  </div>
                 {/* <ReactAudioPlayer
                    src={audio.hostedUrl}
                    autoPlay
                    controls
                  /> */}
                  
                </div>
              </div>
            </section>
          )}
          {hasVideo && (
            <section id="video" className="container module mb-5 videos">
              <div className="row px-md-0">
                  <div className="col-12 px-md-0">
                      <div className="headline">
                          {videoTitleLarge ? <h2>VIDEOS</h2> : <h5>VIDEOS</h5>}
                      </div>
                  </div>
              </div>
              <div className="row px-md-0">
                <div className="col-md-5 pl-0">
                  <h3 className="text-size-large">{videoHeadline}</h3>
                  <p><b>{videoAuthor}</b><br />{videoAuthorTitle}</p>
                </div>
                <div className="col-md-7 pr-0">
                  {videos.map((video, i) => (
                    <Media key={i} props={video} />
                  ))}
                </div>
              </div>
            </section>
          )}
          {hasPress && (
            <section id="press" className="container module mb-5">
              <div className="row px-md-0">
                  <div className="col-12 px-md-0">
                      <div className="headline">
                          {pressTitleLarge ? <h2>PRESS</h2> : <h5>PRESS</h5>}
                      </div>
                  </div>
              </div>
              <div className="row">
                press
              </div>
            </section>
          )}
          {hasSponsors && (
            <section id="sponsors" className="container module mb-5">
              <div className="row px-md-0">
                  <div className="col-12 px-md-0">
                      <div className="headline">
                          {sponsorsTitleLarge ? <h2>EXHIBIT SPONSORS</h2> : <h5>EXHIBIT SPONSORS</h5>}
                      </div>
                  </div>
              </div>
              <div className="row">
                press
              </div>
            </section>
          )}
        </div>
      </div>
      <Footer company={company} footer={footer} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulExhibition(slug: { eq: $slug }) {
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
      writeUp {
        childMarkdownRemark {
          html
          plainText
        }
      }
      hasArtists
      artistsTitleLarge
      artists {
        id
        name
        slug
      }
      hasCatalog
      catalogTitleLarge
      catalog {
        image {
          alt
          file {
            description
            fluid(maxWidth: 500) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
        }
        title
        authorText
        excerpt {
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
      hasEvents
      eventsTitleLarge
      events {
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
      hasAudio
      audioTitleLarge
      audioDetails {
        childMarkdownRemark {
          html
          plainText
        }
      }
      audio {
        id
        name
        excerpt {
          childMarkdownRemark {
            html
            plainText
          }
        }
        isVideo
        hostedUrl
        file {
          description
        }
      }
      hasVideo
      videoTitleLarge
      videoHeadline
      videoAuthor
      videoAuthorTitle
      videos {
        id
        name
        excerpt {
          childMarkdownRemark {
            html
            plainText
          }
        }
        isVideo
        hostedUrl
        file {
          description
        }
      }
      hasPress
      pressTitleLarge
      pressLinks {
        to
        title
        label
        icon {
          name
          icon
          isBrand
        }
      }
      hasSponsors
      sponsorsTitleLarge
      sponsorsDetails {
        childMarkdownRemark {
          html
          plainText
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

export default ExhibitTemplate