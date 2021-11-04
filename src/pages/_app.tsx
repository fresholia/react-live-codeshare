import { useEffect } from 'react'

import '../styles/globals.scss'

import Head from 'next/head'

import type { AppProps } from 'next/app'

import NavLayout from '../layouts/navbar'

import type { navbarItemsProps } from '../@types/NavLayout.d'

const navbarItems: navbarItemsProps[] = [
  { map: null, id: 1, name: 'Sign in', href: '/' },
]

export default function DefApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.querySelector('html').dataset.theme = 'dark';
  }, []);
  return (
    <>
      <Head>
        <title>code2gether</title>
      </Head>
      <NavLayout pageProps={navbarItems} />
      
      <Component {...pageProps} />
    </>
  )
}