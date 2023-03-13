import React from 'react'
import Foto from '../../img/foto.jpg'
import styles from './AcercaDeMi.module.css'
// Animaciones
import AOS from 'aos';

function AcercaDeMi() {
    // Animaciones
    AOS.init();

    return (
        <div data-aos="fade-right" data-aos-delay="100" data-aos-duration="1200" data-aos-mirror="true"
            data-aos-once="false" className={styles.cont_adm} id='cont_adm'>

            <section className={styles.admSect_img}>
                <img className={styles.adm_imgFoto} src={Foto} alt="" />
            </section>

            <section className={styles.adm_text}>
                <h2 className={styles.adm_title}>Acerca de Mi</h2>
                <h3 className={styles.adm_subt}>Desarrrollador Front End</h3>
                <p className={styles.adm_p}>Joven estudiante de ingenieria informatica en busca
                    de empleo para desarrollarse en el mundo laboral.
                    Actualmente me encuentro enfocado en el area de desarrollo
                    Front End, aunque tambien cuento con conocimientos de BackEnd
                </p>
            </section>


        </div>
    )
}

export default AcercaDeMi