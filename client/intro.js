var playerName;

$(function() {

    var btn = $('#go');
    var playerHeading = $('#currentPlayer');
    var overlay = $('#overlay');
    var playerForm = $('.player-form');

    btn.on('click', function() {

        playerName = $('#player-name').val();
        $(playerHeading).text(playerName);

        if(playerName) {
            overlay.hide();
            playerForm.hide();
            startGame();
        }

    });

});