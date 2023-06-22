import React from "react"
import styles from "./Header.module.css"

const Header = () => {
    return (
        <header className={styles.header}>
            <div>
                <div >
                    <p className={styles.logout}>LOG OUT</p>
                </div>
                
                <div className={styles.main}>
                    <h4>킹고오더</h4>
                </div>
                
                <div className={styles.navigation}>
                    <p>명륜 율전</p>
                </div>
            </div>
        </header>
    )
}


export default Header