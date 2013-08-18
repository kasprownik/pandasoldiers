
$(function() {

    var btn = $('#go');
    var playerName;
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