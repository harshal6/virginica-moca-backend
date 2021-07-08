import React from 'react'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import './styles.scss'

const phoneRegExp = new RegExp(
  '^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$',
  'im'
)
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(0, 3),
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    width: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
    boxShadow: 'none',
  }
}))

const validationSchema = Yup.object({
  firstName: Yup.string()
    .min(2, 'Too short')
    .max(50, 'Too long')
    .required('Field Required'),
  lastName: Yup.string()
    .min(2, 'Too short')
    .max(50, 'Too long')
    .required('Field Required'),
  password: Yup.string()
    .min(8, 'Too short')
    .required('Field Required'),
  confirmPassword: Yup.string()
    .required('Field Required')
    .oneOf([Yup.ref('password')], 'Password does not match'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Required field'),
  phone: Yup.string()
    .required('Required field')
    .matches(phoneRegExp, 'Wrong Format'),
})

const initialValues = {
  firstName: '',
  lastName: '',
  password: '',
  email: '',
  phone: '',
  confirmPassword: '',
}

function SignUp({ location }) {
  const classes = useStyles()
  return (
    <div className={`${classes.root} formik-form-container`}>
      <Paper className={classes.paper}>
        <div className="form-container">
          <div className="form-title">Stay in touch</div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, actions) => {
              location.signupDetail = values;
            }}
          >
            {(props) => (
              <Form>
                <Field name="lastName">
                  {({
                    field, // { name, value, onChange, onBlur }
                    form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                    meta,
                  }) => (
                    <div className="input-container">
                      <input type="text" className={`${meta.error ? "has-error" : ""}`} placeholder="Last Name" {...field} />
                      {meta.touched && meta.error ? (
                        <div className="has-error">{meta.error}</div>
                      ) : <div className="no-error" />}
                    </div>
                  )}
                </Field>
                <Field name="firstName">
                  {({
                    field, // { name, value, onChange, onBlur }
                    form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                    meta,
                  }) => (
                    <div className="input-container">
                      <input type="text" className={`${meta.error ? "has-error" : ""}`} placeholder="First Name" {...field} />
                      {meta.touched && meta.error ? (
                        <div className="has-error">{meta.error}</div>
                      ) : <div className="no-error" />}
                    </div>
                  )}
                </Field>
                <Field name="email">
                  {({
                    field, // { name, value, onChange, onBlur }
                    form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                    meta,
                  }) => (
                    <div className="input-container">
                      <input type="text" className={`${meta.error ? "has-error" : ""}`} placeholder="Email" {...field} />
                      {meta.touched && meta.error ? (
                        <div className="has-error">{meta.error}</div>
                      ) : <div className="no-error" />}
                    </div>
                  )}
                </Field>
                <Field name="phone">
                  {({
                    field, // { name, value, onChange, onBlur }
                    form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                    meta,
                  }) => (
                    <div className="input-container">
                      <input type="text" className={`${meta.error ? "has-error" : ""}`} placeholder="Phone Number" {...field} />
                      {meta.touched && meta.error ? (
                        <div className="has-error">{meta.error}</div>
                      ) : <div className="no-error" />}
                    </div>
                  )}
                </Field>
                <Field name="password">
                  {({
                    field, // { name, value, onChange, onBlur }
                    form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                    meta,
                  }) => (
                    <div className="input-container">
                      <input type="password" className={`${meta.error ? "has-error" : ""}`} placeholder="Passord" {...field} />
                      {meta.touched && meta.error ? (
                        <div className="has-error">{meta.error}</div>
                      ) : <div className="no-error" />}
                    </div>
                  )}
                </Field>
                <Field name="confirmPassword">
                  {({
                    field, // { name, value, onChange, onBlur }
                    form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                    meta,
                  }) => (
                    <div className="input-container">
                      <input type="password" className={`${meta.error ? "has-error" : ""}`} placeholder="Confirm Password" {...field} />
                      {meta.touched && meta.error ? (
                        <div className="has-error">{meta.error}</div>
                      ) : <div className="no-error" />}
                    </div>
                  )}
                </Field>
                <button
                  className="submitbutton"
                  fullWidth
                  type="submit"
                >
                  Sign Up
                </button>
              </Form>
            )}

          </Formik>
        </div>
      </Paper>
    </div>
  )
}

export default SignUp
