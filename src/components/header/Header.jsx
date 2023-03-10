import React from 'react'
import styles from '../header/Header.module.css'
import Foto from '../../img/foto.jpg'

function Header() {
    return (
        <div className={styles.cont_header} id='header_cont'>

            <section className={styles.headerSect_imgBr}>
                <img className={styles.header_imgFoto} src={Foto} alt="" />
            </section>

            <section className={styles.headerSect_text}>
                <div>
                    <h2 className={styles.headerName}>David Leal Espinosa</h2>
                    <h3 className={styles.headerDev}>Desarrrollador Front End</h3>
                </div>

                <div className={styles.headerCont_socialM}>
                    <a href=""><i className='bx bxl-github'></i></a>
                    <a href=""><i className='bx bxl-instagram'></i></a>
                </div>

                <a className={styles.headeeBtn} href="">Descargar CV</a>
            </section>

            <section className={styles.headerSect_img}>
                <img className={styles.header_imgFoto} src={Foto} alt="" />
            </section>
        </div>
    )
}

export default Header