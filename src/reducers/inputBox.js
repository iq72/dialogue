let actors=[
    'customer',
    'shopkeeper'
    ];
let i=0;


const inputBox=(state={
    type:'talk',
    actor:'customer',
    mode:'insert'
}, action)=>{
    switch(action.type){
        case "SWITCH_ACTOR":
            let actor=state.preActor||action.actor;
            if (typeof(actor) ==='string'){
                i=actors.indexOf(actor)
            }else if (typeof(actor)==='number'){
                i=(actor+i)%actors.length;
                actor=actors[i]
            }else{
                i=(i+1)%actors.length;
                actor=actors[i]
            }
            return ({
                ...state,
                // mode:'add',
                actor:actor,
                preActor:undefined
            });
        case 'SWITCH_TYPE':
            let t=state.preType||action.t;
            return ({
                ...state,
                type:t,
                preType:undefined
            });
        case 'SWITCH_MODE':
            return({
                ...state,
                mode:action.mode
            })
        case 'START_EDITING':
            return({
                ...state,
                mode:'edit',
                actor:action.node.actor,
                type:action.node.type,
                text:action.node.text
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