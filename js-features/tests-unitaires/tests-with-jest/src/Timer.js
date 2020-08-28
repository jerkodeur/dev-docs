const Timer = (t) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve('That Works')
    }, t)
  })
}

module.exports = Timer