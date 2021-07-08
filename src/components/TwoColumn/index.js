import React from 'react'
import { Link } from 'gatsby'

import './styles.scss'

const TwoColumn = ({ props }) => { 
  return (
    props.splitPushRight ? (
      <div className="d-flex px-0 col-md-7 offset-md-5 two-column split-push-right">
        <div className="mr-5">
          <span className={`${props.leftColumnText.copySize === 'Large' && 'text-size-large'} ${props.leftColumnText.copySize === 'Extra Large' && 'text-size-xlarge'}`} dangerouslySetInnerHTML={{ __html: props.leftColumnText.copy.childMarkdownRemark.html }} />
          {props.leftColumnText.link &&  (
            <Link to={props.leftColumnText.link.to} title={props.leftColumnText.link.title} rel={`${props.leftColumnText.link.opensInNewTab ? 'noreferrer' : ''}`} target={`${props.leftColumnText.link.opensInNewTab ? '_blank' : '_self'}`}>{props.leftColumnText.link.label}</Link>
          )}
        </div>
        <div>
          <span className={`${props.leftColumnText.copySize === 'Large' && 'text-size-large'} ${props.leftColumnText.copySize === 'Extra Large' && 'text-size-xlarge'}`} dangerouslySetInnerHTML={{ __html: props.rightColumnText.copy.childMarkdownRemark.html }} />
          {props.rightColumnText.link &&  (
            <Link to={props.rightColumnText.link.to} title={props.rightColumnText.link.title} rel={`${props.rightColumnText.link.opensInNewTab ? 'noreferrer' : ''}`} target={`${props.rightColumnText.link.opensInNewTab ? '_blank' : '_self'}`}>{props.rightColumnText.link.label}</Link>
          )}
        </div>
      </div>
    ):(
      <div className="row two-column">
        <div className="col-md-5">
          <span className={`${props.leftColumnText.copySize === 'Large' && 'text-size-large'} ${props.leftColumnText.copySize === 'Extra Large' && 'text-size-xlarge'}`} dangerouslySetInnerHTML={{ __html: props.leftColumnText.copy.childMarkdownRemark.html }} />
          {props.leftColumnText.link &&  (
            <Link to={props.leftColumnText.link.to} title={props.leftColumnText.link.title} rel={`${props.leftColumnText.link.opensInNewTab ? 'noreferrer' : ''}`} target={`${props.leftColumnText.link.opensInNewTab ? '_blank' : '_self'}`}>{props.leftColumnText.link.label}</Link>
          )}
        </div>
        <div className="col-md-7">
          <span className={`${props.leftColumnText.copySize === 'Large' && 'text-size-large'} ${props.leftColumnText.copySize === 'Extra Large' && 'text-size-xlarge'}`} dangerouslySetInnerHTML={{ __html: props.rightColumnText.copy.childMarkdownRemark.html }} />
          {props.rightColumnText.link &&  (
            <Link to={props.rightColumnText.link.to} title={props.rightColumnText.link.title} rel={`${props.rightColumnText.link.opensInNewTab ? 'noreferrer' : ''}`} target={`${props.rightColumnText.link.opensInNewTab ? '_blank' : '_self'}`}>{props.rightColumnText.link.label}</Link>
          )}
        </div>
      </div>
    )
  )
}

export default TwoColumn