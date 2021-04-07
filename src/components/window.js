import React, { Component } from 'react';
import styles from "../styles/window.module.scss";
import Draggable from 'react-draggable';
import Content from './content';

class Window extends Component{
    constructor(props) {
        super(props)
        this.state = {
            maximized: false,
        };
    }

    handleMaximizeWindow = () => {
        this.state.maximized ? 
            this.setState({maximized: false}) 
            : this.setState({maximized: true});
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
        }
        const maxStyle = {
            position: "fixed",
            top: "0",
            left: "0px",
            width: "100vw",
            height: "100vh"
        }
        return(
            <Draggable
                axis="both"
                handle=".handle"
            >
            {this.props.active && !this.props.hidden ? 
                <div className={styles.container}
                    style={ this.state.maximized ? 
                        maxStyle 
                        : posStyle
                    }
                >
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
                                    id={this.props.name}
                                    aria-label="Maximize Window"
                                    onClick={this.handleMaximizeWindow}
                                >
                                    {this.state.maximized ? 
                                        <i 
                                            id={this.props.name}
                                            className={"fa fa-window-restore"}
                                            aria-hidden="true"
                                        ></i> 
                                        :
                                        <i 
                                            id={this.props.name} 
                                            className={"fa fa-window-maximize"}
                                            aria-hidden="true"
                                        ></i>
                                    }
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
                    <Content library={this.props.library} /> 
                </div>
                :
                <div></div>
            }  
            </Draggable>
        )
    }
}

export default Window;
