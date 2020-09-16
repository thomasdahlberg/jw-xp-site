import React from 'react';
import windowStyles from "./styles/window.module.scss";
import Draggable from 'react-draggable';

const Window = (props) => {
    return(
        <Draggable
            axis="both"
        >
            <div id="painting" className={windowStyles.container}>
                <div className={windowStyles.titleBar}><p>Paintings</p></div>
                <div className={windowStyles.toolBar}></div>
                <div className={windowStyles.content}>
                    <aside className={windowStyles.caption}></aside>
                </div>
            </div>
        </Draggable>
    )
}

export default Window;
