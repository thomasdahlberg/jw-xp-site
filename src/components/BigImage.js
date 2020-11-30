import React from 'react';
import styles from '../styles/BigImage.module.scss';

const images = require.context("../../public/images", true);

const BigImage = (props) => {
    let imageURI = images(`./${props.landingWork.node.type}/${props.landingWork.node.file}.jpg`);

    return(
        <div className={styles.bigimg}>
            <div className={styles.imgcont}>
                <img src={imageURI} alt={props.landingWork.node.title}/>
            </div>
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