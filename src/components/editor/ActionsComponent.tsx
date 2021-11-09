import styles from '../../styles/CodeEditor.module.scss';

import { LogoIcon, SettingsIcon, DownloadIcon, PlusIcon, ThemeIcon, AboutIcon } from '../Icons'

import type { codeActionsProps } from '../../types/CodeActionTypes.d'

export default function CodeActions(e: codeActionsProps) {
    return (
        <div className={styles.interactions}>

            <div className={styles.logo}>
                <LogoIcon fillColor="white" size={45} />
            </div>
            <div>
                <div className={styles.item} onClick={ e.onClick?.settings?.bind('') }>
                    <SettingsIcon fillColor="white" size={20} />
                    <span>Settings</span>
                </div>
                <div className={styles.item}>
                    <DownloadIcon fillColor="white" size={20} />
                    <span>Download</span>
                </div>
                <div className={styles.item}>
                    <PlusIcon fillColor="white" size={20} />
                    <span>New Tab</span>
                </div>
                <div className={styles.item}>
                    <ThemeIcon fillColor="white" size={20} />
                    <span>Theme</span>
                </div>
                <div className={styles.item} onClick={ e.onClick?.about?.bind('') }>
                    <AboutIcon fillColor="white" size={20} />
                    <span>About</span>
                </div>
            </div>
            <div></div>
        </div>
    )
}