import styles from '../../styles/code.module.scss';

import { SettingsIcon, DownloadIcon, PlusIcon, ThemeIcon, AboutIcon } from '../Icons'

import type { codeActionsProps } from '../../types/CodeActionTypes.d'

export default function CodeActions(e: codeActionsProps) {
    return (
        <div className={styles.interactions}>
            <div>
                <div className={styles.item} onClick={ e.onClick?.settings?.bind('') }>
                    <SettingsIcon fillColor="white" size={20} />
                </div>
                <div className={styles.item}>
                    <DownloadIcon fillColor="white" size={20} />
                </div>
                <div className={styles.item}>
                    <PlusIcon fillColor="white" size={20} />
                </div>  
            </div>
            <div>
                <div className={styles.item}>
                    <ThemeIcon fillColor="white" size={20} />
                </div>
                <div className={styles.item} onClick={ e.onClick?.about?.bind('') }>
                    <AboutIcon fillColor="white" size={20} />
                </div>
            </div>
        </div>
    )
}