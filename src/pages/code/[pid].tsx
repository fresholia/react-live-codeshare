"use strict";

import { useState, useEffect } from 'react'

import { useRouter } from 'next/router'

import { ErrorLayout, LoadingLayout } from '../../components/layouts/index'

import { CodeActions, SettingsWindow } from '../../components/editor/index'

import styles from '../../styles/CodeEditor.module.scss'

import variables from '../../variables'

import { SocketProvider, socket, updateLangData } from '../../models/socket/SocketProvider'

import Editor, { useMonaco } from '@monaco-editor/react'

import { saveFile } from '../../models/codeview/codeview'

const Page = () => {
    const router = useRouter()
    const { pid } = router.query

    const [ pageData, setPageData ] = useState<any>()

    const [ showSettings, setSettingsWindow ] = useState<boolean>(true)
    const [ codeContent, setCodeContent ] = useState<string>("")

    const [ language, setLanguage ] = useState<string>('')
    const [ fontSize, setFontSize ] = useState<number>(20)
    const [ tabSize, setTabSize ] = useState<number>(4)

    const [ supportedLangs, setSupportedLangs ] = useState<any>()

    const [ theme, setTheme ] = useState<string>('vs-dark')

    const monaco = useMonaco()

    useEffect(() => {
        if (monaco)
            setSupportedLangs(monaco?.languages.getLanguages())
    }, [monaco])

    useEffect(() => {
        if (pid)
            SocketProvider(pid.toString(), setCodeContent, setPageData)
    }, [pid, codeContent])

    useEffect(() => {
        if (pageData?.content)
            setCodeContent(pageData.content.join('\n'))

        setLanguage(pageData?.language)
    }, [pageData])

    useEffect(() => {
        if (pid)
            updateLangData(pid.toString(), language)
    }, [language])

    let pageDetails = typeof(pageData) === 'object' ? pageData : {}

    const id = pageDetails?.id
    const baseId = pageDetails?.base_id
    const name = pageDetails?.name

    const isPageValid = typeof(pageData) === 'object' && id

    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.actions + ' ' + (!isPageValid ? styles.disabled : '')}>
                    
                <CodeActions onClick={{settings: () => setSettingsWindow(true)}}  />
                 
                    {showSettings && <SettingsWindow
                        props={
                            {
                                supportedLangs: supportedLangs
                            }
                        }
                        onClose = {setSettingsWindow}
                        onChangeTheme = {setTheme}
                        onChangeLanguage = {setLanguage}
                        />}

                    
                </div>
                <div className={styles.content + ' ' + (!isPageValid ? styles.noData : '')}>
                {isPageValid ?
                    <>
                        <div className={styles.landing}>
                            <h2>Welcome code2gether!</h2>

                            <a href="#">
                                Delete this page
                            </a>
                        </div>
                        
                        <div className={styles.editorSection}>
                            
                            <Editor
                                width = "100%"
                                height = "100%"
                                loading = {<LoadingLayout title="Loading editor."/>}
                                language = {language}
                                theme = {theme}
                                saveViewState = {false}
                                defaultLanguage = "javascript"
                                value = {codeContent}
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
                                        lineNumbers: 'on',
                                        renderLineHighlight: 'none',
                                        tabSize: tabSize,
                                        quickSuggestions: false
                                    }
                                }
                                />
                        </div>
                    </>
                :
                <ErrorLayout content="Page not found, click here to create a new page!" />}
                </div>
            </div>
        </>
    )
}

export default Page