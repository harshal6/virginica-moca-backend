import React, { useEffect } from 'react';
import Button from '../Button'

import './styles.scss'

const PricingCards = ({ props }) => {
  
  props.map((button) => {
    button.button.destination = "/createanaccount"
    button.button.opensInNewTab = "_self"
    button.button.memberShip = button
  }) 

  return (
    <div className="container pricing-cards d-flex flex-nowrap px-0">
      <div className="row">
        {props.map(pcard => (
          <div key={pcard.id} className="col-sm-4">
            <div className="pricing-card p-5 text-center border border-dark mx-1">
              <h4 className="mb-2">{pcard.title}</h4>
              {pcard.price && <h5 className="price">${pcard.price}</h5>}
              <div className="border-bottom border-dark my-4"></div>
              {pcard.details && <div className="details" dangerouslySetInnerHTML={{ __html: pcard.details.childMarkdownRemark.html }} />}
              {pcard.button && <Button props={pcard.button} />}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PricingCards