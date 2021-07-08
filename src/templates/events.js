import React, { useState } from 'react';
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import Icon from '../components/Icon'
import Layout from '../components/Layout/'
import Navigation from '../components/Navigation/'
import Footer from '../components/Footer/'

const Events = ({ data }) => {

  const [value, setValue] = useState(new Date());
  const [open, setOpen] = useState(false);

  const onChange = (nextValue) => {
    setValue(nextValue);
  }

  const onOpen = () => {
    setOpen(!open)
  }

  const events = data.events.edges
  const page = data.page

  const chevronRightIcon = {
    icon: 'chevron-right',
    color: 'black',
    isBrand: false
  }

  return (
    <Layout settings={page.settings} seo={page.seo} company={page.company}>
      <Navigation company={page.company} navigation={page.navigation} slug="events" />
      <div className="wrapper">
        <div className="events">
  
          <section className="container module">
            <div className="row px-0">
                <div className="col-12 px-0">
                    <div className="headline">
                        <h2>EVENTS</h2>
                        <span></span>
                    </div>
                </div>
            </div>
            <div className="col-md-7 offset-md-5 px-0">
              <p className="text-size-large">Our Education and Exhibitions team loves to make your experience even better by offering unique Museum experiences (currently all online). From interactive talks with artists, to at home making activities, there are events for all ages, interests, and artistic experience. If you are interested in taking a class or workshop with us, check out the <Link to="/studio-school">Studio School here</Link>.</p>
            </div>
          </section>

          <section className="container module mb-5">
            <div className="col-md-7 offset-md-5 px-0">
              <div className="form-group d-flex my-5">
                <input type="text" className="form-control" placeHolder="SEARCH EVENTS" required="required" />
                <input type="submit" className="btn" value="Search" />
              </div>
            </div>
          </section>

          <section className="container module mb-5 events-types-audiences">
            <div className="row px-0">
                <div className="col-12 px-0">
                    <div className="headline">
                        <h5>EVENT TYPES</h5>
                    </div>
                </div>
            </div>
            <div className="row">
              <div className="col-md-7 offset-md-5">
                <p><Link to="/events/type/lecture-panel">Lecture/Panel</Link></p>
                <p><Link to="/events/type/film">Film</Link></p>
                <p><Link to="/events/type/exhibition">Exhibition</Link></p>
                <p><Link to="/events/type/art-class">Art Class</Link></p>
                <p><Link to="/events/type/tour">Tour</Link></p>
                <p><Link to="/events/type/outdoor">Outdoor</Link></p>
              </div>
            </div>
          </section>

          <section className="container module mb-5 events-types-audiences">
            <div className="row px-0">
                <div className="col-12 px-0">
                    <div className="headline">
                        <h5>AUDIENCES</h5>
                    </div>
                </div>
            </div>
            <div className="row">
              <div className="col-md-7 offset-md-5">
                <p><Link to="/events/audience/members">Members</Link></p>
                <p><Link to="/events/audience/families">Families</Link></p>
                <p><Link to="/events/audience/artists">Artists</Link></p>
                <p><Link to="/events/audience/teachers">Teachers</Link></p>
                <p><Link to="/events/audience/kids">Kids</Link></p>
                <p><Link to="/events/audience/teens">Teens</Link></p>
              </div>
            </div>
          </section>

          <section className="container featured-event">
            <div className="row mb-1">
              <div className="col-md-1 px-0"><h5>TODAY.</h5></div>
              <div className="col-md-4 px-4">
                <h6 className="mb-0" onClick={() => onOpen()}>{new Date().toLocaleString('default', { month: 'long' }).toUpperCase()} {new Date().getDate()} & ONWARD <Icon props={chevronRightIcon} /></h6>
                {open && (
                  <Calendar
                    onChange={onChange}
                    value={value}
                    calendarType="Arabic"
                    className="calendar"
                  />
                )}
              </div>
              <div className="col-md-7 px-0"></div>
            </div>
          </section>

          <section className="container featured-event">
            {events.map(( {node: event}) => (
              event.isFeatured && (
                <div className="row mb-5 py-3" key={event.id}>
                  <div className="col-md-1 px-0"><h5>{event.date}</h5></div>
                  <div className="col-md-4 px-4">
                    {event.photo && (
                      <Img
                        key={event.photo.id}
                        fluid={event.photo.file.fluid}
                        alt={event.photo.file.alt}
                        className=""
                      />
                    )}
                  </div>
                  <div className="col-md-7 px-0">
                    <h6><u>FEATURED EVENT</u></h6>
                    <Link to={`/event/${event.slug}`} title="View event" className="event-title"><h5>{event.title}</h5></Link>
                    {event.description && <p dangerouslySetInnerHTML={{ __html: event.description.copy.childMarkdownRemark.excerpt }} />}
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
                    <p><Link to={`/event/${event.slug}`} title="Learn more" className="learn-more">LEARN MORE</Link></p>
                  </div>
                </div>
              )
            ))}
          </section>
  
          <section className="container">
            {events.map(( {node: event}) => (
              <div className="row mb-5 event-row py-3" key={event.id}>
                <div className="col-md-1 px-0"><h5>{event.date}</h5></div>
                <div className="col-md-4 px-4">
                  {event.photo && (
                    <Img
                      key={event.photo.id}
                      fluid={event.photo.file.fluid}
                      alt={event.photo.file.alt}
                      className=""
                    />
                  )}
                </div>
                <div className="col-md-7 px-0">
                  <Link to={`/event/${event.slug}`} title="View event" className="event-title"><h5>{event.title}</h5></Link>
                  {event.description && <p dangerouslySetInnerHTML={{ __html: event.description.copy.childMarkdownRemark.excerpt }} />}
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
                  <p>{event.type && event.type.toUpperCase()}</p>
                  <p><Link to={`/event/${event.slug}`} title="Learn more" className="learn-more">LEARN MORE</Link></p>
                </div>
              </div>
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
    page: contentfulPage(slug: { eq: "events" }) {
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

export default Events