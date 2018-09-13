import React from 'react';
import ReactDOM from 'react-dom';

// import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import {Provider} from 'react-redux';

import configureStore from './store';
// import thunk from 'redux-thunk'

// import rootReducer from './reducers'
// import switchDialogue from './reducers/switchDialogue'

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
    <Provider store={configureStore()}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

registerServiceWorker();
