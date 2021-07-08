import React from 'react';
import './styles.scss'

const SubText = ({ props }) => {
    
  return (
    <div className="container subtext px-md-0">
      {props.sections.map(section => (
        <div key={section.id} className="col-md-7 offset-md-5 px-md-0">
          <h5 className="mt-3 border-bottom border-9 border-dark">{section.title.toUpperCase()}</h5>
          {section.copy && <p dangerouslySetInnerHTML={{ __html: section.copy.childMarkdownRemark.html }} />}
        </div>
      ))}
    </div>
  )
}

export default SubText