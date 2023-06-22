import React from "react"
import styles from "./Btn.module.css"

const Btn = () => {
    return (
        <div className={styles.btn}>
                <p className={styles.btn1}>식권구매</p>
                <p className={styles.line}></p>
                <p className={styles.btn1}>전체메뉴</p>
                <p className={styles.line}></p>
                <p className={styles.btn1}>장바구니</p>
                <p className={styles.line}></p>
                <p className={styles.btn1}>MY식권</p>
            </div>
    )
}

export default Btn