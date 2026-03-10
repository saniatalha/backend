const fruitsArray = require('../fruits.json')

class FruitModel {
    constructor(fruit) {
        this.genus = fruit.genus;
        this.name = fruit.name;
        this.id = fruit.id;
        this.family = fruit.family;
        this.order = fruit.order;
        this.nutritions = fruit.nutritions;
    }

 static showAllFruits() {
    return fruitsArray.map(f => new FruitModel(f))
 }
 static showFruit(name) {
    const fruits = fruitsArray.find(fruit => 
        fruit.name.toLowerCase().startsWith(name.toLowerCase()))
 
 if(fruits) {
    return new FruitModel(fruits)
 }else {
throw "No Fruits found with that name"
 }

}

static create(data) {
    const newFruit = data;
    console.log(newFruit) //this is only for debugging

    newFruit["id"] = fruitsArray.length + 1;

    fruitsArray.push(newFruit);

    return new FruitModel(newFruit)
}
update(data) {
    //find a fruit
    //return back an object
    //find the object and change the name property
    // return back the object to check the name has been changed

    const updateFruit = fruitsArray.find(fruit => fruit.name.toLowerCase() === this.name.toLowerCase())
    if(updateFruit) {
        updateFruit.name = data.name
        return new FruitModel(updateFruit)
    }else {
        throw "Fruit not found"
    }
}
}

module.exports =FruitModel