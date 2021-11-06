
import styles from '../styles/error.module.scss'

import { ErrorIcon } from '../components/Icons'

import type { ELayoutProps } from '../@types/ELayoutTypes.d'

export function ErrorLayout(e: ELayoutProps) {
    return (
        <div className={styles.error}>
            <ErrorIcon fillColor="white" size={48} />
            <p>
                {e.content ? e.content : 'Something went wrong, try again later!' }
            </p>
        </div>
    )
}