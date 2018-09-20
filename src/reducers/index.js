import { combineReducers }  from 'redux'
import mode from './mode'
import dialogues from './dialogues'
import actor from './actor'


export default combineReducers({
    actor,
    mode,
    dialogues
})