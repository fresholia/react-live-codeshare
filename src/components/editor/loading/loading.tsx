
import styles from './_loading.module.scss'

import { LoadingIcon } from 'utils/icons'

import { IErrorLayout } from 'types/codeview'

export function LoadingLayout(e: IErrorLayout) {
    return (
        <div className={styles.loading}>
            <LoadingIcon fillColor="white" size={48} />
            {
                e.content && <span className={styles.title}>{e.content}</span>
            }
        </div>
    )
}