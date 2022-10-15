let AutoMobile = class {
  constructor(name, model,color,price) {
    this.name = name;
    this.model = model;
    this.color = color;
    this.price = price;
  }
  start(){
  	return "log car ready for drive";
  }
  openDoor(){
  	return "log door is open";
  }
};

class Car extends AutoMobile {
  constructor(name, model,color,price) {
    super(name, model,color,price);
    this.name = name;
    this.model = model;
    this.color = color;
    this.price = price;
  }
  
}
class Trucks extends AutoMobile {
  constructor(name, model,color,price) {
    super(name, model,color,price);
    this.name = name;
    this.model = model;
    this.color = color;
    this.price = price;
  }
  
}
class Bus extends AutoMobile {
  constructor(name, model,color,price) {
    super(name, model,color,price);
    this.name = name;
    this.model = model;
    this.color = color;
    this.price = price;
  }
  
}
let automobile = new AutoMobile("civic", 2017,"white","200000");
let trucks = new AutoMobile("truck", 2027,"black","47850000");
 console.log(automobile.trucks.name);