import React from 'react'
import Img from 'gatsby-image'
import { Link } from 'gatsby'

import './styles.scss'

const ArtistSpotlight = ({ props }) => {

  return (
    <Link to={`../artist/${props.slug}`} title="View Artist">
      <Img
        fluid={props.photo.file.fluid}
        alt={props.photo.file.alt}
        className="artist-spotlight-photo"
      />
      <div className="artist-spotlight-content col-md-5 p-5">
        <h5>ARTIST SPOTLIGHT</h5>
        <h3>{props.name} </h3>
        <p>{props.excerpt}</p>
        <Link to={`../artist/${props.slug}`} title="View Artist">Learn more</Link>
      </div>
    </Link>
  )
}

export default ArtistSpotlight