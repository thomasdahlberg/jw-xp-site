import React from 'react';
import landingStyles from './styles/landing.module.scss';

const Landing = (props) => {
    return (
        <div className = {landingStyles.container}>
            <div className= {landingStyles.trim}></div>
            <div className= {landingStyles.content}>
                <div className={landingStyles.blockA}>
                    <div className={landingStyles.logoContainer}>
                        <h1 className={landingStyles.macroHard}>Macrohard</h1>
                        <h1 className={landingStyles.screenDoors}>Screendoors</h1>
                    </div>
                    <p>To begin, click your user name</p>
                </div>
                <div className={landingStyles.blockB}>
                    <div className={landingStyles.vertTrim}></div>
                    <div className={landingStyles.enterWrapper}>
                        <div className={landingStyles.enter}>
                            <button><img src="./images/avatar.png" alt="James Avatar"/></button>
                            <div className={landingStyles.avatarName}>
                                <h2>James</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className= {landingStyles.trim}></div>
        </div>
    )
}

export default Landing;