import React from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import './style.scss'

const MakeAnDonation = ({ changeStep }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        changeStep(1);
    }

    return (
        <div className="container make-an-donation" style={{width: "72%", marginLeft: "4%"}}>
        <div className="row px-0 mt-5">
          <div className="col-md-7 offset-md-5 px-0">
        <form className="create-account my-5" onSubmit={(e) => handleSubmit(e)}>
        <div className="confirm-pay-title" style={{display: "flex"}}>
        <h3 >THANKS FOR YOUR SUPPORT!</h3>
          </div>
        <hr />
        <br/>
          <h6 className="headingMain1">We depply appreciate your contribution to Virginia Museum of Contemporary Art</h6>
          <br/>
          <h6 className="donationHead1">Total on March 3, 2021</h6>
          <div className="form-group">
            <p className="donationAmmount">$103.00</p>
          </div>
         <div>
             <p>This amount will be charged to your credit card quarterly.</p>
         </div>
          <br/>
          <br/>
          <div>
            <p>Purchase confirmation number</p>
            <p className="confirmNumber">00000000000000</p>
          </div>
          <br/>
          <br/>
          <br/>
          <div className="form-group" >
            <input type="submit" className="btn" value="Discover the Current Exhibits" />
          </div>
        </form>
          </div>
          </div>
          </div>
    )
}

export default MakeAnDonation