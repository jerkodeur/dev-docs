const axios = require('axios').default

const getCharacters = require('../src/getCharacters')

//TODO Prise de contrôle de axios
jest.mock('axios')

describe('#getCharacters', () => {
  //TODO effacement de toutes les fonctions d'axios
  beforeEach(() => {
    axios.mockClear()
  })
  it('should return Jon Snow', async () => {
    //TODO Simulation de l'appel API
    axios.get.mockResolvedValue({ data: [{
      name: 'Jon Snow',
      gender: 'male',
      father: ''
    }]})
    const result = await getCharacters(583)
    expect(result[0].name).toBe('Jon Snow')
  })
})