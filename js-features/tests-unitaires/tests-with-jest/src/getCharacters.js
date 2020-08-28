const axios = require('axios').default

const getCharacters = (char) => {
  const url = `https://anapioficeandfire.com/api/characters/${ char }`
  return axios.get(url)
    .then(res => res.data)
    .catch(err => err.message)
}

module.exports = getCharacters