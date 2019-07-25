$(document).ready(function(){
    console.log(2);
    console.log('I am waiting');
    $('button').click(function(){
        var user_input = $('input').val();
        $('input').val('');
        // $.get(`https://pokeapi.co/api/v2/pokemon/${user_input}/`, myFunction, 'json');
        $.ajax({
            url: `https://pokeapi.co/api/v2/pokemon/${user_input}/`,
            method: 'get',
            dataType: 'json',
            success: myFunction,
            error: function(err){
                $('#main').html('<h1 class="text-danger">Invalid input</h1>');
            }
        })
    })
})
console.log(1);


function myFunction(bulb) {
    console.log(bulb.name);

    var moves = "";
    
    for(var m in bulb.moves){
        moves += `<li>${bulb.moves[m].move.name}</li>`;
    }
    
    var html_builder = `<img src="${bulb.sprites.front_default}" alt="${bulb.name}"></img>
    <table class="table">
        <tr>
            <td>Name:</td>
            <td>${bulb.name}</td>
        </tr>
        <tr>
            <td>Height:</td>
            <td>${bulb.height}</td>
        </tr>
        <tr>
            <td>Moves:</td>
            <td>
                <ul>
                    ${moves}
                </ul>
            </td>
        </tr>
    </table>`;

    $('#main').html(html_builder);
}