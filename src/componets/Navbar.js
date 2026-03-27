import styles from './Navbar.module.css'
import Logo from './Logo'

function Navbar({ isActive }) {

    const containClass = isActive ? styles.containLight :styles.containDark
    const navbarClass = isActive ?  "" : styles.navbarDark

    return (
        <div className={`${styles.containNavbar} ${containClass}`}>
            <div className={`${styles.containNavbar} ${styles.containNavbarShadow}`}></div>
            <nav className={styles.navbarPag}>
                <Logo />
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