import styles from '../../styles/CodeEditor.module.scss'

import { CloseIcon } from '../Icons'

import type { settingsEnum } from '../../types/SettingsComponentTypes.d'

export default function SettingsWindow(e: settingsEnum) {
    const supportedLangs = e.props.supportedLangs

    return (
        <>
            <div className={styles.window}>
                <div className={styles.header}>
                    <span>Settings</span>
                    <CloseIcon fillColor="white" size={16} button={true} onClick={ () => { e.onClose(false) }} />
                </div>
                <div className={styles.inputGroup}>
                    <p>Language:</p>
                    <select onChange={ event => { e.onChangeLanguage(event.target.value) } }>
                        {
                            supportedLangs && 
                                supportedLangs.map((value: any) => {
                                    return <option key={value.id} value={value.id}>{value.aliases[0]}</option>
                                })
                        }
                        
                    </select>
                </div>
                <div className={styles.inputGroup}>
                    <p>Editor Theme:</p>
                    <select onChange={ event => e.onChangeTheme(event.target.value) }>
                        <option value="vs-dark">Dark</option>
                        <option value="light">Light</option>
                    </select>
                </div>
            </div>
        </>
    )
}