$(document).ready(function(){
    let btn = $("#btn");
    btn.click(function(){
        $.ajax({
            url: "https://jsonplaceholder.typicode.com/todos",
            success: function(arr){ 
                debugger;
                console.log(arr);
                console.log("To do's");
                for(let i of arr){ 
                    console.log(`Id: ${i.id}, title: ${i.title}`);
                    if (i.completed === false){
                        console.log('Not completed!')
                }
                else {
                    console.log('Completed!')
                }
                }
            },
            error: function(err){
                debugger;
                console.log(err);
            }
        }); 
    })
}); 