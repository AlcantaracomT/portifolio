import styles from "./Logo.module.css"
import { useState, useEffect } from "react"

function Logo() {

    const [rains, setRains] = useState([])

    useEffect(() => {
        const gotas = []

        for (let i = 0; i < 100; i++) {
            gotas.push({
                left: Math.random() * 3,
                duration: 0.8 + Math.random()
            })
        }

        setRains(gotas)
    }, [])

    return (
        <div className={styles.contain}>
            {rains.map((rain, index) => (
                   <div
                        key={index}
                        className={styles.drop}
                        style={{
                            left: rain.left + "vw",
                            animationDuration: rain.duration + "s", 
                        }}
                    />
                ))}
            <div>
                <p>Mustache</p>
            </div>
        </div >
    )
}

export default Logo