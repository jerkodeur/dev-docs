//TODO random sur un tableau
let table = [1,2,3,4,5,6,7,8,9]
const shuffleTable = table.sort(() => Math.random() - 0.5)
console.log(shuffleTable)