// import React from 'react'
import { connect } from 'react-redux'
import {startEditing} from '../actions'
import SingleP from '../Components/SingleP'

const mapStateToProps = state =>({
    state
})

const mapDiaptchToProps = dispatch =>({
    startEditing:(node)=>{dispatch(startEditing(node))}
})

export default connect(mapStateToProps,mapDiaptchToProps)(SingleP)
