import React from 'react'
//CSS
import styles from './Habilidades.module.css'
// Animaciones
import AOS from 'aos';


function Habilidades() {

    // Animaciones
    AOS.init();

    return (
        <div className={styles.cont_habilidades} id='cont_habilidades'>
            <div data-aos="fade-up" data-aos-delay="250" data-aos-duration="1200" data-aos-mirror="true"
                data-aos-once="false" className={styles.cont_EstrHabl}>

            </div>
        </div>
    )
}

export default Habilidades