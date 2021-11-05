import styles from '../styles/code.module.scss';

import { SettingsIcon, DownloadIcon, PlusIcon, ThemeIcon, AboutIcon } from './Icons'

const changeTheme = () => {
    if (typeof window === "object") {
        let dataTheme = document.querySelector('html').dataset.theme
        dataTheme = dataTheme == 'dark' ? 'white' : 'dark';
    }
}

export default function CodeActions() {
    return (
        <>
            <div>
                <div className={styles.item}>
                    <SettingsIcon fillColor="white" size="20" />
                </div>
                <div className={styles.item}>
                    <DownloadIcon fillColor="white" size="20" />
                </div>
                <div className={styles.item}>
                    <PlusIcon fillColor="white" size="20" />
                </div>  
            </div>
            <div>
                <div className={styles.item} onClick={changeTheme}>
                    <ThemeIcon fillColor="white" size="20" />
                </div>
                <div className={styles.item}>
                    <AboutIcon fillColor="white" size="20" />
                </div>
            </div>

        </>
    )
}