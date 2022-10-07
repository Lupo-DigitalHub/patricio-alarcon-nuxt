import moment from 'moment'
/* eslint-disable */
export default ({ app }, inject) => {
  /* eslint-enable */
  inject('moment', {
    formatDate (date, type) {
      return moment(date).format(type)
    }
  })
}
