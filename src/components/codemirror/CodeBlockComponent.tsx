import {UnControlled as CodeMirror} from 'react-codemirror2'

import 'codemirror/lib/codemirror.css'

import 'codemirror/theme/material-darker.css'

import styles from '../../styles/code.module.scss'

export default function EditorSection({Component, pageProps}) {
    return (
        <CodeMirror
            className = {styles.mirror}
            value = {pageProps.content}
            options = {
                {
                    theme: 'material-darker',
                    mode: 'javascript',
                    lineNumbers: true
                }
            }
            onChange={() => null}
      />
    )
}