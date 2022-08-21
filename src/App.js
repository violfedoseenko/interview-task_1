import { useSelector } from 'react-redux';
import './App.css';
import LoginPage from './components/loginPage/loginPage';
// import { LoginPage } from './components/loginPage/loginPage';

function App() {
  // const state = useSelector(state => state.auth)
  // console.log(state)

  return (
    <div className='App'>
      <h1>Log in</h1>
      <LoginPage/>
    </div>
  );
}

export default App;
