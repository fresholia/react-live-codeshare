import { NextPage } from 'next';

import { useRouter } from 'next/router'

import Image from 'next/image'

import { useState, useEffect, useReducer } from 'react'

import Editor, { useMonaco } from '@monaco-editor/react'

import styles from '../../styles/editor.module.scss'

import { ErrorLayout, LoadingLayout } from '../../components/layouts/index'

import { CodeActions, SettingsWindow } from '../../components/editor/index'

import { SocketProvider, socket, updateLangData } from '../../models/socket/socket.model'

import { saveFile } from '../../models/editor/editor.model'

import { editorStateReducer, initialEditorState } from '../../reducers/editorStateReducer';

import { ICodeBlocks } from '../../types/codeview.type';

const Page: NextPage = () => {
    const router = useRouter()
    const monaco = useMonaco()
    const [ editorState, dispatchEditorStateAction ] = useReducer(editorStateReducer, initialEditorState)

    const [ showSettings, setSettingsWindow ] = useState<boolean>(false)

    const { pid } = router.query

    const handleSetPageData = (pageData: ICodeBlocks) => {
        dispatchEditorStateAction({type: 'SET_EDITOR_STATE', payload: pageData})
    }

    const handleChangeData = (key: keyof ICodeBlocks, value: any) => {
        dispatchEditorStateAction({type: 'SET_EDITOR_STATE', payload: {...editorState, [key]: value}})
    }

    useEffect(() => {
        if (pid && pid.length > 0) {
            SocketProvider(pid.toString(), handleSetPageData)

            if (monaco) {
                handleChangeData('languages', monaco.languages.getLanguages())
            }
        }
    }, [pid, monaco])

    const isPageValid = editorState.id > 0

    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.actions + ' ' + (!isPageValid ? styles.disabled : '')}>
                    
                <CodeActions onClick={{settings: () => setSettingsWindow(true)}}  />
                    {(editorState.languages && showSettings) && 
                    <SettingsWindow
                        props={
                            {
                                langs: editorState.languages,
                                clickHandlers: {
                                    setLanguage: (lang: string) => handleChangeData('language', lang),
                                    setTheme: (theme: string) => handleChangeData('theme', theme),
                                    close: () => setSettingsWindow(false)
                                }
                            }
                        }
                    />}
                </div>
                <div className={styles.content + ' ' + (!isPageValid ? styles.noData : '')}>
                {isPageValid ?
                    <>
                        <div className={styles.landing}>
                            <div className={styles.pageHeader}>
                                <Image alt="Language icon" src={`/iconset/${editorState.language}.svg`} width="32" height="32" />
                                {editorState.name}
                            </div>
                            
                            <a href="#">
                                Delete this page
                            </a>
                        </div>
                        
                        <div className={styles.editorSection}>
                            
                            <Editor
                                width = "100%"
                                height = "100%"
                                loading = {<LoadingLayout content="Loading editor."/>}
                                language = {editorState.language}
                                theme = {editorState.theme}
                                saveViewState = {false}
                                defaultLanguage = {editorState.language}
                                value = {editorState.content.join('\n')}
                                onChange = {
                                    (value: string | undefined) => {
                                        saveFile(editorState.id, editorState.base_id, value)
                                    }
                                }
                                options = {
                                    {
                                        dragAndDrop: false,
                                        codeLens: false,
                                        parameterHints: {
                                            enabled: false
                                        },
                                        scrollBeyondLastLine: false,
                                        lineNumbers: 'on',
                                        renderLineHighlight: 'none',
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