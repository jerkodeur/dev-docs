//TODO My soluce
let romanReturn = ''

class newNumber {
  constructor(number) {
    romanReturn = ''
    this.number = number
    this.parseToRoman = parseToRoman(this.number)
  }

  toRoman(){
    this.parseToRoman
  }
}

// Parse to Roman digits
function parseToRoman (number) {
  //! Greater than 1000 .... M
  if (number > 1000) {
    let modulo = Math.floor(number / 1000)
    for (i = 0; i < modulo; i++) {
      romanReturn += 'M'
    }
    parseToRoman(number - (modulo * 1000))
  //! Greater than 100 ..... C
  } else if (number > 100) {
    let modulo = Math.floor(number / 100)
    for (i = 0; i < modulo; i++) {
      romanReturn += 'C'
    }
    parseToRoman(number - (modulo * 100))
    //! Greater than 50 ..... L
  } else if (number > 50) {
    if (number > 90) {
      romanReturn += 'XC'
      parseToRoman(number - 90)
    } else {
      romanReturn += 'L'
      parseToRoman(number - 50)
    }
    //! Greater than 10 ..... X
  } else if (number > 10) {
    if (number > 40) {
      romanReturn += 'XL'
      parseToRoman(number - 40)
    } else {
      let modulo = Math.floor(number / 10)
      for (i = 0; i < modulo; i++) {
        romanReturn += 'X'
      }
      parseToRoman(number - (modulo * 10))
    }
    //! Greater than 5 ..... V
  } else if(number > 5){
    if(number === 9){
      romanReturn += 'IX'
      parseToRoman(number - 9)
    } else {
      romanReturn += 'V'
      parseToRoman(number - 5)
    }
  } else {
    if(number === 4){
      romanReturn += 'IV'
      return romanReturn
    } else if(number > 0){
      for(i=0; i<number; i++){
        romanReturn += 'I'
      }
      return romanReturn
    } else {
      return romanReturn
    }
  }
  return romanReturn
}

console.log(new newNumber(4).parseToRoman)
console.log(new newNumber(37).parseToRoman)
console.log(new newNumber(143).parseToRoman)
console.log(new newNumber(1234).parseToRoman)
console.log(new newNumber(99).parseToRoman)

//TODO More simple
const convertToRoman = (number) => {
  const digits = [1000,500,100,50,10,5,1]
  const roman = ['M','D','C','L','X','V','I']

  let result = ''

  for(let i = 0; i < digits.length; i++){
    while(number%digits[i] < number) {
      result += roman[i]
      number -= digits[i]
    }
  }
  return result
}

console.log(convertToRoman(4))
console.log(convertToRoman(37))
console.log(convertToRoman(143))
console.log(convertToRoman(1234))