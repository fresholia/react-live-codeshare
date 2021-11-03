import '../styles/globals.css'

import type { AppProps } from 'next/app'

import NavLayout from '../layouts/navbar'

import type { navbarItemsProps } from '../@types/NavLayout.d'

const navbarItems: navbarItemsProps[] = [
  { map: null, id: 1, name: 'Sign in', href: '/' },
]

export default function DefApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavLayout pageProps={navbarItems} />
      
      <Component {...pageProps} />
    </>
  )
}