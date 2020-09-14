import React from 'react';
import windowStyles from "./styles/window.module.scss";

const Window = (props) => {
    return(
        <div className={windowStyles.container}>
            <div className={windowStyles.titleBar}><p>Paintings</p></div>
            <div className={windowStyles.toolBar}></div>
            <div className={windowStyles.content}>
                <aside className={windowStyles.caption}></aside>
            </div>
        </div>
    )
}

export default Window;
