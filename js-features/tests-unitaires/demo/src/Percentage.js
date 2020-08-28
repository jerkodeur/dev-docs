const evolution =  (a, b) => {
  return round(100 * (b - a) / a)
}

const round = value => {
  return Math.round(100 * value) / 100
}

module.exports = {
  evolution,
  round
}