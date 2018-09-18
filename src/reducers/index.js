import { combineReducers }  from 'redux'
import count from './count'
import dialogues from './dialogues'
import avatar from './avatar'


export default combineReducers({
    avatar,
    count,
    dialogues
})