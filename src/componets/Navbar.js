import styles from './Navbar.module.css'

function Navbar({ isActive }) {

    const containClass = isActive ? styles.containDark : styles.containLight
    const navbarClass = isActive ? styles.navbarDark : styles.navbarLight

    return (
        <div className={`${styles.containNavbar} ${containClass}`}>
            <nav className={styles.navbarPag}>
                <img src=""></img>
                <div className={styles.menuMobile}>
                    <div className={styles.line1}></div>
                    <div className={styles.line2}></div>
                    <div className={styles.line3}></div>
                </div>
                <ul className={`${styles.navLinksPag} ${navbarClass}`}>
                    <li><a href="">Sobre</a></li>
                    <li><a href="">Projetos</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar