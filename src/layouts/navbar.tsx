import Link from 'next/link'

import type { AppProps as NextAppProps } from 'next/app'

import variables from '../variables'

import { navbarItems, navbarItemsProps } from '../@types/NLayoutTypes.d'

import styles from '../styles/NavLayout.module.scss'

import { useEffect, useState } from 'react'

import { getProfile, setProfile } from '../profile/getProfile'

import type { UserType } from '../@types/UserTypes.d'

export default function Navbar() {
    const [userData, setUserData] = useState<UserType>()

    /*
    useEffect(() => {
        const fetchUser = async () => {
            const data = await getProfile()
            setUserData(data)
        }
        fetchUser()
    }, [])
    */
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
                {
                    (userData) ?
                        <div>
                            {userData.username}
                        </div>
                        :
                        <p>Sign In</p>
                }
            </div>
        </div>
    )
}