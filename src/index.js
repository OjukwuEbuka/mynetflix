import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import App from './app';
import {GlobalStyles} from './global-styles';
import { FirebaseContext } from './context/firebase';
import { firebase } from './lib/firebase.prod';

ReactDOM.render(
    <>
        <FirebaseContext.Provider value={{ firebase }}>
            <GlobalStyles />
            <App />
        </FirebaseContext.Provider>
    </>
    , document.getElementById('root'));
