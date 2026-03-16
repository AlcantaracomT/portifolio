import styles from './ButtonMode.module.css'

function ButtonMode({toggleMode, isActive}) {

    const buttonClass = isActive ? styles.containDark : styles.containLight

    return (
        <div className={`${styles.contain} ${buttonClass}`}>
            <div onClick={toggleMode} className={styles.buttonMod}></div>
        </div>
    )
}

export default ButtonMode