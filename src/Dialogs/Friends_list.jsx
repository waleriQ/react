import React from 'react';
import './Friends_list.css';
import { Link } from 'react-router-dom';


let User = (props) => {
  return (
    <div className="user">
      <div className="avatar">
        <a href="">
          <img src={props.img} alt="user photo" />
        </a>
      </div>
      <ul className="user_list">
        <li className="user_name">
          <a href="">{props.name}</a>
        </li>
        <li className="user_job">
          {props.job}
        </li>
        <li className="user_message">
          <Link to={props.link + props.id}>Writing user</Link>
        </li>
      </ul>
    </div>
  )
  }
  


let Friends_list = (props) => {


  

    let userElements = props.userData.map( userNewMassive => <User name={userNewMassive.name} link={userNewMassive.link} id={userNewMassive.id} job={userNewMassive.job} img={userNewMassive.img} /> 
      );
    
 

  return (
    <div className="friends">
      <div className="search_friends">
        <form className="form_search_friend" action="" method="post">
          <input className="input_search_friend" src="./images/search.svg" type="text" placeholder="Search your friend..." />
        </form>
        <div className="parametrs">
          <p><a href="">Параметры</a></p>
        </div>
      </div>
       
      {
        userElements
      }

    </div>
  )
};
export default Friends_list;

