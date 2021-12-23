import React from 'react';
import { Link } from "gatsby"
import styles from '../styles/landing.module.scss';

const Landing = () => {
    return (
        <div className = {styles.container}>
            <div className= {styles.trim}></div>
            <div className= {styles.content}>
                <div className={styles.blockA}>
                    <div className={styles.logoContainer}>
                        <img src="./images/window.gif" alt="site-logo"/>
                        <h1 className={styles.macroHard}>Macrohard</h1>
                        <h1 className={styles.screenDoors}>Screendoors</h1>
                    </div>
                    <p>To begin, click your user name</p>
                </div>
                <div className={styles.blockB}>
                    <div className={styles.vertTrim}></div>
                    <div className={styles.enterWrapper}>
                        <div className={styles.enter}>
                            <Link to="/desktop">
                                <img 
                                    src="./images/avatar.png"
                                    alt="James Avatar"
                                />
                            </Link>
                            <div className={styles.avatarName}>
                                <h2>James</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className= {styles.trim}></div>
        </div>
    )
}

export default Landing;