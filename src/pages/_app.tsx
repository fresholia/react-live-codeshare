import { useEffect } from 'react'

import '../styles/globals.scss'

import Head from 'next/head'

import type { AppProps } from 'next/app'

import NavLayout from '../components/layouts/navbar'

export default function DefApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>code2gether</title>
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#212121" />
        <meta name="theme-color" content="#212121" />
      </Head>
      <NavLayout />
      
      <Component {...pageProps} />
    </>
  )
}