import type { NextPage } from 'next'

import styles from '../styles/Home.module.scss'

import React, { useEffect, useState } from 'react'

import { createFile } from '../models/codeview/codeview'

import { LogoIcon, CloseIcon } from '../components/Icons'

import { motion } from 'framer-motion'

import { navbarItems } from '../types/NavLayoutTypes.d'

import { useRouter } from 'next/router'

import FooterLayout from '../components/layouts/footer'

const Home: NextPage = () => {
  const { asPath } = useRouter()

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.navbar}>
          <LogoIcon fillColor="white" size={64} />
          {
            navbarItems.map((nav, i) => {
              return (<a className={(asPath == nav.href ? styles.active : '')} key={nav.key}>{nav.name}</a>)
            })
          }
        </div>
        <div className={styles.land}>
          <motion.div className={styles.headerText} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>Are you <span className={styles.colorized}>ready?</span></motion.div>
          <motion.div className={styles.bottomText} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>Meet the simultaneous coding application developed with <span className={styles.bold}>better technologies</span> than you can imagine.</motion.div>
          
          <div className={styles.container}>
            <button onClick={() => {}}>
              Launch Now
            </button>
          </div>
        </div>
      </div>
      
      <FooterLayout />
    </>
  )
}

export default Home
