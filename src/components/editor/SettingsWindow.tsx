import styles from '../../styles/code.module.scss'

import { CloseIcon } from '../Icons'

import type { settingsEnum } from '../../@types/settingsWindow.d'

export default function SettingsWindow(e: settingsEnum) {
    return (
        <>
            <div className={styles.window}>
                <div className={styles.header}>
                    
                    <span>Settings</span>
                    <CloseIcon fillColor="white" size={16} button={true} onClick={e.onClose?.bind('')} />
                </div>
            </div>
        </>
    )
}