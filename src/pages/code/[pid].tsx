import { useState, useEffect } from 'react'

import { useRouter } from 'next/router'

import Head from 'next/head'

import { ErrorLayout, LoadingLayout } from '../../components/layouts/index'

import { CodeActions, SettingsWindow } from '../../components/editor/index'

import styles from '../../styles/code.module.scss'

import variables from '../../variables'

import { SocketProvider, socket, updateLangData } from '../../models/socket/SocketProvider'

import Editor, { useMonaco } from '@monaco-editor/react'

import { saveFile } from '../../models/codeview/codeview'

import useSWR from 'swr'

let pageData: any

const fetcher = async (url: string) => {
    const res = await fetch(url)
  
    if (!res.ok) {
      return res.status
    }
  
    return res.json()
}

const isServer = () => typeof window === `undefined`;

const Page = () => {
    const router = useRouter()
    const { pid } = router.query

    const [ showSettings, setSettingsWindow ] = useState(true)
    const [ codeContent, setCodeContent ] = useState({})

    const [ language, setLanguage ] = useState<string>('')
    const [ fontSize, setFontSize ] = useState<number>(20)
    const [ tabSize, setTabSize ] = useState<number>(4)

    const [ supportedLangs, setSupportedLangs ] = useState<any>()

    const [ theme, setTheme ] = useState<string>('vs-dark')

    const { data: pageData, error } = useSWR(`/api/code/${pid}`, fetcher)

    const monaco = useMonaco()

    useEffect(() => {
        if (monaco)
            setSupportedLangs(monaco?.languages.getLanguages())
    }, [monaco])

    useEffect(() => {
        const content = typeof pageData?.content === 'string' ? JSON.parse(pageData?.content) : []
        if (content)
            setCodeContent(content.join('\n'))

        setLanguage(pageData?.language)

    }, [pageData])

    useEffect(() => {
        if (pid)
            SocketProvider(pid.toString(), codeContent.toString(), setCodeContent)
    }, [pid, codeContent])

    useEffect(() => {
        if (pid)
            updateLangData(pid.toString(), language)
    }, [language])

    if (!pageData || !socket)
        return <LoadingLayout />

    let pageDetails = typeof(pageData) === 'object' ? pageData : {}

    const id = pageDetails?.id
    const baseId = pageDetails?.base_id
    const name = pageDetails?.name

    const isPageValid = typeof(pageData) === 'object' && id

    const clickInteractions = {
        settings: () => setSettingsWindow(true),
        about: () => alert('soon')
    }

    return ( !isServer() &&
        <>
            <Head>
                <title>{isPageValid ? (`${name} - ${variables.projectName}`) : `page not found - ${variables.projectName}`}</title>
            </Head>
            <div className={styles.wrapper}>
                <div className={styles.codeContent + ' ' + (!isPageValid ? styles.noData : '')}>
                    {isPageValid ?
                      <Editor
                        width = "100%"
                        height = "100%"
                        loading = {<LoadingLayout/>}
                        language = {language}
                        theme = {theme}
                        saveViewState = {false}
                        defaultValue = "Type something..."
                        defaultLanguage = "javascript"
                        value = {codeContent?.toString()}
                        onChange = {
                            (value: any) => {
                                saveFile(id, baseId, value)
                            }
                        }
                        options = {
                            {
                                fontSize: fontSize,
                                dragAndDrop: false,
                                codeLens: false,
                                parameterHints: {
                                    enabled: false
                                },
                                scrollBeyondLastLine: false,
                                contextmenu: false,
                                lineNumbers: 'on',
                                renderLineHighlight: 'none',
                                tabSize: tabSize
                            }
                        }
                        />
                        :
                        <ErrorLayout content="Page not found, click here to create a new page!" />}
                </div>
                <div className={styles.actions + ' ' + (!isPageValid ? styles.disabled : '')}>
                    <CodeActions onClick={clickInteractions}  />
                    { showSettings ? 
                    
                    <SettingsWindow
                        props={
                            {
                                supportedLangs: supportedLangs
                            }
                        }
                        onClose = {setSettingsWindow}
                        onChangeTheme = {setTheme}
                        onChangeLanguage = {setLanguage}
                        /> : '' }
                </div>
            </div>
        </>
    )
}

export default Page