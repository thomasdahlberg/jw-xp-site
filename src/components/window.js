import React, { Component } from 'react';
import styles from "../styles/window.module.scss";
import Draggable from 'react-draggable';
import Content from './content';

class Window extends Component{
    constructor(props) {
        super(props)
        this.state = { 
            imageIdx: this.getRandomInt(this.maxLibIdx)
        }
    }
    
    maxLibIdx = this.props.library.length;

    toggleBigImage = event => {
        console.log(event.currentTarget.id);
        const imageSrc = event.currentTarget.id === "maximize" 
            ? document.getElementById("bigImage").src
            : event.currentTarget.querySelector('img').src;
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
        newDiv.style.cursor = 'zoom-out';
        newImage.style.maxHeight = '80vh';
        newImage.style.maxWidth = '80vw';
    }    

    getRandomInt = (maxIdx) => {
        let randomValue = Math.random() * maxIdx;
        return Math.floor(randomValue);
    }
    
    handleImageSelect = (e) => { 
        if(e.target.id === "l") {
            this.state.imageIdx === 0 ?
                this.setState({ imageIdx: this.maxLibIdx - 1 })
                : this.setState({ imageIdx: this.state.imageIdx - 1 });
        } else if(e.target.id === "r") {
            this.state.imageIdx === this.maxLibIdx -1 ?
                this.setState({ imageIdx: 0 })
                : this.setState({ imageIdx: this.state.imageIdx + 1 });
        } else {
            e.target.localName === "img" ?
            this.setState({ imageIdx: Number(e.target.id) })
            : this.setState({ imageIdx: Number(e.target.attributes[1].nodeValue) });
        }
    }

    handleKeyDown = (e) => {
        e.preventDefault();
        if(e.keyCode === 37){
            let event = { 
                target: {
                    id: "l"
                }
            }
            this.handleImageSelect(event)
        }
        if(e.keyCode === 39){
            let event = { 
                target: {
                    id: "l"
                }
            }
            this.handleImageSelect(event)
        }
        if(e.keyCode === 27 || e.keyCode === 13){
            this.handleToggleBigImage();      
        }
        return false;
    }
    
    componentDidMount(){
        document.addEventListener("keydown", this.handleKeyDown);
    }

    componentWillUnmount(){
        document.removeEventListener("keydown", this.handleKeyDown);
    }


    handleMaximizeWindow = () => {
        console.log('handleMaximizeWindow');
    }

    render(){
        const posStyle = {
            position: "fixed",
            left: this.props.name === "Painting" ?
                    "100px" : 
                    this.props.name === "Videos" ?
                        "120px" :
                        this.props.name === "Photo" ?
                        "140px" : "160px",
            top: this.props.name === "Painting" ?
                    "30px" : 
                    this.props.name === "Videos" ?
                        "50px" :
                        this.props.name === "Photo" ?
                        "70px" : "90px",
            zIndex: this.props.topWindow ? 14 : 10,
        }
        return(
            <Draggable
                axis="both"
                handle=".handle"
            >
            {this.props.active && !this.props.hidden ? 
                <div className={styles.container} style={posStyle}>
                    <div className="handle">
                        <div className={styles.titleBar}>
                            <p>{this.props.name}</p>
                            <div className={styles.titlebtns}>
                                <button 
                                    id={this.props.name}
                                    aria-label="Minimize Window"
                                    onClick={this.props.handleHideWindow}
                                >
                                    <i
                                        id={this.props.name} 
                                        onClick={this.props.handleHideWindow} 
                                        className={"fa fa-window-minimize"} 
                                        aria-hidden="true"
                                    ></i>
                                </button>    
                                <button
                                    id="maximize"
                                    aria-label="Maximize Window"
                                    onClick={this.toggleBigImage}
                                >
                                    <i 
                                        id={this.props.name} 
                                        className={"fa fa-window-maximize"}
                                        aria-hidden="true"
                                    ></i>
                                </button>    
                                <button 
                                    id={this.props.name}
                                    className={styles.close} 
                                    onClick={this.props.handleCloseWindow}
                                >X
                                </button>    
                            </div>
                        </div>
                    </div>
                    <div className={styles.toolBar}>
                        <ul className={styles.menus}>
                            <li>File</li>
                            <li>Edit</li>
                            <li>View</li>
                        </ul>
                    </div>
                    <Content
                        library={this.props.library}
                        imageIdx={this.state.imageIdx}
                        toggleBigImage={this.toggleBigImage}
                        handleImageSelect={this.handleImageSelect}
                    /> 
                </div>
                :
                <div></div>
            }  
            </Draggable>
        )
    }
}

export default Window;
