import Moment from 'moment';
function moment(data, formatString) {
  formatString = formatString || 'YYYY-MM-DD hh:mm:ss';
  if (!data) {
    return '';
  } else {
    return Moment(data).format(formatString);
  }
}

export default moment;
