import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

let userData = [
  { id: 1, name: 'Alex Mitchel', link: '/dialogs/1', job: "Front-end devevoper", img: "https://likeyou.io/wp-content/uploads/2019/07/TiOa5ytjq-k.jpg" },
  { id: 2, name: 'Dorian Gray', link: "/dialogs/2", job: "Actor", img: "https://www.film.ru/sites/default/files/styles/thumb_600x680/public/articles/1452017-1173790.jpg" },
  { id: 3, name: 'Antony Smith', link: "/dialogs/3", job: "Doctor", img: "https://top10a.ru/wp-content/uploads/2019/09/10-82.jpg" },
  { id: 4, name: 'Mattew Andruwson', link: "/dialogs/4", job: "Fireman", img: "https://st2.depositphotos.com/1001959/11727/i/950/depositphotos_117270814-stock-photo-firefighter-in-oxygen-mask.jpg" },
  { id: 5, name: 'Milla Cotlin', link: "/dialogs/5", job: "Lawyer", img: "https://clutch.net.ua/images/2019/07/31/7uvUpQUmopj6G6J4iNfa1FXRXSzFJdFxv62JBJTZ.jpeg" },
]

let FriendsRequestData = [
  { name: 'Antony Daugloy', mutual: '12', img: 'https://bugaga.ru/uploads/posts/2016-07/1469432833_mister-world-3.jpg' },
  { name: 'Glorya Mitchel', mutual: '4', img: 'https://miro.medium.com/max/9216/0*KEs-jZkVHlcbBEuY' },
  { name: 'Ivelina Campbell', mutual: '2', img: 'https://miro.medium.com/max/1200/1*LPPpUZLved9uY_9gvRgRlw.jpeg' },
]

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App userData={userData} FriendsRequestData={FriendsRequestData} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
