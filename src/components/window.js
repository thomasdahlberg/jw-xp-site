import React, {Component} from 'react';
import windowStyles from "./styles/window.module.scss";
import Draggable from 'react-draggable';
const images = require.context("../../public/images", true);

class Window extends Component{
        
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
                    <div className={windowStyles.toolBar}>
                        <ul className={windowStyles.menus}>
                            <li>File</li>
                            <li>Edit</li>
                            <li>View</li>
                        </ul>
                    </div>
                    <div className={windowStyles.content}>
                        <aside className={windowStyles.caption}></aside>
                        {this.props.library?
                            this.props.library.map(({ type, title, file, id}, idx)=>
                            <button className={windowStyles.button} key={idx} form={id}><img key={idx} id={id}  src={images(`./${type}/${file}.jpg`)} alt={title}/></button>
                        )
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
