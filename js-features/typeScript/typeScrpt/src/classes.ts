//TODO Typescript and classes
class testTypeScript {
  //TODO Define public and protected variable
  //? Define the class variable present in the constructor
  number:number
  anotherNumber:number
  private internNumber:number //? Rend accessible la variable number à l'extérieur de la classe
  protected internNumber2:number

  constructor (num1:number, num2:number) {
    this.number = num1
    this.anotherNumber = num2
    this.internNumber = 15
    this.internNumber2 = 10
  }

  // Function only available with the original class
  static helloWorld () {
    return 'Hello World'
  }

  public returnInternNumber() {
    return this.internNumber + this.internNumber2
  }

  protected addNumber():number {
    return this.number + this.anotherNumber
  }

  //TODO Define private method (usable only in the inner of the class)
  private doubleNumber():number {
    return this.addNumber() * 2
  }

  public returnNumber():number {
    return this.doubleNumber()
  }

}

console.log(testTypeScript.helloWorld())
const number1 = new testTypeScript(20, 10)
console.log(number1.returnNumber())
console.log(number1.returnInternNumber())

//TODO getters and setters
class testGetterSetter{

  private _element: string

  constructor(element: string = '') {
    this._element = element
  }

  // Define the type of element
  set element (value: string) {
    this._element = value
  }

  // return the element
  get element ():string {
    return this._element
  }
}

const newClass = new testGetterSetter()
newClass.element = 'Hello world'
console.log(newClass.element)

//TODO class interfaces

// define an interface exected for parameters (schema)
interface insertUser {
  firstname: string,
  lastname:string,
  age: number,
  major: boolean
}

class demoInterfaces {

  user: insertUser // use the defined schema

  constructor(user: insertUser) {
    this.user = user
  }

  returnCurrentUser() {
    return this.user
  }
}

const user1 = new demoInterfaces({
  firstname: 'Jérôme',
  lastname: 'Potié',
  age: 42,
  major: true
})

console.log(user1.returnCurrentUser())
