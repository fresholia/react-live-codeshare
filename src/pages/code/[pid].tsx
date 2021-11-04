import { useRouter } from 'next/router';

import type { NextPage } from 'next';

import styles from '../../styles/code.module.scss';

import CodeActions from '../../components/ActionsComponent';


const Post: NextPage = () => {
    const router = useRouter()
    const { pid } = router.query

    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.codeContent}>
                    Burası kod içeriği
                </div>
                <div className={styles.actions}>
                    <CodeActions />
                </div>
            </div>
        </>
    )
}

export default Post