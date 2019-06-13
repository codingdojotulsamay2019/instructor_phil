$(document).ready(function(){
    $.ajax({
        url: '/pets',
        method: 'get'
    })
    .done(function(response){
        // response should be the needed html
        console.log(response);
        $('tbody').html(response);
    })
    alert('working jQuery');
    // form submit to get a html template in the response
    // $('form').submit(function(){
    //     console.log($(this));
    //     console.log($(this).serialize());
    //     // send to the server
    //     $.ajax({
    //         url: '/pets',
    //         method: 'post',
    //         data: $(this).serialize()
    //     })
    //     .done(function(response){
    //         console.log(response);
    //         $('tbody').html(response);
    //         $('form')[0].reset();
    //     })
    //     return false;
    // })
    // form submit for getting a json result
    $('form').submit(function(){
        console.log($(this));
        console.log($(this).serialize());
        // send to the server
        $.ajax({
            url: '/pets',
            method: 'post',
            data: $(this).serialize(),
            dataType: 'json'
        })
        .done(function(response){
            console.log(response);
            var html_str = `<tr><td>${response.id}</td><td>${response.name}</td><td>${response.type}</td></tr>`;
            $('tbody').append(html_str);
            $('form')[0].reset();
        })
        return false;
    })
})