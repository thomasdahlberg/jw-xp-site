import React from 'react';
import windowStyles from "./styles/window.module.scss";
import Draggable from 'react-draggable';

const Window = (props) => {
    return(
        <Draggable
            axis="both"
        >
        {props.active && !props.hidden ? 
            <div className={windowStyles.container}>
                <div className={windowStyles.titleBar}>
                    <p>{props.name}</p>
                    <button id={props.name} onClick={props.handleCloseWindow}>X</button>    
                </div>
                <div className={windowStyles.toolBar}></div>
                <div className={windowStyles.content}>
                    <aside className={windowStyles.caption}></aside>
                </div>
            </div>
            :
            <div></div>
        }
            
        </Draggable>
    )
}

export default Window;
