import React, {Component} from 'react';
import windowStyles from "./styles/window.module.scss";
import Draggable from 'react-draggable';

class Window extends Component{
    constructor(props) {
        super(props)
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
                <div className={windowStyles.container} style={posStyle}>
                    <div className="handle">
                        <div className={windowStyles.titleBar}>
                            <p>{this.props.name}</p>
                            <button id={this.props.name} onClick={this.props.handleCloseWindow}>X</button>    
                        </div>
                    </div>
                    <div className={windowStyles.toolBar}></div>
                    <div className={windowStyles.content}>
                        <aside className={windowStyles.caption}></aside>
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
