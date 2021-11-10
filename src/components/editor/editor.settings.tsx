import styles from '../../styles/editor.module.scss'

import { CloseIcon } from '../iconset.icons'

import type { ISettingsType, ISettingsTypeValue } from '../../types/codeview.settings.type'

export default function SettingsWindow(e: ISettingsType) {
    return (
        <>
            <div className={styles.window}>
                <div className={styles.header}>
                    <span>Settings</span>
                    <CloseIcon fillColor="white" size={16} button={true} onClick={ () => e.props.clickHandlers.close()} />
                </div>
                <div className={styles.inputGroup}>
                    <p>Language:</p>
                    <select onChange={ event => e.props.clickHandlers.setLanguage(event.target.value) }>
                        {
                            e.props.langs && e.props.langs.map((value: any) => {
                                return <option key={value.id} value={value.id}>{value.aliases[0]}</option>
                            })
                        }
                        
                    </select>
                </div>
                <div className={styles.inputGroup}>
                    <p>Editor Theme:</p>
                    <select onChange={ event => e.props.clickHandlers.setTheme(event.target.value) }>
                        <option value="vs-dark">Dark</option>
                        <option value="light">Light</option>
                    </select>
                </div>
            </div>
        </>
    )
}