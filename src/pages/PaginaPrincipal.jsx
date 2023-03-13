import React from 'react'
import styles from './PaginaPrincipal.module.css'
import Nav from '../components/nav/Nav'
import Header from '../components/header/Header'
import AcercaDeMi from '../components/acercaDeMi/AcercaDeMi'
import Habilidades from '../components/habilidades/Habilidades'


function PaginaPrincipal() {
  return (
    <div className={styles.cont_pagPrincip}>
      <Nav />
      <Header />
      <AcercaDeMi />
      <Habilidades />
    </div>
  )
}

export default PaginaPrincipal