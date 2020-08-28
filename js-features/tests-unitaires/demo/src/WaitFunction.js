const Wait = (time, callback) => {
  setTimeout(() => {
    return callback(50)
  }, time)
}

module.exports = {
  Wait
}