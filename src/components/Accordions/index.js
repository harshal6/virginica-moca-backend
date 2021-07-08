import React, {useState} from 'react'
import { Accordion, Card } from "react-bootstrap"
import Icon from '../Icon'
import "bootstrap/dist/css/bootstrap.min.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './styles.scss'

const _plus = 'plus';
const _minus = 'minus';

const Accordions = ({ props }) => {
  
  const [activeId, setActiveId] = useState('0');
  
  function toggleActive(id) {
    if (activeId === id) {
    } else {
      setActiveId(id);
    }
  }

  return (
    <div className="accordions px-0">
      <Accordion defaultActiveKey={activeId}>
        {props[0].items && props[0].items.map((item, i) => (
          <Card key={item.id} className={activeId === i.toString() ? 'active mb-3' : 'panel-wrap mb-3'}>
            <Card.Header>
              <Accordion.Toggle as={Card.Header} variant="link" eventKey={i.toString()} onClick={() => toggleActive(i.toString())}>
                <div clasName="d-flex justify-content-between">
                  <h4>{item.name}</h4>
                  <div className="icon pr-3">
                  {activeId === i.toString() ? 
                    <FontAwesomeIcon icon={["fas", _minus]} size="lg" color="dark"/> 
                    : <FontAwesomeIcon icon={["fas", _plus]} size="lg" color="dark"/> }
                </div>
                </div>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={i.toString()}>
              <Card.Body>
                <p dangerouslySetInnerHTML={{ __html: item.content.childMarkdownRemark.html }} />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        ))}
      </Accordion>
    </div>
  )
}

export default Accordions