import React from 'react';
import displayStyles from './styles/display.module.scss';

const Display = (props) =>  {
    return(
        <div className={displayStyles.container}>
            <nav className={displayStyles.navIcons}>
                <div className={displayStyles.icon}>
                    <img className={displayStyles.folder} src="./images/foldericon.png" alt="folder-icon"/>
                    <a href="#">Painting</a>
                </div>
                <div className={displayStyles.icon}>
                    <img className={displayStyles.folder} src="./images/foldericon.png" alt="folder-icon"/>
                    <a href="#">Videos</a>
                </div>
                <div className={displayStyles.icon}>
                    <img className={displayStyles.folder} src="./images/foldericon.png" alt="folder-icon"/>
                    <a href="#">Sculpture</a>
                </div>
            </nav>
            <div className={displayStyles.children}>
                {props.children}
            </div>
            <img className={displayStyles.desktop} src="./images/bliss.jpg" alt="bliss XP"/>
        </div>
    )
}

export default Display;