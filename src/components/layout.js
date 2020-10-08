import React from 'react';
import Header from './header';
import Footer from './footer';

const Layout = (props) => {
    return(
        <div>
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