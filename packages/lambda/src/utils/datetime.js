import moment from 'moment-timezone'

export const isValidDate = (dateString) => {
  try {
    getDateObject(dateString)
  } catch (e) {
    return false
  }
  return true
}

export const getDateObject = (dateString) => {
  const date = new Date(dateString)
  // Thanks to https://stackoverflow.com/questions/1353684/detecting-an-invalid-date-date-instance-in-javascript
  if (Object.prototype.toString.call(date) === '[object Date]' && isNaN(date.getTime())) {
    throw new Error(`invalid date string ${dateString}`)
  }
  return date
}

export const formatDateTime = (datetime, fmt = 'MMM D, YYYY, HH:mm UTC') => {
  return moment(datetime).utc().format(fmt)
}

export const formatDateTimeToTimezone = (datetime, timezone, fmt = 'MMM D, HH:mm z') => {
  return moment(datetime).utc().tz(timezone).format(fmt)
}

export const changeTimezoneToUTC = datetime => {
  return moment(datetime).utc().format()
}
