import React from 'react'
import { Link } from 'gatsby'
import Card from '../Card'
import Accordions from '../Accordions'
import ApplicationForm from '../ApplicationForm'
import CurrentExhibition from '../CurrentExhibition'
import DonationsForm from '../DonationsForm'
import GoogleMap from '../GoogleMap'
import Image from '../Image'
import ImageGrid from '../ImageGrid'
import PricingCards from '../PricingCards'
import ReserveTickets from '../ReserveTickets'
import SideBySide from '../SideBySide'
import SubText from '../SubText'
import Text from '../Text'

import './styles.scss'

const Module = ({ module, company }) => {
  const {
    id,
    type,
    preHeadline,
    headline,
    headlineSize,
    hasBracket,
    viewLink,
    noBottomMargin
  } = module

  console.log('module props', module)

  return (
    <section id={headline && headline.toLowerCase().replace(' ','-').replace(', ', '-').replace(' & ', '-').replace(' ', '-').replace(',', '')} className={`module px-0 ${noBottomMargin ? 'mb-1': 'mb-3'} ${!headline && 'no-border'}`}>
      <div className="container px-0">
        {headline && (
          <div className="row">
            <div className="col-sm-12">
              {preHeadline && <h6 className="pre-headline">{preHeadline.toUpperCase()}</h6>}
              <div className={`headline ${headlineSize !== "Large" && 'small'} ${viewLink && 'viewlink'}`}>
                  <h2 className={`${headlineSize === 'Medium' && 'headline-size-medium'} ${headlineSize === 'Large' && 'headline-size-large'}`}>{headline.toUpperCase()}</h2>
                  {hasBracket && <span></span>}
                  {viewLink && <Link to={viewLink.to} title={viewLink.title}>{viewLink.label}</Link>}
              </div>
            </div>
          </div>
        )}
          {type === "Cards" && <Card key={id} props={module.cards} />}
          {type === "Current Exhibition" && <CurrentExhibition key={id} props={module.currentExhibition} />}
          {type === "Images" && <Image key={id} props={module.images} />}
          {type === "Side By Side" && <SideBySide key={id} props={module.sideBySide} />}
          {type === "Text" && <Text key={id} props={module.text} />}
          {type === "Accordion" && <Accordions key={id} props={module.accordion} />}
          {type === "Google Map" && <GoogleMap props={company.googleMapApiKey}/>}
          {type === "Reserve Tickets" && <ReserveTickets />}
          {type === "Pricing Card" && <PricingCards props={module.pricingCards}/>}
          {type === "Donation Form" && <DonationsForm />}
          {type === "Application Form" && <ApplicationForm />}
          {type === "Sub Text" && <SubText props={module.subText} />}
          {type === "Image Grid" && <ImageGrid props={module.imageGrid} />}
      </div>
    </section>
  )
}

export default Module