import styles from "./About.module.css"
import eu from "../assets/img/eu.jpeg"

function About() {
    return (
        <div className={styles.contain}>
            <div className={styles.containImg}>
                <img src={eu} alt="image of Tiago Alcanatara, deev" style={{ width: "293px", height: "294px" }}></img>
            </div>
            <div className={styles.containIcons}></div>
            <div className={styles.containPhara}>
                <p>
                    Nascido na Bahia, embora já tivesse tido contato com computadores antes, foi em 2021 que tive meu primeiro computador próprio e de fato, comecei a entender como ele funciona.<br/><br/>

                    No ano seguinte, em 2022, conheci a programação e, a partir daí, iniciei meus estudos na área.
                    Motivado por esse novo interesse, decidi prestar o ENEM para ingressar na UESC.<br/><br/>

                    Em 2023, fui aprovado no curso de Ciência da Computação na UESC, dando início à minha trajetória acadêmica.<br/><br/>

                    Fora da tecnologia, curto andar de skate, surfar e manter uma vida saudável com treinos regulares na academia. Acredito que equilíbrio entre corpo e mente é essencial para um bom desempenho em qualquer área.
                </p>
            </div>
        </div>
    )
}

export default About