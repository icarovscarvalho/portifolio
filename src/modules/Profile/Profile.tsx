import styles from "./styles.module.scss"

export const Profile:React.FC <{title:string; photo:string}> = ({title, photo}) => {
    return(
        <>
            <div className={styles.main}>
                <div className={styles.perfil_data}>
                    <p>Olá, Meu Nome é</p>
                    <h1>Ícaro Carvalho</h1>
                    <h2><span>-</span>Web Developer Front-end</h2>
                    <p><a href="#">Saiba mais</a></p>
                </div>
                <div className={styles.perfil_photo}>
                    <img src={ photo } alt={ title } />
                </div>
            </div>
        </>
    )
}