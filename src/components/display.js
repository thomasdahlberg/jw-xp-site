import React from 'react';
import displayStyles from './styles/display.module.scss';
import Draggable from 'react-draggable';

const Display = (props) =>  {
    return(
        <div className={displayStyles.container}>
            <nav className={displayStyles.navIcons}>
                <Draggable
                    axis="both"
                >
                    <div className={displayStyles.icon}>
                        <img className={displayStyles.folder} src="./images/foldericon.png" alt="folder-icon"/>
                        <p>Painting</p>
                    </div>
                </Draggable>
                <Draggable
                    axis="both"
                >
                    <div className={displayStyles.icon}>
                        <img className={displayStyles.folder} src="./images/foldericon.png" alt="folder-icon"/>
                        <p>Videos</p>
                    </div>
                </Draggable>
                <Draggable
                    axis="both"
                >
                    <div className={displayStyles.icon}>
                        <img className={displayStyles.folder} src="./images/foldericon.png" alt="folder-icon"/>
                        <p>Sculpture</p>
                    </div>
                </Draggable>
            </nav>
            <div className={displayStyles.children}>
                {props.children}
            </div>
            <img className={displayStyles.desktop} src="./images/bliss.jpg" alt="bliss XP"/>
        </div>
    )
}

export default Display;