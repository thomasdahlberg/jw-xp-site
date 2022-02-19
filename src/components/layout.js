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
        <div className={styles.container} style={boundingBox} id="desktop">
            <div>
                {props.children}
            </div>
            <Footer
                start = {props.start}
                painting = {props.painting}
                photography = {props.photography}
                videos = {props.videos}
                recycle = {props.recycle}
                hidePainting = {props.hidePainting}
                hideVideos = {props.hideVideos}
                hidePhotography = {props.hidePhotography}
                hideRecycle = {props.hideRecycle}
                handleHideWindow = {props.handleHideWindow}
            />
        </div>
    )
}

export default Layout;