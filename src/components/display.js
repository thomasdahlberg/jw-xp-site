import React from 'react';
import displayStyles from './styles/display.module.scss';

const Display = (props) =>  {
    return(
        <div className={displayStyles.container}>
            <img className={displayStyles.icon} src="./images/foldericon.png" alt="folder-icon"/>
            <img className={displayStyles.desktop} src="./images/bliss.jpg" alt="bliss XP"/>
        </div>
    )
}

export default Display;