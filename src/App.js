import './App.css';
import Header from './Header/Header';
import SideBar from './SideBar/SideBar';
import Story from './Main/Feed/Story';

let App = () => {
  return (
    <div className="page">
    <Header/>
    <SideBar />
    <Story/>
   
    </div>

  );
}

export default App;
