import React, { useEffect, useState } from 'react';
import styles from "../styles/window.module.scss";
import Draggable from 'react-draggable';
import Content from './content';
import useMediaQuery from '@mui/material/useMediaQuery';

const Window = (props) => {
    const maxLibIdx = props.library.length;
    const matches = useMediaQuery('(min-width:650px)');
    const isMobile = useMediaQuery('(max-width: 649px)');
    const getRandomInt = (maxIdx) => {
        let randomValue = Math.random() * maxIdx;
        return Math.floor(randomValue);
    };

    const [imageIdx, setImageIdx] = useState(getRandomInt(maxLibIdx));
    const [isZoomedIn, setIsZoomedIn] = useState(false);

    const toggleBigImage = (event) => {
        const imageSrc = event.currentTarget.id === "maximize" 
            ? document.getElementById("bigImage")?.src
            : event.currentTarget.querySelector('img').src;
        if(!imageSrc) {
            return null;
        }
        isZoomedIn ? setIsZoomedIn(false) : setIsZoomedIn(true);
    }    
    
    const handleImageSelect = (e) => { 
        if(e.target.id === "l") {
            imageIdx === 0 ?
                setImageIdx(maxLibIdx - 1)
                : setImageIdx(imageIdx - 1);
        } else if(e.target.id === "r") {
            imageIdx === maxLibIdx - 1 ?
                setImageIdx(0)
                : setImageIdx(imageIdx + 1);
        } else {
            e.target.localName === "img" ?
            setImageIdx(Number(e.target.id))
            : setImageIdx(Number(e.target.attributes[1].nodeValue));
        }
    }

    const handleKeyDown = (e) => {
        e.preventDefault();
        if(e.keyCode === 37){
            let event = { 
                target: {
                    id: "l"
                }
            }
            handleImageSelect(event)
        }
        if(e.keyCode === 39){
            let event = { 
                target: {
                    id: "r"
                }
            }
            handleImageSelect(event)
        }
        if(e.keyCode === 27 || e.keyCode === 13){
            // handleToggleBigImage();
            console.log('handleToggleBigImage');      
        }
        return false;
    }

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);

        return function cleanup() {
            document.removeEventListener("keydown", handleKeyDown);
        };
    });

    return(
        <Draggable
            axis="both"
            handle=".handle"
            cancel={matches ? "" : ".window-button"}
            defaultPosition={{ x: 100, y: 30 }}
            position={isZoomedIn || isMobile ? { x: 0, y: 0} : undefined}
        >
        {props.active && !props.hidden ? 
            <div className={styles.container}>
                <div className="handle">
                    <div className={styles.titleBar}>
                        <p>{props.name}</p>
                        <div className={styles.titlebtns}>
                            <button 
                                id={props.name}
                                aria-label="Minimize Window"
                                onClick={props.handleHideWindow}
                                className="window-button"
                            >
                                <i
                                    id={props.name} 
                                    onClick={props.handleHideWindow} 
                                    className={"fa fa-window-minimize"} 
                                    aria-hidden="true"
                                ></i>
                            </button>    
                            <button
                                id="maximize"
                                aria-label="Maximize Window"
                                onClick={toggleBigImage}
                                className="window-button"
                            >
                                <i 
                                    id={props.name} 
                                    className={"fa fa-window-maximize"}
                                    aria-hidden="true"
                                ></i>
                            </button>    
                            <button 
                                id={props.name}
                                className={`${styles.close} window-button`} 
                                onClick={props.handleCloseWindow}
                            >X
                            </button>    
                        </div>
                    </div>
                </div>
                <div className={styles.toolBar}>
                    <ul className={styles.menus}>
                        <li>File</li>
                        <li>Edit</li>
                        <li>View</li>
                    </ul>
                </div>
                <Content
                    library={props.library}
                    imageIdx={imageIdx}
                    toggleBigImage={toggleBigImage}
                    handleImageSelect={handleImageSelect}
                    isZoomedIn={isZoomedIn}
                /> 
            </div>
            :
            <div></div>
        }  
        </Draggable>
    )
};    
    
export default Window;
