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

  let userData = [
    {id:1, name: 'Alex Mitchel', link: '/dialogs/1', job: "Front-end devevoper", img: "https://likeyou.io/wp-content/uploads/2019/07/TiOa5ytjq-k.jpg"},
    {id:2, name: 'Dorian Gray', link: "/dialogs/2", job: "Actor", img: "https://www.film.ru/sites/default/files/styles/thumb_600x680/public/articles/1452017-1173790.jpg"},
    {id:3, name: 'Antony Smith', link: "/dialogs/3", job: "Doctor", img: "https://top10a.ru/wp-content/uploads/2019/09/10-82.jpg"},
   {id:4, name: 'Mattew Andruwson', link: "/dialogs/4", job: "Fireman", img: "https://st2.depositphotos.com/1001959/11727/i/950/depositphotos_117270814-stock-photo-firefighter-in-oxygen-mask.jpg"},
  {id:5, name: 'Milla Cotlin', link: "/dialogs/5", job: "Lawyer", img: "https://clutch.net.ua/images/2019/07/31/7uvUpQUmopj6G6J4iNfa1FXRXSzFJdFxv62JBJTZ.jpeg"},

    ]

    let userElements = userData
    .map( userNewMassive => <User name={userNewMassive.name} link={userNewMassive.link} id={userNewMassive.id} job={userNewMassive.job} img={userNewMassive.img} /> 
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

