import React from 'react';
import styles from '../styles/display.module.scss';
import Draggable from 'react-draggable';

const Display = (props) =>  {
    const folderIconURI = "./images/foldericon.png";
    
    return(
        <div className={styles.container}>
            <nav className={styles.navIcons}>
                <Draggable axis="both">
                    <button 
                        id="Painting"
                        className={styles.icon} 
                        onDoubleClick={props.handleClickWindow}
                    >
                        <img 
                            id="Painting" 
                            className={styles.folder} 
                            src={folderIconURI}
                            alt="folder-icon"
                        />
                        <p id="Painting">Painting</p>
                    </button>
                </Draggable>
                <Draggable axis="both">
                    <button 
                        id="Videos" 
                        className={styles.icon}
                        onDoubleClick={props.handleClickWindow}
                    >
                        <img 
                            id="Videos" 
                            className={styles.folder} 
                            src={folderIconURI} 
                            alt="folder-icon"
                        />
                        <p id="Videos">Videos</p>
                    </button>
                </Draggable>
                <Draggable axis="both">
                    <button 
                        id="Sculpture" 
                        className={styles.icon} 
                        onDoubleClick={props.handleClickWindow}
                    >
                        <img 
                            id="Sculpture" 
                            className={styles.folder} 
                            src={folderIconURI}
                            alt="folder-icon"
                        />
                        <p id="Sculpture">Sculpture</p>
                    </button>
                </Draggable>
                <Draggable axis="both">
                    <button 
                        id="Recycle Bin" 
                        className={styles.icon}
                        onDoubleClick={props.handleClickWindow}
                    >
                        <img 
                            id="Recycle Bin" 
                            className={styles.recycle} 
                            src="./images/recycle.png" 
                            alt="folder-icon"
                        />
                        <p id="Recycle Bin">Recycle Bin</p>
                    </button>
                </Draggable>
            </nav>
            <div className={styles.children}>
                {props.children}
            </div>
        </div>
    )
}

export default Display;