import styles from './ButtonMode.module.css'

function ButtonMode({ text, toggleMode }) {


    return (
        <div className={styles.contain}>
            <button onClick={toggleMode} className={styles.ButtonMode}>{text}</button>
        </div>
    )
}

export default ButtonMode