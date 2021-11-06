import type { NextPage } from 'next'

import styles from '../styles/Home.module.scss'

import React, { useEffect, useState } from 'react'

import { createFile } from '../models/codeview/codeview'

const extensions = ['js', 'ts', 'tsx', 'lua', 'cpp', 'cs', 'go', 'dart', 'xml', 'json'];

const Home: NextPage = () => {
  const createCodePage: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()

    if (inputValue == '' || inputValue.length > 20 || inputValue.length < 2)
      return false;

    
    createFile(inputValue)
  }

  const [ extensionName, setExtension ] = useState('')
  const [ inputValue, setInputValue ] = useState('')

  useEffect(() => {
    const interval = setInterval(() => {
      const extension = extensions[Math.floor(Math.random() * extensions.length)]
      setExtension(extension)
    }, 500)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
     <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2>New generation <span>pastebin</span> for developers.</h2>
            <h5>Compile instantly by writing code simultaneously with your friend. Writing code is so much easier now!</h5>

            <div className={styles.inputSection}>
              <input onChange={(e) => setInputValue(e.target.value)} type="text" placeholder={`File name.${extensionName}`} />
              <button className="btn green" onClick={createCodePage}>
                Start Now!
              </button>
            </div>
          </div>
        </div>
     </div>
    </>
  )
}

export default Home
