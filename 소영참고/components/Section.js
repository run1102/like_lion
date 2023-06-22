import React from "react"
import styles from "./Section.module.css"

const Section = () => {
    return (
        <div className={styles.section}>
            <div className={styles.menu}>
                <p>이것은 메뉴당</p>
            </div>
        </div>
    )
}

export default Section