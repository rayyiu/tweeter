/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function () {
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

    const data = [
        {
            "user": {
                "name": "Newton",
                "avatars": "https://i.imgur.com/73hZDYK.png"
                ,
                "handle": "@SirIsaac"
            },
            "content": {
                "text": "If I have seen further it is by standing on the shoulders of giants"
            },
            "created_at": 1461116232227
        },
        {
            "user": {
                "name": "Descartes",
                "avatars": "https://i.imgur.com/nlhLi3I.png",
                "handle": "@rd"
            },
            "content": {
                "text": "Je pense , donc je suis"
            },
            "created_at": 1461113959088
        }
    ]

    const renderTweets = function (tweets) {
        for (let tweet of tweets) {
            const $tweet = createTweetElement(tweet);
            $('#tweets-container').append($tweet);
        }
        // loops through tweets
        // calls createTweetElement for each tweet
        // takes return value and appends it to the tweets container
    }
    renderTweets(data);
})