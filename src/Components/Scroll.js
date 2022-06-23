import React from "react";

const Scroll = (props) =>{
    console.log(props)
    return (
        <div style={{overflow: 'scroll', border:'1px solid black',height:'400px'}}>
            {props.children}
        </div>
    )
}

export default Scroll;