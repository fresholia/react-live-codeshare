import Link from 'next/link'

import styles from './_auth.module.scss'

import { motion } from 'framer-motion'
import { ReactElement, useEffect } from 'react'

import Layout from 'components/layout'

import { useCookies } from 'react-cookie';
export default function Login() {
    const [ cookies, setCookie ] = useCookies(['user'])

    useEffect(() => {
      console.log(cookies) // debug
    }, [cookies])

    const handleClickForm = async (e: any) => {
        e.preventDefault()

        const username = e.target.username.value
        const password = e.target.password.value
        
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

          let tomorrow = new Date()
          tomorrow.setDate(tomorrow.getDate() + 1)

          // TODO_GITHUB_HELP: We need to secure cookied user datas.
          // or store user data server side.
          setCookie('user', data.data, {
              path: '/',
              expires: tomorrow
          })

          console.log('login successfully')
        } else {
          console.log(data.message)
        }

        return true
    }
    return (
        <div className={styles.form}>
          <h2>Sign in, code&nbsp;<motion.div animate={{ backgroundPosition: ['0px 0px', '1000px 0px', '0px 0px'] }} transition={{ duration: 10, repeat: Infinity, ease: 'linear' }} className={styles.colorized}>more!</motion.div></h2>

          <form autoComplete="off" onSubmit={handleClickForm}>
            <div className={styles.inputGroup}>
              <input type="text" id="username" autoComplete="off" placeholder="Username" required />
            </div>

            <div className={styles.inputGroup}>
              <input type="password" id="password" autoComplete="off" placeholder="Password" required />
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