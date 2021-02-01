let balanceBtn = document.getElementById('getBalance');
let depositBtn = document.getElementById('makeDeposit');
let withdrawBtn = document.getElementById('makeWithdrawl');
let balance = 500;
balanceBtn.addEventListener("click", function(){
    alert(`${balance}`);
});

depositBtn.addEventListener("click", function(){
    let deposit = prompt('How much would you want to add?');
    if(deposit == ""){
        alert('Error: please enter number!')
    }
    else if(isNaN(deposit)){
        alert('Error: enter number');
    }

    else{
        balance += deposit;
        alert(`You now have ${balance} on your account`)
    }
})

withdrawBtn.addEventListener("click", function(){
    let withdrawal = prompt("How much would you like to withdraw?");

		if (withdrawal == "") {
            alert('Error: please enter number!');
        }
        else if (withdrawal >= balance) {
            alert(`You do not have enough money.`);
        }
        else {
			balance -= withdrawal;
            alert(`You have ${balance}$ left.`);
		}
})