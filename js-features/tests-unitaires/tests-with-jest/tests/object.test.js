describe('#OBJECTS', () => {
  describe('CONTAIN', () => {
    it('Should have good content', () => {
      const myObject = {
        un: 1
      }
      myObject.deux = 2
      expect(myObject).toEqual({un: 1, deux: 2})
    })
  })
})