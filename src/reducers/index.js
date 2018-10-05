import { combineReducers }  from 'redux'

import dialogues from './dialogues'
import inputBox from './inputBox'


export default combineReducers({
    inputBox,
    dialogues
})