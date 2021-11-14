import Link from 'next/link'

import styles from './_auth.module.scss'

import { motion } from 'framer-motion'
import { ReactElement } from 'react'

import Layout from 'components/layout'

export default function Login() {
    return (
        <div className={styles.form}>
          <h2>Sign in, code&nbsp;<motion.div animate={{ backgroundPosition: ['0px 0px', '1000px 0px', '0px 0px'] }} transition={{ duration: 10, repeat: Infinity, ease: 'linear' }} className={styles.colorized}>more!</motion.div></h2>

          <form>
            <div className={styles.inputGroup}>
              <input type="text" placeholder="Username" required />
            </div>

            <div className={styles.inputGroup}>
              <input type="password" placeholder="Password" required />
            </div>

            <div className={styles.inputGroup}>
              <button type="submit">Log In</button>
            </div>
            
            <div className={styles.inputGroup}>
              <Link href="/auth/register">
                <a href="#">Don't have an account? Register!</a>
              </Link>
            </div>
          </form>
        </div>
    )
}

Login.getLayout = (page: ReactElement) => {
  return (
    <Layout title='Sign In - code2gether'>
      {page}
    </Layout>
  )
}