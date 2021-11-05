import Link from 'next/link'

import type { AppProps as NextAppProps } from 'next/app'

import variables from '../variables'

import { navbarItems, navbarItemsProps } from '../@types/NavLayout.d'

import styles from '../styles/NavLayout.module.scss'

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <div className={styles.logo}>
                <span translate="no">{variables.projectName}</span>
            </div>

            <div className={styles.items}>
                {
                    navbarItems.map((item: navbarItemsProps) => {
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
          
            
            <div className={styles.account}>
                <p>Sign in</p>
            </div>
        </div>
    )
}