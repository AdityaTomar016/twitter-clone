import { Avatar } from '@mui/material'
import './Post.css';
import React, {forwardRef} from 'react'
import VerifiedTwoToneIcon from '@mui/icons-material/VerifiedTwoTone';
import ChatBubbleOutlineTwoToneIcon from '@mui/icons-material/ChatBubbleOutlineTwoTone';
import RepeatTwoToneIcon from '@mui/icons-material/RepeatTwoTone';
import FavoriteBorderTwoToneIcon from '@mui/icons-material/FavoriteBorderTwoTone';
import PublishTwoToneIcon from '@mui/icons-material/PublishTwoTone';

const Post = forwardRef(({displayName, username, verified, text, avatar, image}, ref) => {
   
  return (
    <div className='post' ref={ref}>
       <div className='post_avatar'>
        <Avatar src={avatar}></Avatar>
       </div>

       <div className='post_body'>
        <div className='post_header'>
            <div className='post_headerText'>
                <h3>
                    {displayName}{" "} <span className="post_headerSpecial">
                    {verified && < VerifiedTwoToneIcon className='post_badge'/>}{username}
                    </span>
                </h3>
            </div>
            <div className='post_headerDescription'>
                <p>{text}</p>
            </div>
        </div>
        <img src={image} alt="not found"></img>
       
        <div className='post_footer'>
        <ChatBubbleOutlineTwoToneIcon fontSize='small'/>
        <RepeatTwoToneIcon fontSize='small'/>
        <FavoriteBorderTwoToneIcon fontSize='small'/>
        <PublishTwoToneIcon fontSize='small'/>
        </div>
    
       </div>

    </div>
  )
});

export default Post