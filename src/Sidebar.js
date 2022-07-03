import React from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import TwitterIcon from '@mui/icons-material/Twitter';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';


function Sidebar() {
  return (
    <div className='sidebar'>
        
        {/*Twitter-icon*/}
         <TwitterIcon className='sidebar_twitterIcon'/>

         <SidebarOption active Icon={HomeIcon} text="Home" /> 
         <SidebarOption Icon={SearchIcon} text="Explore" /> 
         <SidebarOption Icon={NotificationsIcon} text="Notifications"/>
         <SidebarOption Icon={MailOutlineIcon} text="Messages"/> 
         <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks"/>
         <SidebarOption Icon={ListAltIcon} text="Lists"/>
         <SidebarOption Icon={PermIdentityIcon} text="Profile"/>
         <SidebarOption Icon={MoreHorizIcon} text="More"/>


        <Button variant="outlined" className="sidebar_tweet" fullWidth >Tweet</Button>
         
         


    </div>
  )
}

export default Sidebar;