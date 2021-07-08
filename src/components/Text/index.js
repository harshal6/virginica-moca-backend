import React from 'react'
import { Link } from 'gatsby'

import './styles.scss'

const Text = ({ props }) => { 

  return (
    props.map((text, i) => (
      <div data-i={i} className={`text d-flex flex-nowrap flex-column align-items-start px-md-0 ${text.layout === 'Half' && i === 0 && 'col-md-5 flex-column'} ${text.layout === 'Half' && i !== 0 && 'col-md-7 flex-column'} ${text.layout === 'Split Push Right' && 'col-md-7 offset-md-5 flex-column'}`} key={text.id}>
        <span className={`${text.copySize === 'Large' && 'text-size-large'} ${text.copySize === 'Extra Large' && 'text-size-xlarge'}`} dangerouslySetInnerHTML={{ __html: text.copy.childMarkdownRemark.html }} />
        {text.link &&  (
          <Link to={text.link.to} title={text.link.title} rel={`${text.link.opensInNewTab ? 'noreferrer' : ''}`} target={`${text.link.opensInNewTab ? '_blank' : '_self'}`}>{text.link.label}</Link>
        )}
      </div>
    ))
  )
}

export default Text