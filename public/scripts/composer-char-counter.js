$(document).ready(function () {
    console.log("#tweet-text")
    // $("tweet-text").on('keyup', )
    $("#tweet-text").on('keyup', function () {
        const numOfCharacters = $("#tweet-text").val().length;
        console.log(numOfCharacters);
        const max = 140;
        const remainingChar = max - numOfCharacters;
        const remainingElem = $("#tweet-counter").text(remainingChar);
        remainingElem.toggleClass("red-font", (remainingChar < 0));
    });
});