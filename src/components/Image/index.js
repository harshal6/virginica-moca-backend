import React, { useState } from 'react'
import Img from 'gatsby-image'
import Carousel from 'react-bootstrap/Carousel';
// import 'bootstrap/dist/css/bootstrap.min.css';

import './styles.scss'

const Image = ({ props }) => {

  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (

    <div className="image">
      {props && props.length === 1 ? (
        <>
          <Img
            key={props[0].id}
            fluid={props[0].file.fluid}
            alt={props[0].file.alt}
            className=""
          />
          {props[0].file.description && <div className="caption-wrapper"><p className="caption">{props[0].file.description}</p></div>}
        </>
      ) : (
        <>
          <Carousel activeIndex={index} onSelect={handleSelect} fade>
            {props && props.map(image => (
              <Carousel.Item key={image.id}>
                <img src={image.file.fluid.src} alt={image.alt} className="d-block w-100" />
                {image.file.description && <Carousel.Caption className=""><p className="caption">{image.file.description}</p></Carousel.Caption>}
              </Carousel.Item>
            ))}
          </Carousel>

        </>
      )}
    </div>
  )
}

export default Image