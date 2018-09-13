import React from 'react'

const Dialogue =({actor,text,act})=>(
    <div>
        <span>{actor}</span>
        <p>{text}</p>
        <p>{act}</p>
    </div>
)

export default Dialogue