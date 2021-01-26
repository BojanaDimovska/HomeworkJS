$(document).ready(function(){
    $('#btn').click(function() {
        $('#content').html(`<h1>Hello ${$('#fName').val()}!</h1>`)
    })
});
