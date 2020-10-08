import React from 'react';
import startStyles from './styles/start.module.scss'


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

                    </div>
                </div>
                : null
            }
        </div>
    )
}

export default Start;
