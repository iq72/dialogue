import { combineReducers }  from 'redux'
import count from './count'
import dialogues from './dialogues'


export default combineReducers({
    count,
    dialogues
})