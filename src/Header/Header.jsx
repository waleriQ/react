import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

let Header = () => {
  return (
    <header className="header" >
      <div className="header__container">
  <div className="logo">
<a href=""><img className="logo__img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Slack_Technologies_Logo.svg/1280px-Slack_Technologies_Logo.svg.png" alt="" /></a>
   </div>
        <div className="search__container">
          <form className="search" method="post" >
            <input className="search__input" placeholder="Start typing to text..." type='text' />
          </form>
        </div>

        <nav>
          <div className="header__menu">
            <ul className="header__list">
              <li className="header__item">
                <Link to="/feeds" className="header__link">
                  <img src="/images/home.svg" alt="home" />
                </Link>
              </li>
              <li className="header__item">
                <a href="" className="header__link">
                  <img src="/images/move.svg" alt="move" />
                </a>
              </li>
              <li className="header__item">
                <a href="" className="header__link">
                  <img src="/images/photo-group.svg" alt="stories" />
                </a>
              </li>
              <li className="header__item">
                <Link to="/friends" className="header__link">
                  <img src="/images/user-group.svg" alt="friends" />
                </Link>
              </li>
              <li className="header__item">
                <a href="" className="header__link">
                  <img src="/images/shopping-bag.svg" alt="shopping" />
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <nav>
          <div className="icons__menu">
            <ul className="icons__list">
              <li className="icons__item">
                <a href="" className="icons__link">
                  <img src="/images/bell.svg" alt="bell" />
                </a>
              </li>
              <li className="icons__item">
                <Link to="/dialogs" className="icons__link">
                  <img src="/images/conversation.svg" alt="conversation" />
                </Link>
              </li>
              <li className="icons__item">
                <a href="" className="icons__link">
                  <img src="/images/brightness-medium.svg" alt="brightness" />
                </a>
              </li>
              <li className="icons__item">
                <Link to="/profile" className="icons__link icons__link_profile">
                  <img src="/images/man.jpeg" alt="profile" />
                </Link>
              </li>
            </ul>
          </div>
        </nav>


      </div>
    </header>
  )


};
export default Header;
