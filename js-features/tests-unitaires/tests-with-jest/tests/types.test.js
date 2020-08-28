//TODO defined, undefined, null
test('Verify the type of values', () => {
  expect('defined').toBeDefined()
  expect(undefined).toBeUndefined()
  expect(null).toBeNull()
})

//TODO true or false
test('To be true or false', () => {
  const equal = (a,b) => {
    return a === b
  }
  expect(equal(2,2)).toBeTruthy()
  expect(equal(1,2)).toBeFalsy()
})