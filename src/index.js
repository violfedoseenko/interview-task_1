import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { configureStore} from '@reduxjs/toolkit'
import { Provider } from 'react-redux';
import { rootReducer } from './redux/reducers/rootReducer';


const store = configureStore ( 
    {reducer: rootReducer},

  window.__REDUX_DEVTOOLS_EXTENTION__ && window.__REDUX_DEVTOOLS_EXTENTION__()

)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

