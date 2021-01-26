$(document).ready(function(){
    $('#btn').click(function() {
        printAvg();
    })
    function printAvg(){
        let sum = $('#num1').val() + $('#num2').val() + $('#num3').val();
        let avg = sum/3;
        $('#avg').html(`<h1>Average:  ${avg}!</h1>`)
    
        if(avg >= 10){
            $('#avg').css("color", "green");
        }
        else{
            $('#avg').css("color", "red");
        }
    }

});


