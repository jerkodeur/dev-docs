"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const WarframeItems = require("warframe-items");
class Items {
    static getFirstItem() {
        const items = new WarframeItems({
            category: ['Primary']
        });
        return this.getNameItems(items[0]);
    }
    static getNameItems(item) {
        return item.name;
    }
}
exports.default = Items;
