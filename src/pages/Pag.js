import styles from './Pag.module.css'
import { useState } from "react"
import Navbar from "../componets/Navbar"
import ButtonMode from "../componets/ButtonMode"
import Home from "./Home"

function Pag() {

    const [isActive, setIsActive] = useState(false)

    function toggleMode() {
        setIsActive(!isActive)
    }
    return (
        <div className={styles.contain}>
            <Navbar isActive={isActive} />
            <ButtonMode toggleMode={toggleMode} text="oi" />
            <Home isActive={isActive}/>
        </div>
    )
}

export default Pag