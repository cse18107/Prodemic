import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.js';
import UsersPage from './pages/UsersPage/UsersPage.js';
import UserEdit from './pages/UserEdit/UserEdit.js';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:user_name' element={<UsersPage/>}/>
        <Route path='/:user_name/editor' element={<UserEdit/>}/>
      </Routes>
    </div>
  );
}

export default App;
