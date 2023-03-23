# Inheritance

Convert the below requirements into inheritance using prototypal patters.

#### Animal

Properties:

- `location`
- `numberOfLegs`

Methods

- `eat()` - log a message saying `I live in ${location} and I can eat`

- `changeLocation(newLocation)` - accepts location and updates the location of the animal

- `summary()` - returns `I live in ${location} and I have ${numberOfLegs}`


```js
let animalMethod = {
    eat:function(){
        return `I live in ${this.location} and I can eat`
    },
    changeLocation: function(newLocation){
        this.location = newLocation;
    },
    summary: function(){
        return `I live in ${this.location} and I have ${this.numberOfLegs} legs`

    },
};

function createAnimal(location, numberOfLegs){
    let animal = Object.create(animalMethod);
    animal.location = location;
    animal.numberOfLegs = numberOfLegs;
    return animal;
}
```

#### Dog

It will have all the properties and methods of the Animal. These are the extra properties and methods these dogs will have.

Properties:

- `name`
- `color`

Methods:

- `bark()` - alerts a message saying `I am ${name} and I can bark 🐶`
- `changeName(newName)` - accepts the name property and updates the name of the dog
- `changeColor(newColor)` - accepts the new color and updates the color of the dog
- `summary()` - returns `I am ${name} and I am of ${color} color. I can also bark`

```js
let animalMethod = {
    eat:function(){
        return `I live in ${this.location} and I can eat`
    },
    changeLocation: function(newLocation){
        this.location = newLocation;
    },
    summary: function(){
        return `I live in ${this.location} and I have ${this.numberOfLegs} legs`

    },
};

dogMethod = {
    bark:function(){
        return `I am ${this.name} and I can bark 🐶`
    },
    changeName:function(newName){
        this.name = newName;
    },
    changeColor:function(newColor){
        this.color = newColor;
    },
    summary:function(){
        return `I am ${this.name} and I am of ${this.color} color. I can also bark`
    },
};
Object.setPrototypeOf(dogMethod, animalMethod);

function createAnimal(location, numberOfLegs){
    let animal = Object.create(animalMethod);
    animal.location = location;
    animal.numberOfLegs = numberOfLegs;
    return animal;
}
function createDog(name,color){
    let dog = Object.create(dogMethod);
    dog.name = name;
    dog.color = color;
    return dog;
}

```

#### Cat

It will have all the properties and methods of the Animal. These are the extra properties and methods these dogs will have.

Properties:

- `name`
- `colorOfEyes`

Methods:

- `meow()` - alerts a message saying `I am ${name} and I can do mewo meow 😹`

- `changeName(newName)` - accepts the name property and updates the name of the dog

- `changeColorOfEyes(newColor)` - accepts the new color and updates the color of the dog

- `summary()` - returns `I am ${name} and the color of my eyes are ${colorOfEyes}. I can also do meow meow`

```js
let animalMethod = {
    eat:function(){
        return `I live in ${this.location} and I can eat`
    },
    changeLocation: function(newLocation){
        this.location = newLocation;
    },
    summary: function(){
        return `I live in ${this.location} and I have ${this.numberOfLegs} legs`

    },
};

catMethod = {
    meow:function(){
        return `I am ${this.name} and I can do mewo meow 😹`
    },
    changeName:function(newName){
        this.name = newName;
    },
    changeColorOfEyes:function(newColor){
        this.color = newColor;
    },
    summary:function(){
        return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`
    },
};
Object.setPrototypeOf(catMethod, animalMethod);

function createAnimal(location, numberOfLegs){
    let animal = Object.create(animalMethod);
    animal.location = location;
    animal.numberOfLegs = numberOfLegs;
    return animal;
}
function createCat(name,colorOfEyes){
    let cat = Object.create(catMethod);
    cat.name = name;
    cat.colorOfEyes = colorOfEyes;
    return cat;
}

```