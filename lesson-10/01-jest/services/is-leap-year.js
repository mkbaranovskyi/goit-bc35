function isLeapYear(year) {
  if (year === undefined) {
    throw new Error('Year must be defined')
  }

  // is not a string

  

  // if (year === null) {
  //   throw new Error('Year must be a number')
  // }

  // if (year === null) {
  //   throw new Error('Year must be a number')
  // }

  // if (year === null) {
  //   throw new Error('Year must be a number')
  // }

  // if (Array.isArray(year)) {
  //   throw new Error('Year must be a number')
  // }

  const lastFebruaryDate = new Date(year, 2, 0).getDate();
  return lastFebruaryDate === 29
}

module.exports = {
  isLeapYear,
}