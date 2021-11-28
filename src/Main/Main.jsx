import React from 'react';
import './Main.css';
import Story from './Feed/Story';
import Post from './Feed/Post';
import Rightbar from './Feed/Rightbar';

let Main = (props) => {
  return (
     <div className="main">
       <Story />
       <Post/>
       <Rightbar FriendsRequestData={props.FriendsRequestData} ConfirmRequestData={props.ConfirmRequestData}/>
     </div>

  );
}

export default Main;
