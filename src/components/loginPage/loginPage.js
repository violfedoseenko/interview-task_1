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
     
    const enabeledLink = (state.login === 'developer12') && (state.password === '123456');

    return (
        <>
            <h1>Log in</h1>
            <form className='form'>
                <input 
                    className='form__input'
                    onChange={handlerLogin}
                />
                <input 
                    className='form__input'
                    onChange={handlerPassword}
                />
                <Link 
                    className={`form__link ${
                        enabeledLink
                        ? ''
                        : 'form__link--disabled'
                    }`}
                    tabindex={
                        enabeledLink
                        ? 0
                        : -1
                    }
                    to='/profile'
                    > Enter 
                </Link>
            </form>
        </>
    );
}

export default LoginPage;
