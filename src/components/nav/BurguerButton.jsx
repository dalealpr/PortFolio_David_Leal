import React from 'react'
//CSS
import styles from './BurguerButton.module.css'


function BurguerButton({clicked, handleClick}) {
    return (
        <div onClick={handleClick} className={`${styles.navIcon5} ${clicked ? `${styles.open}`: ''}`} >
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

export default BurguerButton

