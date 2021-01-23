import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={"1331273790676938756"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="e_habibipanah"
          options={{ height: 400 }}
        />
        <br />
        <h6>Share in Twitter</h6>
        <div>
          <TwitterShareButton
            url={"https://www.twitter-clone.erfanhabibipanah.dev/projects"}
            options={{ text: "Twitter-Clone", via: "e_habibipanah" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Widgets;
