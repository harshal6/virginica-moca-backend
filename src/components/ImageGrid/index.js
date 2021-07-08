import React from 'react'
import Img from 'gatsby-image'

import './styles.scss'

const ImageGrid = ({ props }) => {

  return (
    <div className="container image-grid">
      <div className="row">
        <div className="px-0 d-flex flex-column col-md-7 offset-md-5">
          {props.images.map(image => (
            <Img
              key={image.id}
              fluid={image.file.fluid}
              alt={image.file.alt}
              className="image"
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ImageGrid