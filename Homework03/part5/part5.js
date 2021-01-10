let balance = 500.0;
function withdrawMoney() {
    
    let withdrawal = prompt("How much would you like to withdraw?");

		if (withdrawal == "") {
            alert('Error: please enter a number!');
        }
        else if (withdrawal >= balance) {
            alert(`You do not have enough money.`);
        }
        else {
			balance -= withdrawal;
            alert(`You withdrawed ${withdrawal}$, you have ${balance}$ left.`);
		}
}
withdrawMoney();
