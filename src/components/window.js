import React, { useEffect, useState } from 'react';
import styles from "../styles/window.module.scss";
import Draggable from 'react-draggable';
import Content from './content';
import useMediaQuery from '@mui/material/useMediaQuery';

const Window = (props) => {
    const maxLibIdx = props.library.length;
    const matches = useMediaQuery('(min-width:650px)');
    const getRandomInt = (maxIdx) => {
        let randomValue = Math.random() * maxIdx;
        return Math.floor(randomValue);
    };

    const [imageIdx, setImageIdx] = useState(getRandomInt(maxLibIdx));

    const toggleBigImage = event => {
        const imageSrc = event.currentTarget.id === "maximize" 
            ? document.getElementById("bigImage")?.src
            : event.currentTarget.querySelector('img').src;
        if(!imageSrc) {
            return null;
        }
        const newDiv = document.createElement("BUTTON");
        newDiv.onclick = function () {
            this.parentElement.removeChild(this);
        };
        const newImage = document.createElement("IMG");
        newImage.src = imageSrc;
        newDiv.appendChild(newImage);
        document.getElementById("desktop").appendChild(newDiv);
        newDiv.style.zIndex = '1000';
        newDiv.style.position = 'fixed';
        newDiv.style.top = '0';
        newDiv.style.left = '0';
        newDiv.style.display = 'flex';
        newDiv.style.justifyContent = 'center';
        newDiv.style.alignItems = 'center';
        newDiv.style.background = "rgba(0,0,0,0.9)";
        newDiv.style.width = '100vw';
        newDiv.style.height = '100vh';
        newDiv.style.outline = 'none';
        newDiv.style.border = 'none';
        newDiv.style.cursor = 'zoom-out';
        newImage.style.maxHeight = '80vh';
        newImage.style.maxWidth = '80vw';
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
                /> 
            </div>
            :
            <div></div>
        }  
        </Draggable>
    )
};    
    
export default Window;
