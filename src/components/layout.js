import React from 'react';
import Footer from './footer';
import styles from '../styles/layout.module.scss';

const boundingBox = {
    backgroundImage: "url('./images/bliss.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
    position: "relative",
}

const Layout = (props) => {
    return(
        <div className={styles.container} style={boundingBox}>
            <div>
                {props.children}
            </div>
            <Footer
                start = {props.start}
                painting = {props.painting}
                sculpture = {props.sculpture}
                videos = {props.videos}
                recycle = {props.recycle}
                hidePainting = {props.hidePainting}
                hideVideos = {props.hideVideos}
                hideSculpture = {props.hideSculpture}
                hideRecycle = {props.hideRecycle}
                handleHideWindow = {props.handleHideWindow}
            />
        </div>
    )
}

export default Layout;