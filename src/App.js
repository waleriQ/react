import './App.css';
import Header from './Header/Header';
import SideBar from './SideBar/SideBar';
import Main from './Main/Main';
import Profile from './Profile/Profile';
import {BrowserRouter, Routes, Route, Link,} from 'react-router-dom';
import Dialogs from './Dialogs/Dialogs';

let App = () => {
  return (
    <div className="page">
      <Header />
      <SideBar />
      <Routes>
        <Route path='/feeds' element={<Main />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/dialogs' element={<Dialogs />} />
        {/* <Route path='*' element={<Notfoundpage/>} /> */}
      </Routes>
    </div>
  );
}

export default App;
