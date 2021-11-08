import Link from 'next/link'

import type { AppProps as NextAppProps } from 'next/app'

import variables from '../../variables'

import { navbarItems, navbarItemsProps } from '../../types/NavLayoutTypes.d'

import styles from '../../styles/Navbar.module.scss'

import { useEffect, useState } from 'react'

import type { UserType } from '../../types/UserTypes.d'

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
                Sign in
            </div>
        </div>
    )
}