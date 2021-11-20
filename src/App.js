import './App.css';
import Header from './Header/Header';
import SideBar from './SideBar/SideBar';
import Main from './Main/Main';

let App = () => {
  return (
    <div className="page">
    <Header/>
    <SideBar />
    <Main/>
   
    </div>

  );
}

export default App;
