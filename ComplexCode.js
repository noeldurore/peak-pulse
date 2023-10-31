/* 
  Filename: ComplexCode.js
  Description: A complex JavaScript code demonstrating a banking system with multiple classes and functions.
*/

class Bank {
  constructor(name) {
    this.name = name;
    this.accounts = [];
  }

  addAccount(account) {
    this.accounts.push(account);
  }

  getAccount(accountNumber) {
    return this.accounts.find(account => account.number === accountNumber);
  }

  getTotalBalance() {
    let total = 0;
    for (let account of this.accounts) {
      total += account.balance;
    }
    return total;
  }
}

class Account {
  constructor(number, owner) {
    this.number = number;
    this.owner = owner;
    this.balance = 0;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
    } else {
      console.log("Insufficient balance");
    }
  }
}

class Customer {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }

  openAccount(bank, initialDeposit) {
    const accountNumber = Math.floor(Math.random() * 100000);
    const account = new Account(accountNumber, this);
    account.deposit(initialDeposit);
    bank.addAccount(account);
    console.log(`Account opened successfully!\nAccount Number: ${accountNumber}`);
  }

  deposit(bank, accountNumber, amount) {
    const account = bank.getAccount(accountNumber);
    if (account) {
      account.deposit(amount);
      console.log(`Deposit successful!\nCurrent balance: ${account.balance}`);
    } else {
      console.log("Account not found");
    }
  }

  withdraw(bank, accountNumber, amount) {
    const account = bank.getAccount(accountNumber);
    if (account) {
      account.withdraw(amount);
      console.log(`Withdrawal successful!\nCurrent balance: ${account.balance}`);
    } else {
      console.log("Account not found");
    }
  }
}

// Usage

const bank = new Bank("My Bank");

const customer1 = new Customer("John Doe", "123 Main St");
const customer2 = new Customer("Jane Smith", "456 Second St");

customer1.openAccount(bank, 1000);
customer2.openAccount(bank, 500);

customer1.deposit(bank, 12345, 500); // Invalid account number
customer1.deposit(bank, 10001, 500); // Valid account number
customer1.withdraw(bank, 10001, 200); // Valid account number
customer2.withdraw(bank, 10002, 1000); // Valid account number

console.log(`Total balance in the bank: ${bank.getTotalBalance()}`);