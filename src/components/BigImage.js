import React from 'react';
import styles from '../styles/BigImage.module.scss';
import useMediaQuery from '@mui/material/useMediaQuery';


const images = require.context("../../public/images", true);

const BigImage = (props) => {
    const matches = useMediaQuery('(min-width:650px)');
    const imageURI = images(`./${props.landingWork.node.type}/${props.landingWork.node.file}.jpg`);
    const tnabPDFURL = images(`./Recycle/TNAB.pdf`);

    return(
        <div className={styles.bigimg}>
            { props.landingWork.node.type === 'Video' || props.landingWork.node.type === 'Recycle'
                ? props.landingWork.node.file === 'rb3'
                ? <iframe title={props.landingWork.node.title} src={`${tnabPDFURL}#toolbar=0`} width={matches ? "500" : "320"} height={matches ? "441" : "282"} frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
                : <iframe title={props.landingWork.node.title} src={props.landingWork.node.link} width={matches ? "500" : "320"} height={matches ? "441" : "282"} frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
                : <button className={styles.imgcont} onClick={props.toggleBigImage}>
                    <img id="bigImage" src={imageURI} alt={props.landingWork.node.title} style={{cursor: 'zoom-in'}}/>
                </button>
            }
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