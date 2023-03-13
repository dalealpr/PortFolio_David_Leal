import React, { useEffect, useState } from 'react'
import BurguerButton from './BurguerButton'
//CSS
import styles from './Nav.module.css'
//IMG
import logo from '../../img/logo1.png'
import user from '../../img/user2.png'
import card from '../../img/car.png'



function Nav() {
  // HOOKS
  const [clicked, setClicked] = useState(false)

  // Funcion Hamb CLicked
  const handleClick = () => {
    //Pasa de true a false y viseversa
    setClicked(!clicked)
  }

  const handleClick2 = () => {
    //Pasa de true a false y viseversa
    setClicked(false)
  }

  return (

    <div className={styles.navCont}>

      <div className={styles.burguer}>
        <BurguerButton clicked={clicked} handleClick={handleClick} />
      </div>

      <h1>Portafolio.</h1>

      <ul className={`${styles.navUl} ${clicked ? `${styles.active}` : ''}`}>
        <li className={`${styles.navLi} ${clicked ? `${styles.active}` : ''}`}><a className={`${styles.navA} ${clicked ? `${styles.active}` : ''}`} onClick={handleClick2} href="#header_cont">Inicio</a></li>
        <li className={`${styles.navLi} ${clicked ? `${styles.active}` : ''}`}><a className={`${styles.navA} ${clicked ? `${styles.active}` : ''}`} onClick={handleClick2} href="#cont_adm">Acerca de mi</a></li>
        <li className={`${styles.navLi} ${clicked ? `${styles.active}` : ''}`}><a className={`${styles.navA} ${clicked ? `${styles.active}` : ''}`} onClick={handleClick2} href="#">Formacion</a></li>
        <li className={`${styles.navLi} ${clicked ? `${styles.active}` : ''}`}><a className={`${styles.navA} ${clicked ? `${styles.active}` : ''}`} onClick={handleClick2} href="#">Habilidades</a></li>
        <li className={`${styles.navLi} ${clicked ? `${styles.active}` : ''}`}><a className={`${styles.navA} ${clicked ? `${styles.active}` : ''}`} onClick={handleClick2} href="#">Proyectos</a></li>
      </ul>

    </div>

  )
}

export default Nav