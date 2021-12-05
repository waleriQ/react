import React from 'react';
import './Main.css';
import Story from './Feed/Story';
import Post from './Feed/Post';
import Rightbar from './Feed/Rightbar';
import Feedpost from './Feed/Feedpost';

let Main = (props) => {
  return (
     <div className="main">
       <Story />
       <Post dispatch={props.dispatch}/>
       <Rightbar FriendsRequestData={props.FriendsRequestData} ConfirmRequestData={props.ConfirmRequestData}/>
       <Feedpost  FeedPostsData={props.FeedPostsData}  />
     </div>

  );
}

export default Main;
