
import styles from '../../styles/Loading.module.scss'

import { LoadingIcon } from '../Icons'

import { LoadingLayoutProps } from '../../types/LoadingLayoutTypes.d'

export function LoadingLayout(e: LoadingLayoutProps) {
    return (
        <div className={styles.loading}>
            <LoadingIcon fillColor="white" size={48} />
            {
                e.title && <span className={styles.title}>{e.title}</span>
            }
        </div>
    )
}