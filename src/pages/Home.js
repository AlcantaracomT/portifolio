import styles from "./Home.module.css"

function Home ({isActive}){
    const homeClass = isActive ? styles.containDark : styles.containLight

    return(
        <div className={`${styles.contain} ${homeClass}`}>

        </div>
    )
}

export default Home