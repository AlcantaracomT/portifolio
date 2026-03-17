import styles from './Pag.module.css'
import { useState } from "react"
import Navbar from "../componets/Navbar"
import ButtonMode from "../componets/ButtonMode"
import Home from "./Home"
import About from "./About"

function Pag() {

    const [isActive, setIsActive] = useState(false)

    function toggleMode() {
        setIsActive(!isActive)
    }
    return (
        <div className={styles.contain}>
            <Navbar isActive={isActive} />
            <ButtonMode isActive={isActive} toggleMode={toggleMode}/>
            <Home isActive={isActive}/>
            <About />
        </div>
    )
}

export default Pag