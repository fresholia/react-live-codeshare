import { NextPage } from 'next';

import { useRouter } from 'next/router'

import Image from 'next/image'

import React, { useState, useEffect, useReducer, useRef } from 'react'

import Editor, { useMonaco } from '@monaco-editor/react'
import type * as monacoEditor from "monaco-editor/esm/vs/editor/editor.api"

import styles from '../../styles/editor.module.scss'

import { ErrorLayout, LoadingLayout } from '../../components/layouts/index'

import { CodeActions, SettingsWindow } from '../../components/editor/index'

import { SocketProvider, socket, updateLangData } from '../../models/socket/socket.model'

import { saveFile } from '../../models/editor/editor.model'

import { editorStateReducer, initialEditorState } from '../../reducers/editorStateReducer';

import { ICodeBlocks, IClientActions } from '../../types/codeview.type';
import { replaceInArray } from '../../utils/arrayUtils';

import calculateSize from 'calculate-size'
import { PlayIcon, TrashIcon } from '../../components/iconset.icons';

const Page: NextPage = () => {
    const router = useRouter()
    const monaco = useMonaco()

    const editorRef = useRef<monacoEditor.editor.IStandaloneCodeEditor | null>()

    const [ editorState, dispatchEditorStateAction ] = useReducer(editorStateReducer, initialEditorState)

    const [ showSettings, setSettingsWindow ] = useState<boolean>(false)

    const { pid } = router.query

    const handleSetPageData = (pageData: ICodeBlocks) => {
        dispatchEditorStateAction({type: 'SET_EDITOR_CONFIG', payload: pageData})
    }

    const handleChangeData = (key: keyof ICodeBlocks, value: any) => {
        dispatchEditorStateAction({type: 'SET_EDITOR_CONFIG', payload: {...editorState.config, [key]: value}})
    }

    useEffect(() => {
        if (pid && pid.length > 0) {
            SocketProvider(pid.toString(), handleSetPageData)

            if (monaco) {
                handleChangeData('languages', monaco.languages.getLanguages())
            }
        }
    }, [pid, monaco])

    const isPageValid = editorState.config.id > 0

    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.actions + ' ' + (!isPageValid ? styles.disabled : '')}>
                    
                <CodeActions onClick={{settings: () => setSettingsWindow(true)}}  />
                    {(editorState.config.languages && showSettings) && 
                    <SettingsWindow
                        props={
                            {
                                langs: editorState.config.languages,
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
                                <Image alt="Language icon" src={`/iconset/${editorState.config.language}.svg`} width="32" height="32" />
                                {editorState.config.name}
                            </div>
                            
                            <div className={styles.rightActions}>
                                <a className={styles.green} href="#">
                                    <PlayIcon fillColor="#8cff9f" size={16} />
                                    Run
                                </a>
                                <a href="#">
                                    <TrashIcon fillColor="#ff8c8c" size={16} />
                                    Delete this page
                                </a>
                            </div>
                           
                        </div>
                        
                        <div className={styles.editorSection}>
                            <div className={styles.clientActions}>
                                {
                                    editorState.clients.length > 0 && editorState.clients.map((client: IClientActions, key: string) => {
                                        const x = client.position[0]
                                        const y = client.position[1]
                                        return (
                                            <div key={key} className={styles.client} style={
                                                {
                                                    marginLeft: `${x}px`,
                                                    marginTop: `${y}px`
                                                }
                                            }>
                                                <span>{client.name}</span>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <Editor
                                width = "100%"
                                height = "100%"
                                loading = {<LoadingLayout content="Loading editor."/>}
                                language = {editorState.config.language}
                                theme = {editorState.config.theme}
                                saveViewState = {false}
                                defaultLanguage = {editorState.config.language}
                                value = {editorState.config.content.join('\n')}
                                onMount={editor => {
                                    editorRef.current = editor
                                    /*
                                    // NEED_TO_HELP: we need to find correctly caret position.
                                    setInterval(() => {
                                        const editor = editorRef.current
                                        if (editor) {
                                            const position = editor.getPosition()
                                            if (position) {
                                                const line = position.lineNumber
                                                const column = position.column
                        
                                                if (line && column) {
                                                    const text = editor.getModel()?.getValueInRange({ startLineNumber: line, startColumn: 1, endLineNumber: line, endColumn: column }).replace(/ /g, '')
                                                    const caret = document.getElementsByClassName('cursor-layer')[0]

                                                    const targetClient = editorState.clients[0]
                                                    const newClients = replaceInArray(editorState.clients, 0, {...targetClient, position: [line, column]})
                                                    dispatchEditorStateAction({type: 'SET_CLIENTS_ACTIONS', payload: newClients })
                                                }
                                            }
                                        }
                                    }, 500)
                                    editorRef.current.getModel()?.onDidChangeContent((event) => {
                                        
                                    });
                                    */
                                }}
                                onChange = {
                                    (value: string | undefined) => {
                                        saveFile(editorState.config.id, editorState.config.base_id, value)
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
                                        renderLineHighlight: 'all',
                                        quickSuggestions: false,
                                        fontSize: 16
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