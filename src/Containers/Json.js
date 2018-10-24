import { connect } from 'react-redux'
import React from 'react'


const Json = ({text})=>(
    <div>
        <div>
            {text}
        </div>
    </div>
)

const mapStateToProps = ({dialogues})=>({
    text:JSON.stringify(dialogues)
})

export default connect(mapStateToProps)(Json)

