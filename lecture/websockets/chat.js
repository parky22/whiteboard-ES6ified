$(function () {

    /* 1 */
    //enables the front to connect to the server --> web socket
    var socket = io(window.location.origin);
    var $main = $('main');
    var $input = $('input');

    var createUserMessage = function (messageDetails) {
        return '<h3><span>' + messageDetails.name + '</span>: ' + messageDetails.message + '</h3>';
    };

    $input.on('keydown', function (e) {
        if (e.keyCode !== 13) return; //13 === enter press
        var message = $input.val();
        $input.val(null);
        /* 2 */
        socket.emit('newMessage', message);
    });

    /* 3 */
    socket.on('connect', function () {
        //after connection, listens for an event!
        socket.on('chatMessage', function (message) {
            $main.append('<span>'+ message +'</span>');
        });

    });


});

