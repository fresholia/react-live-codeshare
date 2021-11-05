import {UnControlled as CodeMirror} from 'react-codemirror2'

import 'codemirror/lib/codemirror.css'

import 'codemirror/theme/material-darker.css'

import styles from '../../styles/code.module.scss'

import type { EditorComponentType } from '../../@types/EditorComponentType.d'

import { saveFile } from '../../actions/CodeActions'

export default function EditorSection(e: EditorComponentType) {
    return (
        <CodeMirror
            className = {styles.mirror}
            value = {e.codeContent}
            options = {
                {
                    theme: 'material-darker',
                    mode: 'javascript',
                    lineNumbers: true
                }
            }
            onChange = {(editor, data, value) => {
                saveFile(e.baseId, value)
            }}
      />
    )
}