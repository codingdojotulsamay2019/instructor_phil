$(document).ready(function(){
    alert('working jQuery');
    console.log($('button').attr('id'));

    $('button').click(function(){
        $(this).attr('id', 'changed');
        $(this).addClass('big');
        $(this).addClass('big');
        console.log($('button').attr('id'));
    })
})