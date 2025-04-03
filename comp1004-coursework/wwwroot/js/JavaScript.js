
$(document).ready(function () {

    $('index').click(function () {
        $('#page-content-wrapper').load('index.html');
    })

    $('#game').click(function () {
        $('#page-content-wrapper').load('game.html');
    })

    $('#data').click(function () {
        $('#page-content-wrapper').load('data.html');
    })
});