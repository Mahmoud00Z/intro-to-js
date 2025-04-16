const students = [
    { name: "Alice", scores: [90, 85, 92] },
    { name: "Bob", scores: [70, 68, 72] },
    { name: "Charlie", scores: [100, 100, 100] }
];

function generateReports(students) {
    return students.map(student => {
        const average = student.scores.reduce((sum, score) => sum + score, 0) / student.scores.length;
        const grade = average >= 90 ? 'A' :
                      average >= 80 ? 'B' :
                      average >= 70 ? 'C' :
                      average >= 60 ? 'D' :
                        'F';
        return {
            name: student.name,
            average: average,
            grade: grade
        }; 
    });
    };

generateReports(students);

class BankAccount {
    constructor(ownerName, initialBalance) {
        this.ownerName = ownerName;
        this.balance = initialBalance;
        
    }
    deposit(amount) {
        this.balance += amount;
        return this.balance;
    }

    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient balance");
            return this.balance;
        }
        this.balance -= amount;
        return this.balance;
    }

    transferTo(account, amount) {
        if (amount > this.balance) {
            console.log("Insufficient balance");
            return this.balance;
        }
        this.withdraw(amount);
        account.deposit(amount);
        return this.balance;
    }
    getSummary() {
        return ` ${this.ownerName}'s Balance is ${this.balance}`;
    }
};
    