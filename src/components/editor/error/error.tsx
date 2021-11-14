import styles from './_error.module.scss'

import { ErrorIcon } from 'utils/icons'

import type { IErrorLayout } from 'types/codeview'

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