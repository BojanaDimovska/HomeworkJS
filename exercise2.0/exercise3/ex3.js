$(document).ready(function(){
    let btnPeople = $('#btnPeople');
    btnPeople.click(function(){
        $.ajax({
            url: "https://swapi.dev/api/people/?page=1",
            success: function(data){
                debugger;
                $('#result').html(data);
                },
                error: function(err){
                    alert(err);
                }
            })
})

})