import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './components/loginPage/loginPage';
import ProfilePage from './components/profilePage/profilePage';
import './App.css';
// import { LoginPage } from './components/loginPage/loginPage';

function App() {
  const state = useSelector(state => state.auth)
  // console.log(state)

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<LoginPage/>}/>
            <Route path='/profile' element={<ProfilePage login={state.login}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
