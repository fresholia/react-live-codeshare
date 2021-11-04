import Link from 'next/link'

import type { AppProps as NextAppProps } from 'next/app'

import variables from '../variables'

import type { navbarItemsProps } from '../@types/NavLayout.d'

import styles from '../styles/NavLayout.module.scss'

type AppProps<P = any> = {
    pageProps: navbarItemsProps;
  } & Omit<NextAppProps<P>, "pageProps">;

export default function Navbar({ Component, pageProps }: AppProps) {
    return (
        <div className={styles.navbar}>
         
            <div className={styles.items}>
                {
                    pageProps.map((item: navbarItemsProps) => {
                        return (
                            <div className={styles.item} key={item.id}>
                                <Link href={item.href}>
                                    <a>{item.name}</a>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
            <div className={styles.logo}>
                <span translate="no">{variables.projectName}</span>
            </div>
            
            <div className={styles.account}>
                <p>account</p>
            </div>
        </div>
    )
}