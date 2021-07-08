import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

import './styles.scss'

library.add(fab, fas)

const Icon = ({ props }) => {
  const {
    icon,
    isBrand,
    size,
    color
  } = props
  const _type = isBrand ? 'fab' : 'fas'

  return (
    <span
      className={`icon fa-${size} fa-color-${color}`}
    >
      {props && <FontAwesomeIcon icon={[_type, icon]} />}
    </span>
  )
}

export default Icon