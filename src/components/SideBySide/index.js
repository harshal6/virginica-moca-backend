import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import Text from '../Text'

import './styles.scss'

const SideBySide = ({ props }) => { 

  return (
    props.map((item, i) => (
      <div key={i} className="row side-by-side">
        {item.copyOnLeft ? (
          <>
            <div className="col-md-5">
              {item.text && <Text className="mb-2" props={item.text} />}
              {!item.linksUnderImages && item.links && (
                item.links.map((link, i) => (
                  <Link key={i} to={link.to} title={link.title}>{link.label}</Link>
                ))
              )}
            </div>
            <div className="col-md-7">
              {item.images && item.images.map(image => (
                <Img
                  key={image.id}
                  fluid={image.file.fluid}
                  alt={image.file.alt}
                  className="mb-2"
                />
              ))}
              {item.linksUnderImages && item.links && (
                item.links.map((link, i) => (
                  <Link key={i} to={link.to} title={link.title}>{link.label}</Link>
                ))
              )}
            </div>
          </>
        ):(
          <>
            <div className="col-md-5">
              {item.images && item.images.map(image => (
                <Img
                  key={image.id}
                  fluid={image.file.fluid}
                  alt={image.file.alt}
                  className="mb-2"
                />
              ))}
              {item.linksUnderImages && item.links && (
                item.links.map((link, i) => (
                  <Link key={i} to={link.to} title={link.title}>{link.label}</Link>
                ))
              )}
            </div>
            <div className="col-md-7">
              {item.text && <Text className="mb-2" props={item.text} />}
              {!item.linksUnderImages && item.links && (
                item.links.map((link, i) => (
                  <Link key={i} to={link.to} title={link.title}>{link.label}</Link>
                ))
              )}
            </div>
          </>
        )}
      </div>
    ))
  )
}

export default SideBySide