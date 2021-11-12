import styles from '../../components/styles/errorlayout.module.scss'

import { ErrorIcon } from '../iconset.icons'

import type { IErrorLayout } from '../../types/codeview.type'

export function ErrorLayout(e: IErrorLayout) {
    return (
        <div className={styles.error}>
            <ErrorIcon fillColor="white" size={48} />
            <p>
                {e.content ? e.content : 'Something went wrong, try again later!' }
            </p>
        </div>
    )
}