import React, { Component } from 'react';
import BigImage from './BigImage';
import Caption from './caption';
import Gallery from './gallery';
import styles from '../styles/content.module.scss';


class Content extends Component {
    constructor(props) {
        super(props)
        this.state = { imageIdx: this.getRandomInt(this.maxLibIdx) }
    }
    
    maxLibIdx = this.props.library.length;

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
        console.log(this.props.library);
    }

    componentWillUnmount(){
        document.removeEventListener("keydown", this.handleKeyDown);
    }

    render(){
        return (
            <div className={styles.content}>
                <Caption 
                    library={this.props.library}
                    landingWork={this.props.library[0]}
                    imageIdx={0}
                    handleImageSelect={this.handleImageSelect}
                    handleKeyDown={this.handleKeyDown}
                />
                <BigImage 
                    library={this.props.library}
                    landingWork={this.props.library[0]}
                    imageIdx={0}
                    handleImageSelect={this.handleImageSelect}
                    handleKeyDown={this.handleKeyDown}
                />
                {/* <Gallery
                    library={this.props.library}
                    handleImageSelect={this.handleImageSelect}
                    handleKeyDown={this.handleKeyDown}
                /> */}
            </div>
        )
    }
}

export default Content