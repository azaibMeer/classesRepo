
 class PersonAccount {
     constructor(firstName, lastName, income, incomeDescription, expense, expenseDescription) {
         this.firstName = firstName
         this.lastName = lastName
         this.incomes = [{
             income,
             incomeDescription
         }]
         this.expenses = [{
             expense,
             expenseDescription

         }]
     }

     income(){
        return console.log("income")
     }
     expense(){  
         return console.log("expense")
      }
      balance(){
         return console.log("balance")
      }
 }


 const detail = new PersonAccount("azaib","mir",10000,"gud_income",5000,"Extra save");
 console.log(detail);

 
 class Automobile {
     constructor(name, model, color, type) {
         this.name = name
         this.model = model
         this.color = color
         this.type = type
     }
     start() {
         return console.log("Car is ready to drive")
     }
     openDoor() {
         return console.log("Door is open")
     }
 }

 class Car extends Automobile {
     constructor(name, model, color, type,brand) {
         super(name, model, color, type)
         this.name = name
         this.model = model
         this.color = color
         this.type = type
         this.brand = brand
         

     }
 }
 class Bus extends Automobile {
     constructor(name, model, color, type, brand) {
         super(name, model, color, type)
         this.name = name
         this.model = model
         this.color = color
         this.type = type
         this.brand = brand
         

     }
 }

 class Truck extends Automobile {
     constructor(name, model, color, type, brand) {
         super(name, model, color, type)
         this.name = name
         this.model = model
         this.color = color
         this.type = type
         this.brand = brand
         

     }
 }

 const bus = new Bus("buss",2006,"red","w30","highfihgh");
 console.log(bus)
 bus.openDoor();
 bus.start()