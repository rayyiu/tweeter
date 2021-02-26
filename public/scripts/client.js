/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// const loadTweets = function (action) {
//     console.log("loading posts");
//     $.ajax({ url: "/tweets" })
//         .then((res) => {
//             console.log(res)
//             renderTweets(res);
//         })
// }

// const renderTweets = function (tweets) {
//     $('#tweets-container').empty();
//     for (let tweet of tweets) {
//         const $tweet = createTweetElement(tweet);
//         $('#tweets-container').append($tweet);
//     }
//     // loops through tweets
//     // calls createTweetElement for each tweet
//     // takes return value and appends it to the tweets container
// }

const escape = function (str) {
    let div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
}

// <h3 class="tweet-text">${escape(tweet.content.text)}</h3>
const createTweetElement = function (tweet) {
    let $tweet = `<article class="tweet-article"> 
    <header class="tweet-main">
    <figure class="tweet-avatar-container">
      <img class="tweetAvatar" src="${tweet.user.avatars}" alt="this is your avatar">
     <figcaption> <a class="user-name"> ${tweet.user.name} </a> </figcaption>
    </figure>
      <a class="user-handle"> ${tweet.user.handle}</a>
    </header>
    <p>${escape(tweet.content.text)}</p>
    <footer class="tweet-footer">
</span>
    <div class="tweet-details">
      <div class="tweet-age">
        <h6>${moment(tweet.created_at).fromNow()}</h6>
      </div>
      <div class="emoji-footers">
      <a href="#"><i class="fa fa-flag"></i></a>
      <a href="#"><i class="fa fa-retweet"></i></a>
      <a href="#"><i class="fa fa-heart"></i></a>
    </div>
    </footer>
  </article>`
    return $tweet;
}

$(document).ready(function () {
    const renderTweets = function (tweets) {
        $('#tweets-container').empty();
        for (let tweet of tweets) {
            const $tweet = createTweetElement(tweet);
            $('#tweets-container').append($tweet);
        }
        // loops through tweets
        // calls createTweetElement for each tweet
        // takes return value and appends it to the tweets container
    }
    const loadTweets = function () {
        console.log("loading posts");
        $.ajax({ url: "/tweets" })
            .then((res) => {
                console.log(res)
                renderTweets(res);
            })
    }
    loadTweets()
    // $(function () {
    $("form").on('submit', function (event) {
        event.preventDefault();
        // $("#content-error").addClass("hide")
        // $("#length-error").addClass("hide")
        console.log('Button clicked, performing ajax call...');
        console.log($(".counter").val())
        if ($(".counter").val() == 140) {
            $("#content-error").slideDown('slow')
            // if ($("#content-error").is(".hide")) $("#content error").slideDown('slow')
        } else if ($(".counter").val() < 0) {
            $("#length-error").slideDown('slow')
        } else {
            console.log("serialize", $(this).serialize());
            $.ajax({ url: '/tweets', method: 'POST', data: $(this).serialize() })
                .then((res) => {
                    $("#content-error").slideUp('fast');
                    $("#length-error").slideUp('fast');
                    $("#tweet-text").val("");
                    $("#tweet-counter").val(140)
                    console.log(res)
                    return loadTweets();
                })
        }
    });
    // $("#write-a-new-tweet").on('click', function (event) {
    //     event.preventDefault();
    // })
});
