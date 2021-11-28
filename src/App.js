import './App.css';
import Header from './Header/Header';
import SideBar from './SideBar/SideBar';
import Main from './Main/Main';
import Profile from './Profile/Profile';
import {BrowserRouter, Routes, Route, Link,} from 'react-router-dom';
import Dialogs from './Dialogs/Dialogs';
import Friends_list from './Dialogs/Friends_list';



let App = (props) => {
  return (
    <div className="page">
      <Header />
      <SideBar />
      <div className="wrapper_page">
      <Routes>
        <Route path='/feeds' element={<Main FriendsRequestData={props.stateData.FriendsRequestData} ConfirmRequestData={props.stateData.ConfirmRequestData} />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/dialogs' element={<Dialogs />} />
        <Route path='/friends' element={<Friends_list userData={props.stateData.userData} />} />
        {/* <Route path='*' element={<Notfoundpage/>} /> */}
      </Routes>
      </div>
    </div>
  );
}

export default App;
