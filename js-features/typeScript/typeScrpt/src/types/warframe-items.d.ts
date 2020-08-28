//TODO Fichier de déclaration de type pour le module warframe-items
//* Explique comment le module fonctionne et les types attendus

declare interface WarframeItem {
  name: String,
  uniqueName: String,
  damagePerShot?: Number[],
  totalDamage: Number
}

declare module 'warframe-items' {

  interface WarframeItemsOptions {
    category: String[]
  }


  class WarframeItems extends Array<WarframeItem> {
    constructor(options: WarframeItemsOptions)
  }

  export = WarframeItems
}
