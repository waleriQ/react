import React from 'react';
import './Main.css';
import Story from './Feed/Story';
import Post from './Feed/Post';

let Main = () => {
  return (
     <div className="main">
       <Story />
       <Post/>
     </div>

  );
}

export default Main;
