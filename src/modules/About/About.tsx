import React from "react";
import styles from "./styles.module.scss"

export const About:React.FC<{title:string; photo:string}> = ({title, photo}) => {
    return(
        <div className={styles.aboutMe}>
            <div className={styles.aboutMe_box1}>
                <div className={ styles.icon }>
                    <img src={ photo } alt={ title } />
                </div>
                <div>
                    <p>
                        Sou estudante da área de programação em transição de carreira e busco minha primeira  oportunidade como desenvolvedor Web Front-End. Estou sempre buscando por cursos que agregam e ajudam a me manter sempre atualizado e, é gratificante ver que essa evolução está acontecendo dia após dia com novos processos, linguagens e metodologias.
                    </p>
                    <p>
                        <a href="#">Saiba mais</a>
                    </p>
                </div>
            </div>

            <div className={styles.aboutMe_box2}>
                <img src="./midia/skills_board" alt="Skills Board" />
            </div>
        </div>
    )
}