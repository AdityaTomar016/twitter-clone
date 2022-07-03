import React from 'react';
import "./Widgets.css";
import { TwitterTimelineEmbed,  TwitterTweetEmbed} from 'react-twitter-embed';
import SearchIcon from '@mui/icons-material/Search';

function Widgets() {
  return (
    <div className='widgets'>
        <div className='widgets_input'>
         <SearchIcon className='widgets_searchIcon' />
         <input placeholder='Search Twitter' type="text" ></input> 
        </div>
        
        <div className='widgets_widgetContainer'>
          <h2>What's happening</h2>
          <TwitterTweetEmbed tweetId={"1539405454371168258"}/>

          <TwitterTimelineEmbed
          sourceType='profile'
          screenName='adityatomar_16'
          options={{height: 400}}
          />
        </div>
    </div>
  )
}

export default Widgets;