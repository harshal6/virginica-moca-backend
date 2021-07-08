import React from 'react'
import Img from 'gatsby-image'

import './styles.scss'

const Card = ({ props }) => {

  return (
    <div className="cards d-flex justify-content-between row">
      {props && props.map((item, i) => (
        <div className="col-sm-4" key={item.id} >
          <div className={`card card-${props.length}`}>
            <h5 className="label">{item.title}</h5>
            {item.photo && (
              <Img
                fluid={item.photo.file.fluid}
                alt={item.photo.file.alt}
                className="card-img-top"
              />
            )}
            <div className="card-body px-0">
                <h4 className="title">{item.headline}</h4>
                <h5 className="subtitle">{item.date}</h5>
                {item.excerpt && <p dangerouslySetInnerHTML={{ __html: item.excerpt.childMarkdownRemark.html }} />}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Card