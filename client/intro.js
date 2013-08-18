var playerName;

$(function() {

    'use strict';

    var btn = $('#go');
    var playerHeading = $('#currentPlayer');
    var overlay = $('#overlay');
    var playerForm = $('.player-form');

    $(document).keypress(function(e){
        if(e.which == 13){
            btn.click();
        }
    });

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