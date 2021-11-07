import { useRouter } from 'next/router'

import type { NextPage } from 'next'

import { ErrorLayout } from '../../components/layouts/error'

import { LoadingLayout } from '../../components/layouts/loading'

import styles from '../../styles/code.module.scss'

import CodeActions from '../../components/editor/ActionsComponent'

import CodeEditor from '../../components/editor/EditorComponent'

import SettingsWindow from '../../components/editor/SettingsWindow'

import Head from 'next/head'

import { useState, useEffect } from 'react'

import variables from '../../variables'

import useSWR from 'swr'

import { SocketProvider, socket } from '../../models/socket/SocketProvider'

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
    const [ codeContent, setCodeContent ] = useState({})

    const router = useRouter()
    const { pid } = router.query

    const { data: pageData, error } = useSWR(`/api/code/${pid}`, fetcher)

    useEffect(() => {
        const content = typeof pageData?.content === 'string' ? JSON.parse(pageData?.content) : []
        if (content)
            setCodeContent(content.join('\n'))
    }, [pageData])

    useEffect(() => {
        if (pid) SocketProvider(pid.toString(), codeContent.toString(), setCodeContent)
    }, [pid, codeContent])

    if (!pageData || !socket)
        return <LoadingLayout />

    let pageDetails = typeof(pageData) === 'object' ? pageData : {}

    const id = pageDetails?.id
    const baseId = pageDetails?.base_id
    const name = pageDetails?.name

    const isPageValid = typeof(pageData) === 'object' && id

    const closeSettingsWindow = () => setSettingsWindow(false)

    const clickInteractions = {
        settings: () => setSettingsWindow(true),
        about: () => alert('soon')
    }
    
    const changeLanguageHighlight = (content: string) => {
        alert(content)
    }

    return (
        <>
            <Head>
                <title>{isPageValid ? (`${name} - ${variables.projectName}`) : `page not found - ${variables.projectName}`}</title>
            </Head>
            <div className={styles.wrapper}>
                <div className={styles.codeContent + ' ' + (!isPageValid ? styles.noData : '')}>
                    {isPageValid ? <CodeEditor primaryId={id} baseId={baseId} codeContent={codeContent.toString()} /> : <ErrorLayout content="Page not found, click here to create a new page!" />}
                </div>
                <div className={styles.actions + ' ' + (!isPageValid ? styles.disabled : '')}>
                    <CodeActions onClick={clickInteractions}  />
                    { showSettings ? 
                    
                    <SettingsWindow
                        onClose={closeSettingsWindow}
                        onChangeLanguage={changeLanguageHighlight}
                        /> : '' }
                </div>
            </div>
        </>
    )
}

export default Post