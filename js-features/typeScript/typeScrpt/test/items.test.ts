import Items from '../src/item'

describe('items', () => {
  it('should returns the first item', () => {
    expect(Items.getFirstItem()).toBe('Acceltra')
  })
})