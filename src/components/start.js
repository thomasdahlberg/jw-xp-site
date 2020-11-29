import React from 'react';
import { Link } from "gatsby";
import startStyles from '../styles/start.module.scss'


const Start = (props) => {
    return(
        <div>
            {props.active ? 
                <div className={startStyles.container}>
                    <div className={startStyles.header}>
                        <img src="./images/avatar.png" alt="avatar"/>
                        <h3>James Williams II</h3>    
                    </div>
                    <div className={startStyles.content}>
                        <section className={startStyles.white}></section>
                        <section className={startStyles.blue}></section>
                    </div>
                    <div className={startStyles.footer}>
                        <a href="./resume/Dahlberg_Resume.pdf" target="_blank" rel="noopener noreferrer">CV&nbsp;&nbsp;&nbsp;<i className={"fa fa-download"} aria-hidden="true"></i></a>
                        <Link to="/"><i className={"fa fa-sign-out"} aria-hidden="true"></i></Link>
                    </div>
                </div>
                : null
            }
        </div>
    )
}

export default Start;
