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
                    <div id="Painting"className={displayStyles.icon} onDoubleClick={props.handleClickWindow}>
                        <img id="Painting" className={displayStyles.folder} src="./images/foldericon.png" alt="folder-icon"/>
                        <p id="Painting">Painting</p>
                    </div>
                </Draggable>
                <Draggable
                    axis="both"
                >
                    <div id="Videos" className={displayStyles.icon} onDoubleClick={props.handleClickWindow}>
                        <img id="Videos" className={displayStyles.folder} src="./images/foldericon.png" alt="folder-icon"/>
                        <p id="Videos">Videos</p>
                    </div>
                </Draggable>
                <Draggable
                    axis="both"
                >
                    <div id="Sculpture" className={displayStyles.icon} onDoubleClick={props.handleClickWindow}>
                        <img id="Sculpture" className={displayStyles.folder} src="./images/foldericon.png" alt="folder-icon"/>
                        <p id="Sculpture">Sculpture</p>
                    </div>
                </Draggable>
                <Draggable
                    axis="both"
                >
                    <div id="Recycle Bin" className={displayStyles.icon} onDoubleClick={props.handleClickWindow}>
                        <img id="Recycle Bin" className={displayStyles.recycle} src="./images/recycle.png" alt="folder-icon"/>
                        <p id="Recycle Bin">Recycle Bin</p>
                    </div>
                </Draggable>

            </nav>
            <div className={displayStyles.children}>
                {props.children}
            </div>
        </div>
    )
}

export default Display;