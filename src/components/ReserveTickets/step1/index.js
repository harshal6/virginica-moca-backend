import React, { useState } from 'react';
import Calendar from 'react-calendar';
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import 'react-calendar/dist/Calendar.css';

import './styles.scss'

const Step1 = ({changeStep, step1Datafun}) => {
  const [step1Data, setStep1Data] = useState({count: 0, value: new Date()})

  const onChange = (nextValue) => {
    setStep1Data({...step1Data, value: nextValue})
  }

  const handleIncrement = () => {
    setStep1Data({...step1Data, count: step1Data.count + 1})
  };

  const handleDecrement = () => {
    setStep1Data({...step1Data, count: step1Data.count - 1})
  };

  const reserveTicket = (e) => {
    e.preventDefault();
    step1Datafun(step1Data);
    changeStep(2);
  }


  return (
    <div className="container reserve-tickets">
      <div className="row px-0 mt-5">
        <div className="col-md-7 offset-md-5 px-0">
          <form className="" onSubmit={(e) => reserveTicket(e)}>
            <div className="form-group">
              <h3>Step 1</h3>
              <hr />
              <h4>HOW MANY TICKETS?</h4>
              <hr />
              <div className="incrementor">
                <span onClick={handleDecrement}>-</span>
                <input type="tel" value={step1Data.count} />
                <span onClick={handleIncrement}>+</span>
              </div>
              <hr />
            </div>
            <div className="form-group">
              <h4>FOR WHICH DAY?</h4>
              <hr />
              <div>
                <Calendar
                  onChange={onChange}
                  value={step1Data.value}
                />
              </div>
              <p>Date: {Date(setStep1Data)}</p>
            </div>
            <div className="form-group" style={{marginTop: "10px"}}>
              {/* <hr />
              <h4>AT WHAT TIME?</h4>
              <div className="times">
                <button className="btn">10am</button>
                <button className="btn">10:30am</button>
                <button className="btn">11am</button>
                <button className="btn">11:30am</button>
              </div>
              <hr /> */}
            </div>
            <div className="form-group">
              <p>There is no time-limit for your stay in the galleries</p>
              <button type="submit" className="btn">Reserve Your Tickets</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Step1