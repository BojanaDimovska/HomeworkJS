let btn = document.getElementById("btn");
btn.addEventListener("click", function () {
    fetch('http://jsonplaceholder.typicode.com/todos')
        .then(response => {
            debugger;
            response.json()
        
        .then(data => {
            debugger;
            for (let i of data) {
                console.log(`Id: ${i.id}, title: ${i.title}`);
                if (i.completed === false) {
                    console.log('Not completed!')
                }
                else {
                    console.log('Completed!')
                }
            }
        })
        })
        .catch(err => {
            console.log(err);
        });

});
