import { ReactElement } from 'react'

import { motion } from 'framer-motion'

import Layout from 'components/layout'

import styles from './_home.module.scss'

import Link from 'next/link'

export default function Home() {
    return (
      <div className={styles.land}>
          <motion.div className={styles.headerText} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>Are you&nbsp;<motion.div animate={{ backgroundPosition: ['0px 0px', '1000px 0px', '0px 0px'] }} transition={{ duration: 25, repeat: Infinity, ease: 'linear' }} className={styles.colorized}>ready?</motion.div></motion.div>
          <motion.div className={styles.bottomText} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>Meet the simultaneous coding application developed with <span className={styles.bold}>better technologies</span> than you can imagine.</motion.div>
          
          <div className={styles.container}>
            <Link href="/code/qWxCr">
              <button>
                Launch Now
              </button>
            </Link>
          </div>
      </div>
    )
}

Home.getLayout = (page: ReactElement) => {
    return (
      <Layout title='home - code2gether'>
        {page}
      </Layout>
    )
}