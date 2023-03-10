import React from 'react'
import styles from './PaginaPrincipal.module.css'
import Nav from '../components/nav/Nav'
import Header from '../components/header/Header'


function PaginaPrincipal() {
  return (
    <div className={styles.cont_pagPrincip}>
        <Nav/>
        <Header/>
    </div>
  )
}

export default PaginaPrincipal