import React, { useState, useEffect } from 'react'
import Paper from '@material-ui/core/Paper'
import Calendar from 'react-calendar'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { makeStyles } from '@material-ui/core/styles'
import './style.scss'

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
  },
}))

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const days = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
]

const availableTime = [
  '10:00am',
  '10:30am',
  '02:00pm',
  '02:30pm',
  '03:00pm',
  '03:30pm',
]

const validationSchema = Yup.object({
  selectedEvent: Yup.string().required('Field Required'),
  description: Yup.string().required('Required field'),
  selectedTime: Yup.string().required('Required field'),
})

function Reservation() {
  const classes = useStyles()
  const [number, setNumber] = useState(1)
  const [day, setDay] = useState(new Date())
  const formik = useFormik({
    initialValues: {
      selectedTime: "",
      selectedEvent: "",
      description: ""
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2))
    },
  })

  const increaseNumber = () => {
    const num = number + 1
    setNumber(num)
  }

  const decreaseNumber = () => {
    if (number > 1) {
      const num = number - 1
      setNumber(num)
    }
  }

  const onChangeDay = d => {
    setDay(d)
  }
  return (
    <div className={`${classes.root} reservation-form-container`}>
      <Paper className={classes.paper}>
        <div className="form-container">
          <div className="title">How Many Ticket</div>
          <form onSubmit={formik.handleSubmit}>
            <div className="tickets-number">
              <div className="increase-decrease" onClick={decreaseNumber}>
                -
              </div>
              <div className="number">{number}</div>
              <div className="increase-decrease" onClick={increaseNumber}>
                +
              </div>
            </div>
            <div className="title">Which Event</div>
            <div>
              <select
                className={`${formik.errors.selectedEvent ? 'has-error' : ''}`}
                value={formik.values.selectedEvent}
                placeholder="Select Event Id"
                id="selectedEvent"
                name="selectedEvent"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option></option>
                <option value="1">Event 1</option>
                <option value="1">Event 2</option>
                <option value="1">Event 3</option>
              </select>
              {formik.errors.selectedEvent ? (
                <div className="has-error">{formik.errors.selectedEvent}</div>
              ) : (
                <div className="no-error" />
              )}
            </div>
            <div className="description">
              <textarea
                rows={4}
                placeholder="Description"
                value={formik.values.description}
                id="description"
                name="description"
                className={`${formik.errors.description ? 'has-error' : ''}`}
                onChange={formik.handleChange}
              />
              {formik.errors.description ? (
                <div className="has-error">{formik.errors.description}</div>
              ) : (
                <div className="no-error" />
              )}
            </div>
            <div className="title">For what day</div>
            <div className="calendar-container">
              <Calendar
                minDetail={'year'}
                className="calendar"
                next2Label={null}
                prev2Label={null}
                minDate={new Date()}
                onChange={onChangeDay}
                value={day}
              />
            </div>
            <div className="chosen-date">
              {`${months[day.getMonth()]}, ${days[day.getDay()]
                } ${day.getDate()} Open from 10am-4pm`}
            </div>
            <div className="title">At what time</div>
            <div className="availableTime">
              {availableTime.map(time => (
                <div key={time}>
                  <label
                    className={`${time === formik.values.selectedTime ? 'selected' : ''
                      } ${formik.errors.selectedTime ? 'has-error' : ''}`}
                    htmlFor={time}
                    name="selectedTime"
                  >
                    {time}
                  </label>
                  <input
                    type="radio"
                    name="selectedTime"
                    id={time}
                    value={time}
                    onChange={formik.handleChange}
                  />
                </div>
              ))}
            </div>
            <div className="hint">There's no duration limit once you're in the gallerie</div>
            {formik.errors.selectedTime ? (
              <div className="has-error">{formik.errors.selectedTime}</div>
            ) : (
              <div className="no-error" />
            )}
            <div className="submitbutton-container">
              <button className="submitbutton" fullWidth type="submit">
                Reserve
              </button>
            </div>
          </form>
        </div>
      </Paper>
    </div>
  )
}

export default Reservation
