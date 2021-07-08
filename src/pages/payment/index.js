import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Paper from "@material-ui/core/Paper";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import "./styles.scss";

import neonpay from '../../plugins/neonpay';

// Axios to make req
import axios from 'axios';
import { navigate } from "gatsby";
import { Helmet } from "react-helmet";

export const creditCardReg = /(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;
export const cvvReg = /^[0-9]{3}$/;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(0, 3),
  },
  paper: {
    width: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
    boxShadow: "none",
  },
  select: {
    fontSize: 12,
  }
}));

const validationSchema = yup.object({
  isGift: yup.boolean(),
  donate: yup.boolean(),
  renew: yup.boolean(),
  membership: yup.string().required("Field Required!"),
  creditCardNumber: yup
    .string()
    .typeError("Not a valid credit card")
    .matches(creditCardReg, "Not a valid credit card")
    .required("Field Required"),
  expireDate: yup
    .string()
    .typeError("Not a valid expiration date. Example: MM/YY")
    .max(5, "Not a valid expiration date. Example: MM/YY")
    .matches(
      /([0-9]{2})\/([0-9]{2})/,
      "Not a valid expiration date. Example: MM/YY"
    )
    .required("Field Required"),
  cvv: yup
    .string()
    .typeError("Not a valid CVV")
    .matches(cvvReg, "Not a valid CVV")
    .required("Field Required"),
});

function App({ location }) {
  const classes = useStyles();
  const [coupon, setCoupon] = useState();
  const [confirmCoupon, setConfirmCoupon] = useState();
  const { memberShip, signupDetail } = location.state


  const formik = useFormik({
    initialValues: {
      isGift: false,
      membership: "monthly",
      creditCardNumber: "",
      cvv: "",
      expireDate: "",
      donate: false,
      renew: false,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      var userDetail = location.state.signupDetail;
      var data = {
        memberTitle: memberShip.title.split(' ')[0], user: userDetail, values
      }


      // fetch('http://192.168.0.107:3000/api/membership/register', {
      //   method: "POST",
      //   body: JSON.stringify(data),
      //   headers: {
      //     'Content-Type': 'application/json'
      //   }
      // })
      //   .then(function (response) {
      //     // The response is a Response instance.
      //     // You parse the data into a useable format using `.json()`
      //     return response.json();
      //   }).then(function (data) {
      //     // `data` is the parsed version of the JSON returned from the above endpoint.
      //     console.log(data.status);
      //     if (data.status == 'SUCCEEDED') {
      //       alert(`Membership Successfull Transaction Id : ${data.paymentResponse.id}`);
      //     } // { "userId": 1, "id": 1, "title": "...", "body": "..." }
      //   }).catch(err => {
      //     console.log(err);
      //   })
    },
  });
  useEffect(() => {
    // console.log(formik.errors.creditCardNumber);
    // console.log(formik.touched.creditCardNumber);
    // console.log(formik);
  });
  return (
    <div className={`${classes.root} formik-form-container`}>
      <Paper className={classes.paper}>
        <div className="form-container">
          <div className="confirm-pay-title">
            <div className="icon">
              <ArrowBackIosIcon />
            </div>
            <div>Confirm & Pay. </div>
          </div>
          <div className="membership-donation-title">
            Membership & Donation.
          </div>
          <div className="membership-type">Individual Membership</div>
          <form onSubmit={formik.handleSubmit}>
            <div className="checkbox-container">
              Is this membership a gift ?
              <FormControlLabel
                control={
                  <Checkbox
                    id="isGift"
                    name="isGift"
                    checked={formik.values.isGift}
                    onChange={formik.handleChange}
                  />
                }
                label="Yes"
              />
            </div>
            <div className="radio-button-container">
              <FormControl component="fieldset">
                <RadioGroup
                  name="membership"
                  id="membership"
                  value={formik.values.membership}
                  onChange={formik.handleChange}
                >
                  <div className="radio-button">
                    <FormControlLabel
                      value="annual"
                      control={<Radio />}
                      label="Annual"
                    />
                    <div className="price">$50.00</div>
                  </div>
                  <div className="radio-button">
                    <FormControlLabel
                      value="monthly"
                      control={<Radio />}
                      label="Monthly (one year commitment)"
                    />
                    <div className="price">$5.00</div>
                  </div>
                </RadioGroup>
              </FormControl>
            </div>
            <div className="coupon-container">
              <TextField
                fullWidth
                id="coupon"
                name="coupon"
                label="Coupon code (case sensative)"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
              />
              <Button onClick={() => setConfirmCoupon(true)}>Enter</Button>
            </div>
            <hr className="hr-of-card" />
            <div className="total-charge">
              Total Charge
              <br />
              <span>
                {formik.values.membership === "monthly" ? "$5.00" : "$50.00"}
              </span>
            </div>
            <TextField
              fullWidth
              id="creditCardNumber"
              name="creditCardNumber"
              label="Credit Card number"
              value={formik.values.creditCardNumber}
              onChange={formik.handleChange}
              error={
                Boolean(formik.errors.creditCardNumber)
              }
              helperText={
                formik.errors.creditCardNumber
              }
            />
            <div className="cvv-expire-date-container">
              <TextField
                fullWidth
                id="expireDate"
                name="expireDate"
                label="Expiration"
                className="expireDate"
                value={formik.values.expireDate}
                onChange={formik.handleChange}
                error={
                  Boolean(formik.errors.expireDate)
                }
                helperText={
                  formik.errors.expireDate
                }
              />
              <TextField
                fullWidth
                id="cvv"
                name="cvv"
                label="CVV"
                className="cvv"
                value={formik.values.cvv}
                onChange={formik.handleChange}
                error={Boolean(formik.errors.cvv)}
                helperText={formik.errors.cvv}
              />
            </div>
            <div className="select-list">
              <FormControlLabel
                className={classes.select}
                control={
                  <Checkbox
                    id="donat"
                    name="donat"
                    checked={formik.values.donat}
                    onChange={formik.handleChange}
                  />
                }
                label="I want to cover the 3% credit card processing fee as a donation to the meseum, 5% For America Express"
              />
              <FormControlLabel
                className
                control={
                  <Checkbox
                    id="renew"
                    name="renew"
                    checked={formik.values.renew}
                    onChange={formik.handleChange}
                  />
                }
                label="Yes! I want this membership to auto-renew annually."
              />
            </div>
            <Button
              className="submit-button"
              variant="contained"
              fullWidth
              type="submit"
            >
              Confirm & Pay
            </Button>
          </form>
          <Button onClick={runApp}></Button>
        </div>
      </Paper>
    </div>
  );
}

export default App;
