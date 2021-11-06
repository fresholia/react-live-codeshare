import { useRouter } from 'next/router'

import type { NextPage } from 'next'

import { ErrorLayout } from '../../layouts/error'

import { LoadingLayout } from '../../layouts/loading'

import styles from '../../styles/code.module.scss'

import CodeActions from '../../components/editor/ActionsComponent'

import CodeEditor from '../../components/editor/EditorComponent'

import SettingsWindow from '../../components/editor/SettingsWindow'

import Head from 'next/head'

import {useState} from 'react'

import variables from '../../variables'

import useSWR from 'swr'

let pageData

const fetcher = async (url: string) => {
    const res = await fetch(url)
  
    if (!res.ok) {
      return res.status
    }
  
    return res.json()
}

const Post: NextPage = () => {
    const [ showSettings, setSettingsWindow ] = useState(true)

    const router = useRouter()
    const { pid } = router.query

    //if (router.isFallback || pid === undefined || pid === 'undefined') {
    //    return <LoadingLayout />
    //}

    const { data: pageData, error } = useSWR(`/api/code/${pid}`, fetcher)
    if (!pageData)
        return <LoadingLayout />

    const pageDetails = typeof(pageData) === 'object' ? pageData[0] : {}

    const id = pageDetails?.id
    const name = pageDetails?.name
    const content = pageDetails?.content

    const isPageValid = typeof(pageData) === 'object' && id

    const closeSettingsWindow = () => setSettingsWindow(false)

    const clickInteractions = {
        settings: () => setSettingsWindow(true),
        about: () => alert('soon')
    }
    
    return (
        <>
            <Head>
                <title>{isPageValid ? (`${name} - ${variables.projectName}`) : `page not found - ${variables.projectName}`}</title>
            </Head>
            <div className={styles.wrapper}>
                <div className={styles.codeContent + ' ' + (!isPageValid ? styles.noData : '')}>
                    {isPageValid ? <CodeEditor baseId={id} codeContent={content} /> : <ErrorLayout content="Page not found, click here to create a new page!" />}
                </div>
                <div className={styles.actions + ' ' + (!isPageValid ? styles.disabled : '')}>
                    <CodeActions onClick={clickInteractions}  />
                    { showSettings ? <SettingsWindow onClose={closeSettingsWindow} /> : '' }
                </div>
            </div>
        </>
    )
}

export default Post