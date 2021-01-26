$(document).ready(function(){
    $('#btn').click(function() {
       
        if ($('#txt').val() === '' || $('#color').val() === ''){
            $('#msg').text('You need to enter your text and color!')
        }
        else {
            if(isColor($('#colorPicker').val())) {
                $('#msg').text($('#txt').val()).css('color', $('#colorPicker').val())
            } else {
                $('#msg').text('Please enter properly your color')
            }
            
        }
    })

});

function isColor(strColor){
    var s = new Option().style;
    s.color = strColor;
    return s.color == strColor;
}
// console.log(isColor(''))