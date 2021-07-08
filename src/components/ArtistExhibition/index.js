import React from 'react'
import Img from 'gatsby-image'
import { Link } from 'gatsby'

import './styles.scss'

const ArtistExhibition = ({ props }) => {

  return (
    <div className="row px-0 artist-exhibit">
      <div className="col-md-5 px-0">
        <Img
          fluid={props.photos[0].file.fluid}
          alt={props.photos[0].file.alt}
          className="artist-exhibition-photo"
        />
      </div>
      <div className="col-md-7">

        <h3>{props.mainTitle} {props.subTitle}</h3>
        <p>7 vital artists of our time explore personal identity combining visual media and the power of words</p>
        <h6>{props.date.toUpperCase()}</h6>
        <p>{props.admissionSecondary.toUpperCase()}</p>
        <Link to={`/exhibit/${props.slug}`} title="View Exhibit">VIEW EXHIBIT</Link>
      </div>
    </div>
  )
}

export default ArtistExhibition