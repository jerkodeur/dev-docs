//TODO Test with Regex
test('regex matching', () => {
  expect('Hello Boy').toMatch(/Boy/)
  expect('Hello World').not.toMatch(/Word/)
})