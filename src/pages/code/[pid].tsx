import { NextPage } from 'next';

import { useRouter } from 'next/router'

import Image from 'next/image'

import React, { useState, useEffect, useReducer, useRef } from 'react'

import Editor, { useMonaco } from '@monaco-editor/react'
import type * as monacoEditor from "monaco-editor/esm/vs/editor/editor.api"

import styles from '../../components/styles/editor.module.scss'

import { ErrorLayout, LoadingLayout } from '../../components/layouts/index'

import { CodeActions, SettingsWindow } from '../../components/editor/index'

import { setClientRoom, SocketProvider, updateCodeData } from '../../models/socket/socket.model'

import { saveFile } from '../../models/editor/editor.model'

import { editorStateReducer, initialEditorState } from '../../reducers/editorStateReducer';

import { ICodeBlocks, IClientActions, IInputActions } from '../../types/codeview.type';
import { replaceInArray } from '../../components/utils/arrayUtils';

import calculateSize from 'calculate-size'
import { PlayIcon, TrashIcon } from '../../components/iconset.icons';

import langs from '../../models/static/static.langs'

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

    const handleSetClients = (clients: IClientActions[]) => {
        dispatchEditorStateAction({type: 'SET_CLIENTS_ACTIONS', payload: clients})
    }

    const handleChangeData = (key: keyof ICodeBlocks, value: any) => {
        dispatchEditorStateAction({type: 'SET_EDITOR_CONFIG', payload: {...editorState.config, [key]: value}})
    }

    const handleChangeInputValues = (key: keyof IInputActions, value: any) => {
        dispatchEditorStateAction({type: 'SET_INPUT_VALUES', payload: {...editorState.config, [key]: value}})
    }

    useEffect(() => {
        if (pid && pid.length > 0) {
            SocketProvider(handleSetPageData, handleSetClients)
        }
    }, [pid])

    return (
        <>
            <div className={`${styles.wrapper} ${!editorState.fields.joined && styles.disabled}`}>
                <div className={styles.actions}>
                <CodeActions onClick={{settings: () => setSettingsWindow(true)}}  />
                    {(langs && showSettings) && 
                    <SettingsWindow
                        props={
                            {
                                lang: editorState.config.language,
                                langs: langs,
                                clickHandlers: {
                                    setLanguage: (lang: string) => {
                                        if (pid && pid.length > 0)
                                            updateCodeData(pid.toString(), 'language', lang);
                                        
                                        handleChangeData('language', lang)
                                    },
                                    setTheme: (theme: string) => handleChangeData('theme', theme),
                                    close: () => setSettingsWindow(false)
                                }
                            }
                        }
                    />}
                </div>
                <div className={styles.content}>
                    {editorState.config.id > 0 ?
                    <>
                        <div className={styles.landing}>
                            <div className={styles.pageHeader}>
                                <Image alt="Language icon" src={`/iconset/${editorState.config.language}.svg`} width="32" height="32" />
                                {editorState.config.name}
                            </div>
                            
                            <div className={styles.rightActions}>
                                {
                                editorState.config.language === 'javascript' &&
                                    <a className={styles.green} href="#">
                                        <PlayIcon fillColor="#8cff9f" size={16} />
                                        Run
                                    </a>
                                }
                                <a href="#">
                                    <TrashIcon fillColor="#ff8c8c" size={16} />
                                    Delete this page
                                </a>
                            </div>
                        
                        </div>
                        
                        <div className={styles.editorSection}>
                            <div className={styles.clientActions}>
                                {
                                    Object.keys(editorState.clients).map((index: string) => { // ch
                                        const row = editorState.clients[index]
                                        let x = row.position[1] + 25; // padding-left
                                        let y = (row.position[0] - 1) * 22;

                                        return (
                                            <div key={index} className={styles.client} style={
                                                {
                                                    marginLeft: `${x}px`,
                                                    marginTop: `${y}px`
                                                }
                                            }>
                                                <span>{`${row.name} ${editorState.config.clientId == row.id ? '(you)' : ''}`}</span>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <Editor
                                width = "100%"
                                height = "100%"
                                loading = {<LoadingLayout content="Loading editor, if it doesn't load, refresh the page."/>}
                                language = {editorState.config.language}
                                theme = {editorState.config.theme}
                                saveViewState = {false}
                                defaultLanguage = {editorState.config.language}
                                value = {editorState.config.content.join('\n')}
                                onMount={editor => {
                                    editorRef.current = editor
                                }}
                                onChange = {(value: string | undefined) => {
                                    const editor = editorRef.current
                                    let index = editorState.clients.findIndex((data: IClientActions) => data.id == editorState.config.clientId)
                                    const targetClient = editorState.clients[index]

                                    if (editor && editorState.clients && editorState.config.clientId) {
                                        const position = editor.getPosition()
                            
                                        if (position && targetClient) {
                                            let line = position.lineNumber // Y
                                            let column = position.column // X
                            
                                            if (line) {
                                                const text = editor.getModel()?.getValueInRange({ startLineNumber: line, startColumn: 1, endLineNumber: line, endColumn: column }).replace(/ /g, '.')
                            
                                                let scale = calculateSize(text ? text : '', {
                                                    font: 'Inter'
                                                })
                            
                                                const newClients = replaceInArray(editorState.clients, index, {...targetClient, position: [line, scale.width]})
                                
                                                dispatchEditorStateAction({type: 'SET_CLIENTS_ACTIONS', payload: newClients })
                                            }
                                        }
                                    }

                                    saveFile(editorState.config.id, editorState.config.base_id, value, editorState.clients[index])
                                }}
                                options = {{
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
                            }}/>
                        </div>
                    </>
                    :
                    <ErrorLayout content="Page not found, click here to create a new page!" />}
                </div>
            </div>
            {
            !editorState.fields.joined &&
            <div className={styles.staticPopup}>
                <div className={styles.window}>
                    <div className={styles.header}>
                        <span>Select your name</span>
                    </div>
                    <div className={styles.content}>
                        <div className={styles.inputGroup}>
                            <input type="text" placeholder="Username" onChange = { (e) => { handleChangeInputValues('name', e.target.value) } } />
                        </div>
                        <div className={styles.inputGroup}>
                            <button className={styles.button} onClick={ () => {
                                if (pid && editorState.fields.name.length > 2 && editorState.fields.name.length < 24) {
                                    setClientRoom(pid.toString(), editorState.fields.name)
                                    handleChangeInputValues('joined', true)
                                }
                            } }>Ok</button>
                        </div>
                    </div>
                </div>
            </div>
            }
        </>
    )
}

export default Page