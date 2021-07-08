import React, { useState } from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import Button from '../Button'
import Icon from '../Icon'
import { Navbar, Nav } from 'react-bootstrap';

// import NavigationLogo from '../../images/svgs/VMOCA_Logo_Navigation.svg'

import './styles.scss'

const Navigation = ({ company, settings, navigation }) => {
  const [active, setActive] = useState(false);
  const [activeGroup, setActiveGroup] = useState("");

  const handleActiveGroup = (group) => {
    if (group === activeGroup) {
      setActive(false)
      setActiveGroup("")
    } else {
      setActive(true)
      setActiveGroup(group)
    }
  }

  const {
    logo,
    buttons,
    sections
  } = navigation

  const searchIcon = {
    icon: 'search',
    color: 'black',
    isBrand: false
  }


  return (
    <header>
      <div className={`container navigation ${active && 'active'} ${activeGroup}`}>
        <Navbar expand="lg">
          <div className="col-lg-4 d-flex pl-0">
            <div className="logo">
              <Link to="/">
                <Img
                  fluid={logo.file.fluid}
                  alt={logo.file.alt}
                  className="logo-image"
                />
                <span className="logotype">{name}</span>
              </Link>
            </div>
            {sections.map(section => (
              <div key={section.id} className={`group-content ${activeGroup === section.group && 'active'}`}>
                <div className="row">
                  <div className="col-6">
                    {section.image && (
                      <Img
                        fluid={section.image.file.fluid}
                        alt={section.image.file.alt}
                        className="image"
                      />
                    )(
                      <div className="logo inner">
                        <Link to="/">
                          <Img
                            fluid={logo.file.fluid}
                            alt={logo.file.alt}
                            className=""
                          />
                        </Link>
                      </div>
                    )}
                  </div>
                  <div className="col-6 align-self-center">
                    <div className="featuredContent">
                      {section.link && <Link to={section.link.to}>{section.link.title}</Link>}
                      <h6>{section.title}</h6>
                      {section.copy && <h6>{section.copy}</h6>}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={`col-lg-8 pr-0 d-flex flex-column right-column ${active && 'active'}`}>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
              <div className="menu-icon">
                <div className="menu-bar"></div>
                <div className="menu-bar"></div>
                <div className="menu-bar"></div>
              </div>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="">
                {sections.map(section => {
                  let activated;
                  if (section.group === "visit") {
                    if (slug === "tickets-directions-and-safety-plans") {
                      activated = "activated"
                    }
                  }

                  if (section.group === "exhibitions") {
                    if (slug === "exhibitions") {
                      activated = "activated"
                    }
                  }

                  if (section.group === "events") {
                    if (slug === "events" || slug === "courses") {
                      activated = "activated"
                    }
                  }

                  if (section.group === "learn") {
                    if (slug === "learning-resources" || slug === "public-programs" || slug === "studio-school" || slug === "artlab" || slug === "education-programs") {
                      activated = "activated"
                    }
                  }

                  if (section.group === "about") {
                    if (slug === "mission-and-beliefs" || slug === "host-event-with-us" || slug === "trustees-and-staff" || slug === "event-spaces" || slug === "financial-information" || slug === "press" || slug === "careers") {
                      activated = "activated"
                    }
                  }

                  if (section.group === "Join / Give") {
                    if (slug === "memberships" || slug === "leadership-giving" || slug === "donations" || slug === "planned-giving" || slug === "corporate-sponsorships" || slug === "stock-transfers") {
                      activated = "activated"
                    }
                  }

                  return <div key={section.id} className="group-container">
                    <Nav.Link className="" onClick={() => handleActiveGroup(section.group)}>
                      <span className={`group-title ${activated}`} tabIndex="0" >{section.group}</span>
                    </Nav.Link>
                    <div className={`group ${activeGroup === section.group && 'active'}`}>
                      <a href="#" className="close-menu" title="close menu" onClick={() => handleActiveGroup(section.group)}>X</a>
                      <div className="row px-0">
                        {section.links && section.links.map(link => (
                          <div key={link.id} className="col-lg-6"><Link to={link.to} title={link.title}>{link.label.toUpperCase()}</Link></div>
                        ))}
                      </div>
                    </div>
                  </div>
                })}

                <span className="mobile-divider"></span>
                <Nav.Link className="search-button">
                  <span onClick={() => handleActiveGroup('search')} className="px-2"><Icon props={searchIcon} /></span>
                </Nav.Link>
                {buttons.map(btn => (
                  <Nav.Link key={btn.id} className="is-btn">
                    <Button className="btn" key={btn.id} props={btn} />
                  </Nav.Link>
                ))}
              </Nav>
              <div className={`group-content search ${activeGroup === 'search' && 'active'}`}>
                <div className="input-group">
                  <span className="input-group-text"><Icon props={searchIcon} /></span>
                  <input type="text" placeholder="Search" className="form-control" required aria-describedby="addon1" />
                  <span id="addon1" className="input-group-text" onClick={() => handleActiveGroup('search')}>X</span>
                </div>
              </div>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </div>
    </header>
  )
}

export default Navigation
