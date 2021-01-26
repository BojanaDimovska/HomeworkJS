$(document).ready(function(){

    $('#btn').click(function(){
        $('#myColor')
    .find('option')
    .remove()
    .end()
    .append('<option value="plusOne">Yellow</option>')
    .val('plusOne');  

    // if(isColor($('#myColor').val())) {
    //     $('#content').text($('#content').val()).css('color', $('#myColor').val())
    // }

        $.each($("#myColor option:selected"), function(){            
            $('#myColor').push($(this).val());
        });
        $('#content').html('You chose this color');
        $('#content').css("color", "yellow");
    });
    });
    
    // function isColor(strColor){
    //     var s = new Option().style;
    //     s.color = strColor;
    //     return s.color == strColor;
    // }
