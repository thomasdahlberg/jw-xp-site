import React from 'react';
import Header from './header';
import Footer from './footer';
import styles from '../components/styles/layout.module.scss';

const boundingBox = {
    border: "solid red 2px",
    backgroundImage: "url('./images/bliss.jpg')",
    // backgroundSize: "cover",
    // backgroundPosition: "center",
    // backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
    position: "relative",
    backgroundPosition: "center",
}

const Layout = (props) => {
    return(
        <div className={styles.container} style={boundingBox}>
            <Header />
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