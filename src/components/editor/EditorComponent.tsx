import dynamic from 'next/dynamic'

import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material-darker.css'

const CodeMirror = dynamic(() => {
    //import('codemirror/mode/javascript/javascript')

    return import('react-codemirror')
}, { ssr: false })

import styles from '../../styles/code.module.scss'

import type { EditorComponentType } from '../../types/EditorComponentTypes.d'

import { saveFile } from '../../models/codeview/codeview'

export default function EditorSection(e: EditorComponentType) {
    return (CodeMirror &&
        <CodeMirror
            className = {styles.mirror}
            value = {e.codeContent?.toString()}
            options = {
                {
                    theme: 'material-darker',
                    mode: 'javascript',
                    lineNumbers: true
                }
            }
            onChange = {(value) => {
                saveFile(e.primaryId, e.baseId, value)
            }}
      />
    )
}