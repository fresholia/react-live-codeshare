
import { navbarItems } from 'types/navbar'

import { LogoIcon } from 'utils/icons'

import styles from './_header.module.scss'

import { useRouter } from 'next/router'

import Link from 'next/link'

export default function Header() {
    const { asPath } = useRouter()
    return (
        <header className={styles.header}>
            <LogoIcon fillColor="white" size={64} />
            {navbarItems.map( nav => {
                return (
                    <Link key={nav.key} href={nav.href}>
                        <a className={(asPath == nav.href ? styles.active : '')}>{nav.name}</a>
                    </Link>
                )
            })}
        </header>
    )
}