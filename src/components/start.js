import React from 'react';
import startStyles from './styles/start.module.scss'


const Start = (props) => {
    return(
        <div>
            {this.props.active ? 
                <div className={startStyles.container}>
                    <div className={startStyles.content}>
                        <aside className={startStyles.caption}></aside>
                    </div>
                </div>
                : null
            }
        </div>
    )
}

export default Start;
