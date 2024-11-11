//Use this class in some PW test. Use deposit() to add money and getBalance() methods for example log some result message in terminal: "Ballance is: x."
 
class BankAccount {
    private balance: number;
 
    constructor(balance: number) {
        this.balance = balance;
    }
 
    deposit(amount: number) {
        this.balance += amount;
    }
 
    getBalance(): number {
        return this.balance;
    }
}
 