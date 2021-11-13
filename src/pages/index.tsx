import type { NextPage } from 'next'

import styles from '@components/styles/index.module.scss'

import { createFile } from '@models/editor/editor.model'

import { LogoIcon } from '@components/iconset.icons'

import { motion } from 'framer-motion'

import { navbarItems } from 'types/navbar.type'

import { useRouter } from 'next/router'

import FooterLayout from '@components/layouts/footer.layout'

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
          <motion.div className={styles.headerText} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>Are you <motion.div animate={{ backgroundPosition: ['0px 0px', '1000px 0px', '0px 0px'] }} transition={{ duration: 10, repeat: Infinity, ease: 'linear' }} className={styles.colorized}>ready?</motion.div></motion.div>
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
