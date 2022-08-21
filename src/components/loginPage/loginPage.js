import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { LOGIN, PASSWORD } from '../../constants/constants';
import { login, password } from '../../redux/actions/actions';
import './styles.css'

const LoginPage = () => {
    const state = useSelector (state => state.auth);
    const dispatch = useDispatch()

    const handlerLogin = (event) => {
        dispatch(login(LOGIN, event.target.value))
        console.log(state.login)
    }

    const handlerPassword = (event) => {
        dispatch(password(PASSWORD, event.target.value))
        console.log(state.password)
    }

    return (
        <form className='form'>
            <input 
                className='form__input'
                onChange={handlerLogin}
            />
            <input 
                className='form__input'
                onChange={handlerPassword}
            />
            <button 
                className='form__link'
                to='/'
                disabled={!(state.login === 'developer12' && state.password === '123456')}
                > Enter </button>
        </form>
    );
}

export default LoginPage;
