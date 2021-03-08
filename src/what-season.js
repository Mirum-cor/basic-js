module.exports = function getSeason(date) {
  if (date) {
    if (Object.keys(date).length !== 0) {
      throw new Error("It's not a date!");
    }
    if (typeof date === 'string') {
      switch (date) {
        case 'winter':
        case 'spring':
        case 'summer':
        case 'autumn':
          return date;
      }
    }
    const dateStr = String(date);
    const regexp = /\w{3}\s\w{3}\s\d{2}\s\d{4}\s\d{2}\:\d{2}\:\d{2}/gi;
    if (dateStr.match(regexp)) {
      const month = dateStr.split(' ')[1];
      switch (month) {
        case 'Dec':
        case 'Jan':
        case 'Feb':
          return 'winter';
        case 'Mar':
        case 'Apr':
        case 'May':
          return 'spring';
        case 'Jun':
        case 'Jul':
        case 'Aug':
          return 'summer';
        case 'Sep':
        case 'Oct':
        case 'Nov':
          return 'autumn';
      }
    } else {
      throw new Error("It's not a date!");
    }
  } else {
    return 'Unable to determine the time of year!';
  }
};
