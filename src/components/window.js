import React, { Component, Fragment } from 'react';
import windowStyles from "./styles/window.module.scss";
import Draggable from 'react-draggable';
const images = require.context("../../public/images", true);

class Window extends Component{

    containerRef = React.createRef();
    imageRef = React.createRef();
    capTitleRef = React.createRef();
    capYearRef = React.createRef();
    capMatRef = React.createRef();
    capDimRef = React.createRef();
    leftButRef = React.createRef();
    rightButRef = React.createRef();

    handleMaximizeWindow = (e) => {
        const windowNode = this.containerRef.current;
        windowNode.style.width = '100vw';
        windowNode.style.height = '100vh';
        windowNode.style.position = 'fixed';
        windowNode.style.left = 0;
        windowNode.style.top = 0;
    }

    handleImageSelect = (e) => {
        console.log(e.target.attributes[1].nodeValue);
        let selectedWork;
        e.target.localName === "img" ? selectedWork = this.props.library[e.target.id] : selectedWork = this.props.library[e.target.attributes[1].nodeValue];
        const libSize = this.props.library.length;
        const imageNode = this.imageRef.current;
        const capTitleNode = this.capTitleRef.current;
        const capYearNode = this.capYearRef.current;
        const capMatNode = this.capMatRef.current;
        const capDimNode = this.capDimRef.current;
        const leftButNode = this.leftButRef.current;
        const rightButNode = this.rightButRef.current;
        imageNode.src = images(`./${selectedWork.type}/${selectedWork.file}.jpg`);
        imageNode.alt = `${selectedWork.title}`;
        capTitleNode.innerText = `${selectedWork.title}`;
        capYearNode.innerText = `${selectedWork.year}`;
        capMatNode.innerText = `${selectedWork.materials}`;
        capDimNode.innerText = `${selectedWork.dimensions}`;
        leftButNode.attributes[1].nodeValue = `${selectedWork.id - 1 >= 0 ? selectedWork.id - 1 : libSize-1}`;
        rightButNode.attributes[1].nodeValue = `${selectedWork.id + 1 < libSize ? selectedWork.id + 1 : 0}`;
    }    
    render(){
        const posStyle = {
            position: "fixed",
            left: this.props.name === "Painting" ?
                    "100px" : 
                    this.props.name === "Videos" ?
                        "120px" :
                        this.props.name === "Sculpture" ?
                        "140px" : "160px",
            top: this.props.name === "Painting" ?
                    "30px" : 
                    this.props.name === "Videos" ?
                        "50px" :
                        this.props.name === "Sculpture" ?
                        "70px" : "90px",
            }
        return(
            <Draggable
                axis="both"
                handle=".handle"
            >
            {this.props.active && !this.props.hidden ? 
                <div ref={this.containerRef} className={windowStyles.container} style={posStyle}>
                    <div className="handle">
                        <div className={windowStyles.titleBar}>
                            <p>{this.props.name}</p>
                            <div className={windowStyles.titlebtns}>
                                <button id={this.props.name} onClick={this.props.handleHideWindow}><i id={this.props.name} onClick={this.props.handleHideWindow} className={"fa fa-window-minimize"} aria-hidden="true"></i></button>    
                                <button id={this.props.name} onClick={this.handleMaximizeWindow}><i id={this.props.name} className={"fa fa-window-maximize"} aria-hidden="true"></i></button>    
                                <button id={this.props.name} className={windowStyles.close} onClick={this.props.handleCloseWindow}>X</button>    
                            </div>
                        </div>
                    </div>
                    <div className={windowStyles.toolBar}>
                        <ul className={windowStyles.menus}>
                            <li>File</li>
                            <li>Edit</li>
                            <li>View</li>
                        </ul>
                    </div>
                    <div className={windowStyles.content}>
                        <aside className={windowStyles.caption}>
                            <div className={windowStyles.panel}>
                                <div className={windowStyles.panheader}>
                                    <i className={"fa fa-file-image-o"} aria-hidden="true"></i>
                                    <p ref={this.capTitleRef}>&nbsp;&nbsp;&nbsp;{this.props.library[0].title}</p>
                                </div>
                                <ul className={windowStyles.panbody}>
                                    <li>
                                        <i className={"fa fa-calendar"} aria-hidden="true"></i>
                                        <p ref={this.capYearRef}>&nbsp;&nbsp;&nbsp;{this.props.library[0].year}</p>
                                    </li>
                                    <li>
                                        <i className={"fa fa-paint-brush"} aria-hidden="true"></i>
                                        <p ref={this.capMatRef}>&nbsp;&nbsp;&nbsp;{this.props.library[0].materials}</p>
                                    </li>
                                    <li>
                                        <i className={"fa fa-map"} aria-hidden="true"></i>
                                        <p ref={this.capDimRef}>&nbsp;&nbsp;&nbsp;{this.props.library[0].dimensions}</p>
                                    </li>
                                </ul>
                            </div>
                        </aside>
                    {this.props.library ?
                        <Fragment>
                            <div className={windowStyles.bigimg}>
                                <div className={windowStyles.imgcont}>
                                    <img ref={this.imageRef} src={images(`./${this.props.library[0].type}/${this.props.library[0].file}.jpg`)} alt={this.props.library[0].title}/>
                                </div>
                                <div className={windowStyles.imgnav}>
                                    <button
                                        id="l"
                                        ref={this.leftButRef}
                                        form={this.props.library[this.props.library.length - 1].id}
                                        onClick={this.handleImageSelect}
                                    >|&lsaquo;
                                    </button>
                                    <button
                                        id="r" 
                                        ref={this.rightButRef}
                                        form={this.props.library[0].id + 1}
                                        onClick={this.handleImageSelect}
                                    >&rsaquo;|
                                    </button>
                                </div>
                            </div>
                            <div className={windowStyles.gallery}>
                                {this.props.library.map(({ type, title, file, id }, idx)=>
                                    <button
                                        className={windowStyles.button}
                                        key={idx}
                                        form={id}
                                        onClick={this.handleImageSelect}
                                    >
                                        <img
                                            key={idx}
                                            id={id}
                                            src={images(`./${type}/${file}.jpg`)}
                                            alt={title}
                                        />
                                    </button>
                                )}
                            </div>
                        </Fragment>
                        :
                        null
                    }
                    </div>
                </div>
                :
                <div></div>
            }
                
            </Draggable>
        )
    }
}

export default Window;
