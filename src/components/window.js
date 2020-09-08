import React from 'react';
import windowStyles from "./styles/window.module.scss";

const Window = (props) => {
    return(
        <div className={windowStyles.container}>
            <p>This is some sample text</p>
        </div>
    )
}

export default Window;
