// import React, { useState, useEffect } from 'react'
import React from 'react'
import { graphql, Link, navigate } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/Layout/'
import Navigation from '../components/Navigation/'
import ArtistExhibition from '../components/ArtistExhibition/'
import ArtistSpotlight from '../components/ArtistSpotlight/'
import Button from '../components/Button/'
import Card from '../components/Card/'
import Icon from '../components/Icon/'
import Footer from '../components/Footer/'

import './styles.scss'

const ExhibitTemplate = ({ data }) => {
  const {
    slug,
    settings,
    seo,
    company,
    navigation,
    title,
    type,
    date,
    startDate,
    endDate,
    days,
    startTime,
    endTime,
    location,
    photo,
    description,
    rsvpLink,
    exhibition,
    neonCrmId,
    nonMembersFee,
    membersFee,
    promotion,
    spotlight,
    related,
    footer
  } = data.contentfulEvent

  const rsvpButtonProps = {
    style: "",
    size: "",
    destination: rsvpLink,
    title: "RSVP Required",
    label: "RSVP Required",
    type: "",
    opensInNewTab: true
  }

  const signUpPayProps = {
    style: "",
    size: "",
    destination: "",
    title: "Sign Up & Pay",
    label: "Sign Up & Pay",
    type: "",
    opensInNewTab: false
  }


  const logInPayProps = {
    style: "",
    size: "",
    destination: "",
    title: "Log In & Pay",
    label: "Log In & Pay",
    type: "",
    opensInNewTab: false
  }

  const handleSignup = () => {
    navigate('/createanaccount', { data: data })
  }

  return (
    <Layout settings={settings} seo={seo} company={company}>
      <Navigation company={company} navigation={navigation} slug="events" />
      <div className="wrapper event">
        <section className="container module event-title">
          <div className="row px-0">
            <h6 className="mb-0 px-0">EVENTS</h6>
            <div className="headline px-0">
              <h2>{type && type.toUpperCase()}</h2>
              <span></span>
            </div>
          </div>
        </section>

        {photo && (
          <section id="photo" className="container module mb-5">
            <div className="row">
              <Img
                key={photo.id}
                fluid={photo.file.fluid}
                alt={photo.file.alt}
                className=""
              />
            </div>
          </section>
        )}

        <section className="container module mb-5 px-0 event-title">
          <div className="row">
            <div className="col-md-5">
              <h5 className="border-bottom border-dark border-2">{title.toUpperCase()}</h5>
              <p><strong>Instructor: {spotlight && spotlight.name}</strong></p>
              <p>
                {!endDate && (
                  <span>{days}, {startDate}<br />
                    {startTime && endTime && `${startTime}-${endTime}`}
                    {!endTime && `${startTime}`}
                    {endTime && `${startTime}-${startTime}`}</span>

                )}
                {startDate && endDate && (
                  <span>{startDate} - {endDate}<br />{days} {startTime && endTime && `${startTime}-${endTime}`}</span>
                )}
                <span><br />{location}</span>
              </p>
              {location && <Link to={`https://www.google.com/maps/place/${location.toLowerCase().split(' ').join('+')}`} target="_blank" rel="noreferrer">Directions</Link>}
              {rsvpLink && <div className="col-md-4 d-flex justify-content-end px-0"><Button props={rsvpButtonProps} /></div>}
            </div>
            <div className="col-md-7">
              {description && <span dangerouslySetInnerHTML={{ __html: description.copy.childMarkdownRemark.html }} />}

              {neonCrmId && (
                <>
                  <div className="row d-flex align-items-end mb-5">
                    <h5>Members: ${membersFee}</h5>
                    <div className="col-4">
                      <label>Number of attendees:</label>
                      <select name="" className="form-select">
                        <option value=""></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                      </select>
                    </div>
                    <div className="col-8">
                      <Button props={signUpPayProps} />
                    </div>
                  </div>

                  <div className="row d-flex align-items-end">
                    <h5>Non-Members: ${nonMembersFee}</h5>
                    <div className="col-4">
                      <label>Number of attendees:</label>
                      <select name="" className="form-select">
                        <option value=""></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                      </select>
                    </div>
                    <div className="col-8">
                      <Button props={logInPayProps} />
                    </div>
                  </div>
                </>
              )}

              {promotion && <p className="mt-5">{promotion}</p>}
            </div>
          </div>
        </section>

        {spotlight && (
          <section id="spotlight" className="container module mb-5 artist-spotlight">
            <div className="row px-0">
              <div className="col-12 px-0">
                <div className="headline">
                  <h2>ARTIST SPOTLIGHT</h2>
                  <span></span>
                </div>
              </div>
            </div>
            {spotlight.multimedia && (
              <div className="row">
                <Img
                  fluid={spotlight.multimedia[0].file.fluid}
                  alt={spotlight.multimedia[0].file.alt}
                  className=""
                />
              </div>
            )}
            <div className="row">
              <div className="col-12 px-0">
                <div className="headline">
                  <h5>{spotlight.name}</h5>
                </div>
              </div>
              <p className="px-0">{spotlight.excerpt}</p>
            </div>
          </section>
        )}

        {exhibition && (
          <section id="exhibition" className="container module mb-5 artist-exhibition">
            {/* <ArtistExhibition props={exhibition} /> */}
            <div className="col-12">
              <div className="headline">
                <h5>EXHIBITION</h5>
              </div>
            </div>
            <p className="row">
              <div className="col-md-5">
                <Img
                  fluid={exhibition.photos[0].file.fluid}
                  alt={exhibition.photos[0].file.alt}
                  className=""
                />
              </div>
              <div className="col-md-7">
                <h3>{exhibition.mainTitle} {exhibition.subTitle}</h3>
                <p>7 vital artists of our time explore personal identity combining visual media and the power of words</p>
                <h4>{exhibition.date.toUpperCase()}</h4>
                <p>{exhibition.admissionSecondary.toUpperCase()}</p>
              </div>
            </p>
          </section>
        )}

        {related && (
          <section id="related" className="container module mb-5 px-0 related">
            <div className="row">
              <div className="col-12">
                <div className="headline">
                  <h2>RELATED CLASSES</h2>
                  <span></span>
                </div>
              </div>
            </div>
            <Card props={related} />
          </section>
        )}
      </div>
      <Footer company={company} footer={footer} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulEvent(slug: { eq: $slug }) {
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
      title
      type
      date
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
      rsvpLink
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
      neonCrmId
      nonMembersFee
      membersFee
      promotion
      spotlight {
        slug
        name
        excerpt
        multimedia {
          alt
          file {
            description
            fluid(maxWidth: 1500) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
        }
      }
      related {
        id
        name
        title
        photo {
          alt
          file {
            description
            fluid(maxWidth: 1000) {
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