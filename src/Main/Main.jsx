import React from 'react';
import './Main.css';
import Story from './Feed/Story';
import Post from './Feed/Post';
import Rightbar from './Feed/Rightbar';

let Main = () => {
  return (
     <div className="main">
       <Story />
       <Post/>
       <Rightbar/>
     </div>

  );
}

export default Main;
