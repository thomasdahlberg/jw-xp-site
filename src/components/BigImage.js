import React from 'react';
import styles from '../styles/BigImage.module.scss';

const images = require.context("../../public/images", true);

const toggleBigImage = event => {
    const imageSrc = event.currentTarget.querySelector('img').src;
    const newDiv = document.createElement("BUTTON");
    newDiv.onclick = function () {
        console.log("removing big image");
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
    newImage.style.maxHeight = '80vh';
    newImage.style.maxWidth = '80vw';
}

const BigImage = (props) => {
    let imageURI = images(`./${props.landingWork.node.type}/${props.landingWork.node.file}.jpg`);

    return(
        <div className={styles.bigimg}>
            <button className={styles.imgcont} onClick={toggleBigImage}>
                <img src={imageURI} alt={props.landingWork.node.title}/>
            </button>
            <div className={styles.imgnav}>
                <button
                    id="l"
                    onClick={props.handleImageSelect}
                    onKeyDown={props.handleKeyDown}
                >|&lsaquo;
                </button>
                <button
                    id="r" 
                    onClick={props.handleImageSelect}
                    onKeyDown={props.handleKeyDown}
                >&rsaquo;|
                </button>
            </div>
        </div>
    )
}

export default BigImage