import styles from "./Home.module.css"
import Mode from "../componets/Mod"

function Home({ isActive }) {
    const homeClass = isActive ? styles.containDark : ""
    const letterClass = isActive ? styles.letterDark : ""

    return (
        <div className={`${styles.contain} ${homeClass}`}>
            <div className={styles.containTwo}>
                <div className={`${styles.containObject} ${letterClass}`}>
                    <div>
                        <p>Olá, eu sou o</p>
                    </div>
                    <div>
                        <h1> Tiago Alcantara</h1>
                    </div>
                </div>
                <div className={styles.containMod}>
                    <Mode nome={"Sobre"}/>
                    <div className={styles.line}></div>
                    <Mode nome={"Projetos"}/>
                    <div className={styles.line}></div>
                    <Mode nome={"Contato"}/>
                </div>
            </div>
        </div>
    )
}

export default Home