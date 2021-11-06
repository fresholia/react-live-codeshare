import styles from '../../styles/code.module.scss'

import { CloseIcon } from '../Icons'

import type { settingsEnum } from '../../types/SettingsComponentTypes.d'

export default function SettingsWindow(e: settingsEnum) {
    return (
        <>
            <div className={styles.window}>
                <div className={styles.header}>
                    <span>Settings</span>
                    <CloseIcon fillColor="white" size={16} button={true} onClick={e.onClose?.bind('')} />
                </div>
                <div className={styles.inputGroup}>
                    <p>Language:</p>
                    <select onChange={ event => { e.onChangeLanguage?.bind(event.target.value) } }>
                        <option value="c">C</option>
                        <option value="cpp">C++</option>
                        <option value="csharp">C#</option>
                        <option value="python">Python</option>
                        <option value="php">PHP</option>
                        <option value="java">Java</option>
                        <option value="javascript">JavaScript</option>
                        <option value="go">Go</option>
                        <option value="lua">Lua</option>
                        <option value="html">HTML</option>
                        <option value="css">CSS</option>
                        <option value="scss">SCSS</option>
                    </select>
                </div>
            </div>
        </>
    )
}