import React, { useEffect } from 'react'
import { Link } from 'gatsby'

import './styles.scss'

const Button = ({ props }) => {
  const {
    style,
    size,
    destination,
    title,
    label,
    type,
    opensInNewTab,
    memberShip
  } = props

  if (destination !== '') {
    return (
      <Link
        to={destination}
        title={title}
        state={{memberShip:memberShip ? memberShip : {}}}
        className={`btn btn-${style}-black btn-${size}`}
        target={opensInNewTab ? '_blank' : '_self'}
      >
        <span className="btn-inner--text">{label}</span>
      </Link>
    )
  } else {
    return (
      <button
        className={`btn btn-${style}-black btn-${size}`}
        value={label}
        type={type}
      >
        <span className="btn-inner--text">{label}</span>
      </button>
    )
  }
}

export default Button
