import { combineReducers }  from 'redux'
import count from './count'
import dialogues from './dialogues'
import actor from './actor'


export default combineReducers({
    actor,
    count,
    dialogues
})