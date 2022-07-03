import { Avatar,Button } from '@mui/material';
import React, { useState } from 'react';
import './TweetBox.css';
import db from './firebase';

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "Aditya Tomar",
      username: "adityatomar_16",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://pps.whatsapp.net/v/t61.24694-24/287171336_482105077049092_4006746731336787337_n.jpg?ccb=11-4&oh=aaf2045c61a4cd24d64866438a51d8d8&oe=62C2D246"    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetbox">
      <form>
        <div className="tweetbox_input">
          <Avatar src="https://pps.whatsapp.net/v/t61.24694-24/287171336_482105077049092_4006746731336787337_n.jpg?ccb=11-4&oh=aaf2045c61a4cd24d64866438a51d8d8&oe=62C2D246" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetbox_inputImage"
          placeholder="Optional: Enter image URL"
          type="text"
        />

        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetbox_tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;