
export const minor = props=>'act'===props.type&&`
font-size:0.875em;
color:rgba(0,0,0,0.6);
`

export const text = `
font-family:system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
"Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
"Droid Sans", "Helvetica Neue", sans-serif;
color:rgba(0,0,0,0.75);
font-size:1em;
font-weight:400;
line-height:1.5;
background-color:none;
margin:0 0.5rem;
word-break:break-all;
text-align:justify;
`
export const beforeAct = props=>'act'===props.type&&`
&::before{
    content: "act";
    margin-right: 0.5rem;
    padding: 0 0.5em;
    display: inline-block;
    background-color: rgba(0, 0, 0, 0.1);
    color: rgba(0, 0, 0, 0.6);
    font-size: 0.5em;
    font-weight: 400;
    letter-spacing: 2px;
}`