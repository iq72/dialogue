const mode = (state='dialogue',action)=>{
    switch (action.type){
        case 'SWITCH_MODE':
            return (
                action.mode
            );
        default:
            return state
    }
}

export default mode