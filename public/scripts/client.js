/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const loadTweets = function (action) {
    console.log("loading posts");
    $.ajax({ url: "/tweets" })
        .then((res) => {
            console.log(res)
            renderTweets(res);
        })
}

const renderTweets = function (tweets) {
    for (let tweet of tweets) {
        const $tweet = createTweetElement(tweet);
        $('#tweets-container').append($tweet);
    }
    // loops through tweets
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container
}



const createTweetElement = function (tweet) {
    let $tweet = `<article> 
    <header>
      <img class="tweetAvatar"src="${tweet.user.avatars}">
      <h3>${tweet.user.name}</h3>
      <h3>${tweet.user.handle}</h3>
    </header>
    <p>${tweet.content.text}</p>
    <footer>
    <a>${tweet.created_at}</a>

    </footer>
  </article>`
    return $tweet;
}

$(document).ready(function () {
    loadTweets()
    $(function () {
        $("form").on('submit', function (event) {
            event.preventDefault();
            console.log('Button clicked, performing ajax call...');
            console.log("serialize", $(this).serialize());
            $.ajax({ url: '/tweets', method: 'POST', data: $(this).serialize() }, function (index) {
                console.log('Success: ', index);
                return loadTweets();
            });
            // .then(function (index) {
            //     console.log('Success: ', index);
            // });
        });
    });
})