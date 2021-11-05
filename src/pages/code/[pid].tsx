import { useRouter } from 'next/router';

import { useEffect, useState } from 'react';

import type { NextPage } from 'next';

import { ErrorLayout } from '../../layouts/error';
import { LoadingLayout } from '../../layouts/loading';

import styles from '../../styles/code.module.scss';

import CodeActions from '../../components/editor/ActionsComponent';

import CodeEditor from '../../components/editor/EditorComponent';

const Post: NextPage = () => {
    const router = useRouter()
    if (router.isFallback)
        return <LoadingLayout />

    const { pid } = router.query

    if (pid === undefined)
        return <LoadingLayout />

    const [pageData, setData] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`/api/code/${pid}`)
            const data = await res.json()
            let values = typeof(data) === 'object' ? data[0] : false

            setData(values)
        }
        fetchData()
    }, [])

    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.codeContent + ' ' + (!pageData ? styles.noData : '')}>
                    {pageData ? <CodeEditor id={pageData.id} codeContent={pageData.content} /> : <ErrorLayout />}
                </div>
                <div className={styles.actions + ' ' + (!pageData ? styles.disabled : '')}>
                    <CodeActions />
                </div>
            </div>
        </>
    )
}
export default Post