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
            painting = {props.painting}
            sculpture = {props.sculpture}
            videos = {props.videos}
            recycle = {props.recycle}
            />
        </div>
    )
}

export default Layout;