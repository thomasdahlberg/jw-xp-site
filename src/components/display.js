import React from 'react';
import styles from '../styles/display.module.scss';
import Draggable from 'react-draggable';
import useMediaQuery from '@mui/material/useMediaQuery';

const Display = (props) =>  {
    const folderIconURI = "./images/foldericon.png";
    const matches = useMediaQuery('(min-width:650px)');
    
    return(
        <div className={styles.container}>
            <nav className={styles.navIcons}>
                <Draggable axis="both" cancel={matches ? "" : ".window-button"}>
                    <button 
                        id="Painting"
                        className={`${styles.icon} window-button`} 
                        onClick={props.handleClickWindow}
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
                <Draggable axis="both" cancel={matches ? "" : ".window-button"}>
                    <button 
                        id="Videos" 
                        className={`${styles.icon} window-button`}
                        onClick={props.handleClickWindow}
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
                <Draggable axis="both" cancel={matches ? "" : ".window-button"}>
                    <button 
                        id="Photography" 
                        className={`${styles.icon} window-button`} 
                        onClick={props.handleClickWindow}
                    >
                        <img 
                            id="Photography" 
                            className={styles.folder} 
                            src={folderIconURI}
                            alt="folder-icon"
                        />
                        <p id="Photography">Photography</p>
                    </button>
                </Draggable>
                <Draggable axis="both" cancel={matches ? "" : ".window-button"}>
                    <button 
                        id="Recycle Bin" 
                        className={`${styles.icon} window-button`}
                        onClick={props.handleClickWindow}
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