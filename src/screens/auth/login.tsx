import Link from 'next/link'

import styles from './_auth.module.scss'

import { motion } from 'framer-motion'
import { ReactElement } from 'react'

import Layout from 'components/layout'

export default function Login() {

    const handleClickForm = async (e: any) => {
        e.preventDefault()

        const username = e.target.c2gusername.value
        const password = e.target.c2gpassword.value
        
        // TODO_GITHUB: Static URLs should be change
        const res = await fetch('http://localhost:3001/api/auth/login/', {
            method: 'POST',
            body: JSON.stringify({
              username: username,
              password: password
            }),
            headers: {'Content-Type': 'application/json'}
        })
        const data = await res.json()

        if (data.status === 200) {

        } else {
          console.log(data.message)
        }

        return true
    }
    return (
        <div className={styles.form}>
          <h2>Sign in, code&nbsp;<motion.div animate={{ backgroundPosition: ['0px 0px', '1000px 0px', '0px 0px'] }} transition={{ duration: 10, repeat: Infinity, ease: 'linear' }} className={styles.colorized}>more!</motion.div></h2>

          <form onSubmit={handleClickForm}>
            <div className={styles.inputGroup}>
              <input type="text" id="c2gusername" placeholder="Username" required />
            </div>

            <div className={styles.inputGroup}>
              <input type="password" id="c2gpassword" placeholder="Password" required />
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