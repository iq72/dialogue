let actors=[
    'customer',
    'shopkeeper'
    ];
let i=0;


const inputBox=(state={
    type:'talk',
    actor:'customer',
    mode:'add'
}, action)=>{
    switch(action.type){
        case "SWITCH_DIALOGUE":
            let actor=state.preActor?state.preActor:action.actor;
            if (typeof(actor) ==='string'){
                // na=actor;
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
                mode:'add',
                actor:actor,
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