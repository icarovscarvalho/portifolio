import React from "react";
import { About } from "../About/About";
import { Profile } from "../Profile/Profile";

import perfilImg from "../../assets/images/perfil.jpg";
import bgImg from "../../assets/images/bg-coding.jpg";


export const Main:React.FC = () => {
    return(
        <main>
            <section>
                <Profile title="Perfil Photo" photo= { bgImg } />
            </section>
            <section>
                <About title="Perfil Photo" photo= { perfilImg } />
            </section>
            <section>

            </section>
        </main>
    )
}