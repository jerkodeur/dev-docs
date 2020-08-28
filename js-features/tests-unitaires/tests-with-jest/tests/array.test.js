const shoppingList = [
  'diapers',
  'kleenex',
  'beer',
]

//TODO contain a value
test('the shopping list has beer on it', () => {
  expect(shoppingList).toContain('beer')
})