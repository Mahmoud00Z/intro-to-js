
/*
const students = [
    { name: "Alice", scores: [90, 85, 92] },
    { name: "Bob", scores: [70, 68, 72] },
    { name: "Charlie", scores: [100, 100, 100] }
];

function generateReports(students) {
    return students.map(student => { // O(n) where n is the number of students
        const average = student.scores.reduce((sum, score) => sum + score, 0) / student.scores.length; // O(m) where m is the number of scores per student
        const grade = average >= 90 ? 'A' : // O(1) 
                      average >= 80 ? 'B' :
                      average >= 70 ? 'C' :
                      average >= 60 ? 'D' :
                        'F';
        return { // O(1)
            name: student.name,
            average: average,
            grade: grade
        }; 
    });
    }; // O(n*m) where n is the number of students and m is the number of scores per student, in this case O(3*3) = O(9)

generateReports(students);

class BankAccount {
    constructor(ownerName, initialBalance) {
        this.ownerName = ownerName;
        this.balance = initialBalance; // O(1)
    }
    deposit(amount) {
        this.balance += amount;
        return this.balance; // O(1)
    }

    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient balance");
            return this.balance;
        }
        this.balance -= amount;
        return this.balance; // O(1)
    }

    transferTo(account, amount) {
        if (amount > this.balance) {
            console.log("Insufficient balance");
            return this.balance;
        }
        this.withdraw(amount);
        account.deposit(amount); 
        return this.balance; // O(1) for the whole method
    }
    getSummary() {
        return ` ${this.ownerName}'s balance is ${this.balance}`; // O(1)
    }
}; // walla 3nde midterm bokra l khamis 17/4 ma adr a3ml l bonus 🙃 
    
*/
const task_input = document.querySelector(".task-input");
const add_button = document.querySelector(".add-btn");
const task_list = document.querySelector(".task-list");

add_button.addEventListener("click", function() {
    const task_text = task_input.value.trim();
    if (task_text !== "") {
        const  list_item = document.createElement("li");
        list_item.textContent = task_text;
        task_list.appendChild(list_item);
        task_input.value = ""; 
    }

});