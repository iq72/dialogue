const inputBox=(state={
    type:'talk',
    actor:'customer',
    mode:'add'
}, action)=>{
    switch(action.type){
        case "SWITCH_DIALOGUE":
            return ({
                ...state,
                mode:'add',
                actor:state.preActor?state.preActor:action.actor,
                preActor:undefined
            });
        case 'SWITCH_TYPE':
            return ({
                ...state,
                type:action.t
            });
        case 'START_EDITING':
            console.log("editing")
            return({
                ...state,
                mode:'edit',
                actor:'',
                preActor:state.actor,
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