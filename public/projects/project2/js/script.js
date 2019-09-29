var count = 0;
var cats = ["img/cat1.png", "img/cat2.png", "img/cat3.png"];

$("button").on("click", spin);

function write_message(message) {
    $('#messages').html(message);
}

function spin() {
    
    if (count > 0) {
        refreshCount(-1);

        var one = Math.floor((Math.random() * 3));
        var two = Math.floor((Math.random() * 3));
        var three = Math.floor((Math.random() * 3));

        document.getElementById('first').src = cats[one];
        document.getElementById('second').src = cats[two];
        document.getElementById('third').src = cats[three];

        if (one == two && two == three && three == one) {
            
            write_message('winner! Heres 5 more plays!');
            refreshCount(5);
        }
        else {
            write_message('Loser.');
        }
    }
    
    else {
        write_message('Enter how many times you want to play!');
    }
}

function refreshCount(value) {
    
    count = count + value;
    $("#p2").html(count);
    
}

function initialCount(value) {
    
    count = parseInt(count) + parseInt($('#plays').val().trim());
    $("#p2").html(count);
    
}