import React from 'react'
import styles from './PaginaPrincipal.module.css'
import Nav from '../components/nav/Nav'
import Header from '../components/header/Header'
import AcercaDeMi from '../components/acercaDeMi/AcercaDeMi'


function PaginaPrincipal() {
  return (
    <div className={styles.cont_pagPrincip}>
        <Nav/>
        <Header/>
        <AcercaDeMi/>
    </div>
  )
}

export default PaginaPrincipal