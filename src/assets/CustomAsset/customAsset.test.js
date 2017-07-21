import CustomAsset from './customAsset'

class Pizza extends CustomAsset {
  constructor({
    description,
    size,
    toppings,
  }) {
    super({
      createdBy: 'Thomas',
      description,
      size,
      toppings
    })
  }
}

describe('CustomAsset class', () => {
  describe('constructor', () => {
    it('should set the clientAdditional properties', () => {
      let pizza = new Pizza({ description: 'Magherita', size: 'Large', toppings: 'Mozzarella' })
      expect(pizza.size).toEqual('Large')
      expect(pizza.toppings).toEqual('Mozzarella')
    })

    it('should stringify correctly', () => {
      const pizza = new Pizza({ description: 'Magherita', size: 'Large', toppings: ['Mozzarella', 'Tomato Sauce', 'Oregano'] })
      const parsed = JSON.parse(JSON.stringify(pizza))
      expect(parsed.description).toEqual('Magherita')
      expect(parsed.size).toEqual('Large')
      expect(parsed.toppings).toEqual(['Mozzarella', 'Tomato Sauce', 'Oregano'])
    })
  })
})
