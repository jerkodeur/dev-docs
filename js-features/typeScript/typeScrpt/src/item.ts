
import WarframeItems = require('warframe-items')

class Items {
  static getFirstItem() :String {
    const items = new WarframeItems({
      category: ['Primary']
    })
    return this.getNameItems(items[0])
  }
  static getNameItems(item: WarframeItem) :String {
    return item.name
  }
}

export default Items