import styles from "./Project.module.css"

function Projecto() {
    return (
        <section className={styles.Contain}>
            <h1>Projetos</h1>

            <ul className={styles.stack}>
                <li><img src="path/to/c-icon.png" alt="C"></img></li>
                <li><img src="path/to/python-icon.png" alt="Python"></img></li>
                <li><img src="path/to/react-icon.png" alt="React"></img></li>
                <li><img src="path/to/js-icon.png" alt="JavaScript"></img></li>
                <li><img src="path/to/css-icon.png" alt="CSS"></img></li>
                <li><img src="path/to/html-icon.png" alt="HTML"></img></li>
                <li><img src="path/to/figma-icon.png" alt="Figma"></img></li>
                <li><img src="path/to/wordpress-icon.png" alt="WordPress"></img></li>
            </ul>

            <div className={styles.projects}>
                <div className={styles.projectsCard}></div>
                <div className={styles.projectsCard}></div>
            </div>
        </section>
    )
}

export default Projecto