import { useEffect } from 'react'

import '../styles/globals.scss'

import Head from 'next/head'

import type { AppProps } from 'next/app'

import NavLayout from '../layouts/navbar'

export default function DefApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>code2gether</title>
      </Head>
      <NavLayout />
      
      <Component {...pageProps} />
    </>
  )
}