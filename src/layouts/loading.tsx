
import styles from '../styles/loading.module.scss'

import { LoadingIcon } from '../components/Icons'

export function LoadingLayout() {
    return (
        <div className={styles.loading}>
            <LoadingIcon fillColor="white" size={48} />
        </div>
    )
}