import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import ticketImage from '../../images/ticket.png'


import './styles.scss'

const CurrentExhibition = ({ props }) => {

  return (
    <div className="current-exhibition px-0 pt-2">
      <div className="">
        {props.map((item, i) => (
          <div key={item.id} className="">
  
            <div className="image-wrapper">
              {item.photos && (
                item.photos.map((photo, i) => (
                  <>
                    <Img
                      key={i}
                      fluid={photo.file.fluid}
                      alt={photo.file.alt}
                      className="img-fluid"
                    />
                    {photo.file.description &&
                      <div className="px-md-0">
                        <p className="caption">{photo.file.description}</p>
                      </div>
                    }
                  </>
                ))
              )}
            </div>
            <div className="row mt-5">
              <div className="col-md-5">
                <h3 className="h6 text-uppercase border-bottom border-5 border-dark pb-1">{item.date}</h3>
                <h2 className="name text-uppercase pt-1">{item.mainTitle} {item.subTitle}s</h2>
                {item.hasAdmission && (
                  <div className="d-flex align-items-end">
                      <div className="d-flex align-items-start ticket-image-wrapper">
                         <img src={ticketImage} alt="ticket icon" className="img-fluid" />
                      </div>
                      <div className="admission-link">
                          <Link  to={item.admissionLink.to} title={item.admissionLink.title}>{item.admissionLink.label}</Link>
                          <p className="pb-0 mb-0 link-sub">{item.admissionFundedBy}</p>
                      </div>
                  </div>
                )}
              </div>
              <div className="col-md-7 border-start border-9 border-dark px-4 my-4 my-md-0">
                <p className=""><span dangerouslySetInnerHTML={{ __html: item.excerpt.childMarkdownRemark.html }} /><Link to={`exhibit/${item.slug}`} title="Learn More">Learn More</Link></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CurrentExhibition