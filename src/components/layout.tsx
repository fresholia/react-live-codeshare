import { ReactNode } from 'react'
import Head from 'next/head'

import Header from './header/header'
import Footer from './footer/footer'

type LayoutProps = {
    title?: string
    children: ReactNode
}

export default function Layout({ title, children }: LayoutProps) {
    return (
        <>
            <Head>
                <title>{title || 'code2gether'}</title>
            </Head>
            <div className="wrapper">
                <Header />
                    <main>{children}</main>
                <Footer />
            </div>
        </>
    )
}