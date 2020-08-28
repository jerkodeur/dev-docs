describe('#NUMBERS', () => {
  //TODO tobe() not.toBe()
   test('demo sum', () => {
    expect(2 + 1).toBe(3)
    expect(2 + 1).not.toBe(0)
  })

  //TODO Compare numbers
  test('two plus two', () => {
    const value = 2 + 2
    expect(value).toBeGreaterThan(3)
    expect(value).toBeGreaterThanOrEqual(3.5)
    expect(value).toBeLessThan(5)
    expect(value).toBeLessThanOrEqual(4.5)

    // toBe and toEqual are equivalent for numbers
    expect(value).toBe(4)
    expect(value).toEqual(4)
  });

  //TODO floating numbers
  test('adding floating point numbers', () => {
    const value = 0.1 + 0.2
    //! expect(value).toBe(0.3)           This won't work because of rounding error
    expect(value).toBeCloseTo(0.3) //* This works.
  });

  //TODO toBeNAN()
  test('It should be a number', () => {
    expect('un' * 1).toBeNaN()
    expect(2 * 1).not.toBeNaN()
  })
})