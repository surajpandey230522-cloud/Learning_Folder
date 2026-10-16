let balance = 10000;

function checkBalance() {
    console.log("Current Balance:", balance);
}

function credit(amount) {
    balance = balance + amount;
    console.log("Credited:", amount);
    console.log("New Balance:", balance);
}

function debit(amount) {
    if (amount > balance) {
        console.log("Insufficient Balance");
    } else {
        balance = balance - amount;
        console.log("Debited:", amount);
        console.log("New Balance:", balance);
    }
}



checkBalance();


credit(5000);


debit(2000);


checkBalance();