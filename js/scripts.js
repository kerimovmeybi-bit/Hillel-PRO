//Home-work17.1
class Calculator {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    if (b === 0) {
      throw new Error("Ділення на нуль неможливе");
    }
    return a / b;
  }
}

const calc = new Calculator();

console.log(calc.add(5, 3));        
console.log(calc.subtract(10, 4));  
console.log(calc.multiply(3, 6));   
console.log(calc.divide(8, 2));     

//Home-work17.2
class Coach {
  constructor(name, specialization, rating) {
    this.name = name;
    this.specialization = specialization;
    this.rating = rating;
  }

  displayInfo() {
    console.log(
      `Coach: ${this.name}, Specialization: ${this.specialization}, Rating: ${this.rating}`
    );
  }
}

const coach1 = new Coach('John Doe', 'Fitness', 4.7);
const coach2 = new Coach('Alice Smith', 'Yoga', 4.9);

coach1.displayInfo();
coach2.displayInfo();

//Home-work17.3
class BankAccount {
  constructor(initialBalance) {
    this.balance = initialBalance;
  }

  getBalance() {
    return this.balance;
  }

  deposit(amount) {
    if (amount <= 0) {
      throw new Error('Сума для внесення має бути більшою за 0');
    }
    this.balance += amount;
  }

  withdraw(amount) {
    if (amount <= 0) {
      throw new Error('Сума для зняття має бути більшою за 0');
    }
    if (amount > this.balance) {
      throw new Error('Недостатньо коштів на рахунку');
    }
    this.balance -= amount;
  }
}

const account1 = new BankAccount(1000);

console.log(account1.getBalance()); 

account1.deposit(500);
console.log(account1.getBalance()); 

account1.withdraw(200);
console.log(account1.getBalance()); 

