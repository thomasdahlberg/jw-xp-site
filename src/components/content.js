import React from 'react';
import BigImage from './BigImage';
import Caption from './caption';
import Gallery from './gallery';
import styles from '../styles/content.module.scss';


const Content = (props) => {
    return (
        <div className={styles.content}>
            <Caption 
                library={props.library}
                landingWork={props.library[props.imageIdx]}
                imageIdx={0}
                handleImageSelect={props.handleImageSelect}
                handleKeyDown={props.handleKeyDown}
            />
            <BigImage 
                library={props.library}
                landingWork={props.library[props.imageIdx]}
                imageIdx={0}
                handleImageSelect={props.handleImageSelect}
                handleKeyDown={props.handleKeyDown}
                toggleBigImage={props.toggleBigImage}
            />
            <Gallery
                library={props.library}
                handleImageSelect={props.handleImageSelect}
                handleKeyDown={props.handleKeyDown}
            />
        </div>
    )
}

export default Content