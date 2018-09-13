import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension';

export default function configureStore(initialState={
    count:0,
    dialogues:[
        {
            actor:'customer',
            text: '有没有55寸的电视',
            act:'进店'
        },
        {
            actor:'shopkeeper',
            text: '看这里都是55寸的'
        }
    ]
}){
    return createStore(
        rootReducer,
        composeWithDevTools(
        applyMiddleware(thunk)
    ));
}