import React from 'react';
import './Header.css';

let Header = () => {
  return (
    <header>
      
      <div className="header__container">
      <div className="logo_wrapper">
  <div className="logo">
<a href=""><img className="logo__img" src="https://lh3.googleusercontent.com/proxy/ReqGAdZ1H_7GBmV-MQ2_o9EZjwvVaukuSevKKEINTj5RqT7l-AfCgr--pmmAhmBKxcJrO2vI3DtlJtB7KofjX7qEfsWS73jaF9p5pdTsZlGlzUU5" alt="" /></a>
   </div>
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
                <a href="" className="header__link">
                  <img src="https://cdn-icons-png.flaticon.com/512/263/263115.png" alt="" />
                </a>
              </li>
              <li className="header__item">
                <a href="" className="header__link">
                  <img src="https://cdn-icons.flaticon.com/png/512/5668/premium/5668021.png?token=exp=1637256686~hmac=4384e2a6864e3ad5cd81733384852dd1" alt="" />
                </a>
              </li>
              <li className="header__item">
                <a href="" className="header__link">
                  <img src="https://cdn-icons.flaticon.com/png/512/1666/premium/1666744.png?token=exp=1637256739~hmac=ab54b3205de17489405bab19a5a5fad1" alt="" />
                </a>
              </li>
              <li className="header__item">
                <a href="" className="header__link">
                  <img src="https://cdn-icons-png.flaticon.com/512/681/681443.png" alt="" />
                </a>
              </li>
              <li className="header__item">
                <a href="" className="header__link">
                  <img src="https://cdn-icons-png.flaticon.com/512/833/833314.png" alt="" />
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
                  <img src="https://cdn-icons-png.flaticon.com/512/1827/1827370.png" alt="" />
                </a>
              </li>
              <li className="icons__item">
                <a href="" className="icons__link">
                  <img src="https://cdn-icons.flaticon.com/png/512/3059/premium/3059975.png?token=exp=1637259541~hmac=49475261ad13859143ef1c2ff06599a4" alt="" />
                </a>
              </li>
              <li className="icons__item">
                <a href="" className="icons__link">
                  <img src="https://cdn-icons-png.flaticon.com/512/2230/2230277.png" alt="" />
                </a>
              </li>
              <li className="icons__item">
                <a href="" className="icons__link">
                  <img src="https://cdn-icons-png.flaticon.com/512/3011/3011270.png" alt="" />
                </a>
              </li>
            </ul>
          </div>
        </nav>


      </div>
    </header>
  )


};
export default Header;
