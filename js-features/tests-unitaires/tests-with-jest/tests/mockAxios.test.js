const mockAxios = require('jest-mock-axios')

const getCharacters = require('../src/getCharacters')

describe('#mock with axios', () => {
  afterEach(() => {
    mockAxios.default.reset()
  })
  it('Should called with goo properties', async() => {
    const thenFn = jest.fn(), catchFn = jest.fn()
    getCharacters()
      .then(thenFn)
      .catch(catchFn)
    expect(await mockAxios.get).toHaveBeenCalled
  })
  it.only('Should return the good values', async() => {
    mockAxios.default.get.mockImplementationOnce(() => {
      Promise.resolve({
        data: [{
          name: 'Jon Snow',
          gender: 'female',
          father: ''
        }]
      })
    })
    const character = await getCharacters(583)
    console.log(character);
    expect(mockAxios.get).toHaveBeenCalled
      expect(character.gender).toEqual('male')
  })
})