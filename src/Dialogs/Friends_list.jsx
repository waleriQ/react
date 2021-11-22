import React from 'react';
import './Friends_list.css';
import {Link} from 'react-router-dom';


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
};
let Friends_list = (props) => {
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

<User name="Alex Mitchel" link="/dialogs/1 " id="1" job="Front-end devevoper" img="https://likeyou.io/wp-content/uploads/2019/07/TiOa5ytjq-k.jpg" />
<User name="Dorian Gray" link="/dialogs/2" id="2" job="Actor" img="https://www.film.ru/sites/default/files/styles/thumb_600x680/public/articles/1452017-1173790.jpg" />
<User name="Antony Smith" link="/dialogs/3" id="3" job="Doctor" img="https://top10a.ru/wp-content/uploads/2019/09/10-82.jpg" />
<User name="Mattew Andruwson" link="/dialogs/4" id="4" job="Fireman" img="https://st2.depositphotos.com/1001959/11727/i/950/depositphotos_117270814-stock-photo-firefighter-in-oxygen-mask.jpg" />
<User name="Alex Mitchel" link="/dialogs/5" id="5" job="Front-end devevoper" img="https://likeyou.io/wp-content/uploads/2019/07/TiOa5ytjq-k.jpg" />
<User name="Dorian Gray" link="/dialogs/6" id="6" job="Actor" img="https://www.film.ru/sites/default/files/styles/thumb_600x680/public/articles/1452017-1173790.jpg" />
<User name="Antony Smith" link="/dialogs/7" id="7" job="Doctor" img="https://top10a.ru/wp-content/uploads/2019/09/10-82.jpg" />
<User name="Mattew Andruwson" link="/dialogs/8" id="8" job="Fireman" img="https://st2.depositphotos.com/1001959/11727/i/950/depositphotos_117270814-stock-photo-firefighter-in-oxygen-mask.jpg" />

    </div>
  )
};
export default Friends_list;

