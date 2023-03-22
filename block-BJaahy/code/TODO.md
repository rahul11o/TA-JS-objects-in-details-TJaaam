# More about class

- Create a class named `Square` which accepts one parameter `side` and will set two property `width` and `height` to the value of `side`.
```js
class Square{
    constructor(side){
        this.width = side;
        this.height = side;
    }
}
```

- Add a method named `description` that will alert a message saying `The square is ${width} x ${height}`
```js
class Square{
    constructor(side){
        this.width = side;
        this.height = side;
    }
    description(){
        alert `The square is ${this.width} x ${this.height}`
    }
}
```
- Create another method named `calcArea` that will return the area of the square.
```js
class Square{
    constructor(side){
        this.width = side;
        this.height = side;
    }
    description(){
        return `The square is ${this.width} x ${this.height}`
    }
    calcArea(){
        return `The Area of  square is ${this.width*this.height}`
    
    }
}
```

- Create a getter method named `area` that will return area of the square.
```js
class Square{
    constructor(side){
        this.width = side;
        this.height = side;
    }
    description(){
        return `The square is ${this.width} x ${this.height}`
    }
    calcArea(){
        return `The Area of  square is ${this.width*this.height}`
    
    }
    get area(){
         return `The Area of  square is ${this.width*this.height}`
    }
}
```

- Create a setter method named `area` that will accept a value (the value will be the area of any square like 124). Based on the input value update the `width` and `height` of the square.(The width and the height will be updated to 12 (12 \* 12 = 124))

```js
class Square{
    constructor(side){
        this.width = side;
        this.height = side;
    }
    description(){
        return `The square is ${this.width} x ${this.height}`
    }
    calcArea(){
        return `The Area of  square is ${this.width*this.height}`
    
    }
    get area(){
         return `The Area of  square is ${this.width*this.height}`
    }
    set area(value){
        this.width = Math.sqrt(value)
        this.height = Math.sqrt(value)
    }
}
```

- Create a static method named `isEqual` which accepts two square instance (when you create a new object using the class). If the area of both square is same the method should return `true` or `false`. (Static methods are called directly on the class not in the instance)
 ```js
class Square{
    constructor(side){
        this.width = side;
        this.height = side;
    }
    description(){
        return `The square is ${this.width} x ${this.height}`
    }
    calcArea(){
        return `The Area of  square is ${this.width*this.height}`
    
    }
    get area(){
         return `The Area of  square is ${this.width*this.height}`
    }
    set area(value){
        this.width = Math.sqrt(value)
        this.height = Math.sqrt(value)
    }
     static isEqual(s_one, s_two){
        return s_one.area === s_two.area
     }
}
```

- Create two instance of the `Square` class (ex: `let s1 = new Square(6);`)
```js
let s1 = new Square(8);
let s2 = new Square(18);
```

- Check the `area` getter method on both square.
```js
console.log(s1.area)
console.log(s2.area)
```
- Check the `isEqual` method and pass the two instance you created above.
```js
console.log(square.isEqual(s1,s2))
```
## User Class

- Create a class named `User` that accepts `firstName` and `lastName` property
```js
class User{
    constructor(firstName,lastName){
        this.firstName = firstName;
        thsi.lastName = lastName;
    }
}
```

- Create a getter method named `fullName` that will return the full name of the person.
```js
class User{
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName(){
    return this.firstName + " " + this.lastName;
}
}

```

- Create a `fullName` setter method that will accept full name parameter of the person. It will update the `firstName` and `lastName` based on the input. (Say if the user passed `Arya Stark` it will update the `firstName` to `Arya` and `lastName` to `Stark`. It will also change one condition if the length of the name passed is less than 5 characters it will alert a message saying `Full name should be more than 5 characters`)
```js
class User{
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName(){
    return this.firstName + " " + this.lastName;
    }
    set fullName(value){
        if(value.length<5){
            alert(`Full name should be more than 5 characters`) 
        } else{
            let yoBro = value.split(" ")
            this.firstName = yoBro[0]
            this.lastName = yoBro[1]
        }
    
    }
}

```

- Create a method named `nameContains` which will accept string and will return `true` or `false` based on if the name of the user contains the text that passed by user.
```js
class User{
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName(){
    return this.firstName + " " + this.lastName;
    }
    set fullName(value){
        if(value.length<5){
            alert(`Full name should be more than 5 characters`) 
        } else{
            let yoBro = value.split(" ")
            this.firstName = yoBro[0]
            this.lastName = yoBro[1]
        }
    
    }
    nameContains(value){
      return  this.fullName.includes(value)
    }

}

```


- Create two instance of the `User` class
```js
let heftyUser = new User("rahul", "raushan")
let swordUser = new User("ravi","kant")
```

- Check by using the `fullName` setter method with name bigger than 5 characters.
```js
heftyUser.fullName = "luhar nahsuar"
swordUser.fullName = "tnak ivar"
```
- Check by using the `fullName` setter method with name less than 5 characters.
```js
heftyUser.fullName = "ravi"
swordUser.fullName = "rahu"
```


- Check the `fullName` using getter
```js
console.log(heftyUser.fullName)
console.log(swordUser.fullName)
```
- Check the `nameContains` method
```js
heftyUser.nameContains("abc")
swordUser.nameContains("tnak")
```