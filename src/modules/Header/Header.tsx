import styles from "./styles.module.scss"

export const Header: React.FC = () => {
    return(
        <header className={styles.header} >
            <nav>
                <ul>
                    <li><a href="#">home</a></li>
                    <li><a href="#">about</a></li>
                    <li><a href="#">portilio</a></li>
                    <li><a href="#">redes</a></li>
                    <li><a href="#">contact</a></li>
                </ul>
            </nav>
        </header>
    )
}