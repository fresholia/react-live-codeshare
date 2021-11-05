
import styles from '../styles/error.module.scss'

import { ErrorIcon } from '../components/Icons'

export function ErrorLayout() {
    return (
        <div className={styles.error}>
            <ErrorIcon fillColor="white" size={48} />
            <p>
                Bir hata oluştu ve sayfa yüklenemedi, daha sonra tekrar deneyin.
            </p>
        </div>
    )
}