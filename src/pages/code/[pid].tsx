import { useRouter } from 'next/router';

import type { NextPage } from 'next';

import styles from '../../styles/code.module.scss';

import CodeActions from '../../components/editor/ActionsComponent';

import CodeEditor from '../../components/editor/EditorComponent';

import useSWR from 'swr';

import { ErrorIcon } from '../../components/Icons';

import { ErrorLayout } from '../../layouts/error'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const Post: NextPage = () => {
    const router = useRouter()
    const { pid } = router.query

    if ( typeof pid === 'undefined' ) return <ErrorLayout />

    const { data, error } = useSWR(`/api/code/${pid}`, fetcher)

    const noData = typeof data === 'undefined'

    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.codeContent + ' ' + (noData ? styles.noData : '')}>
                    {
                        noData ? (
                        <div className={styles.error}>
                            <ErrorIcon fillColor="white" size={100} />
                            <p>Sayfa adresi geçersiz, yeni sayfa oluşturmak için buraya tıklayın.</p>
                        </div>
                        ) : <CodeEditor />
                    }
                </div>
                <div className={styles.actions + ' ' + (noData ? styles.disabled : '')}>
                    <CodeActions />
                </div>
            </div>
        </>
    )
}
export default Post