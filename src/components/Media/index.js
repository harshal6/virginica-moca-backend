import React from 'react'
import Img from 'gatsby-image'
import ReactPlayer from 'react-player/lazy'

import './styles.scss'

const Media = ({ props }) => {

  let config = {}
  if (props.hostedUrl !== "") {
    config = {
      youtube: {
        playerVars: {
          showInfo: 0,
          showControls: 0,
          modestBranding: 1,
        },
      },
    }
  }

  return (
    props.isVideo ?  (
      <div className="flexible-container">
        <ReactPlayer
          width="100%"
          height="100%"
          className="react-player"
          url={props.hostedUrl}
          config={config}
        />
      </div>
    ):(
      <div className="px-0">
        <Img
          fluid={props.file.fluid}
          alt={props.file.alt}
          className=""
        />
      </div>
    )
  )
}

export default Media