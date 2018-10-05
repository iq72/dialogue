const inputBox=(state={
    type:'add',
    actor:'customer',
    mode:'talk'
}, action)=>{
    switch(action.type){
        case "SWITCH_DIALOGUE":
            return ({
                ...state,
                type:'add',
                actor:action.actor
            });
        case 'SWITCH_MODE':
            return ({
                ...state,
                mode:action.mode
            });
        case 'START_EDITING':
            console.log("editing")
            return({
                ...state,
                type:'edit',
                actor:'',
                ...action.node
            })
        case 'EDITING':
            return({
                ...state,
                text:action.text
            })
        case 'CLEAR_TEXT':
            return({
                ...state,
                text:''
            })
        default:
            return state
    }
}
export default inputBox