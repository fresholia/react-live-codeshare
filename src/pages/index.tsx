import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <>
     <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2>New generation <span>pastebin</span> for developers.</h2>
            <h5>Compile instantly by writing code simultaneously with your friend. Writing code is so much easier now!</h5>

            <button className="btn green">
              Start Now!
            </button>
          </div>
        </div>
     </div>
    </>
  )
}

export default Home
