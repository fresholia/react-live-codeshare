import { useRouter } from 'next/router'

import { useEffect, useState } from 'react'

import type { NextPage } from 'next'

import { ErrorLayout } from '../../layouts/error'

import { LoadingLayout } from '../../layouts/loading'

import styles from '../../styles/code.module.scss'

import CodeActions from '../../components/editor/ActionsComponent'

import CodeEditor from '../../components/editor/EditorComponent'

import Head from 'next/head'

import variables from '../../variables'

interface pageContentEnum {
    name?: string;
    content?: string;
    id?: number;
}

const Post: NextPage = () => {
    const router = useRouter()
    const { pid } = router.query

    if (router.isFallback || pid === undefined || pid === 'undefined') {
        return <LoadingLayout />
    }

    const [pageData, setPageData] = useState<pageContentEnum>({})

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`/api/code/${pid}`)
            const data = await res.json()
            let values = typeof(data) === 'object' ? data[0] : {}

            setPageData(values)
        }
        fetchData()
    }, [])

    return (
        <>
            <Head>
                <title>{pageData ? (`${pageData.name} - ${variables.projectName}`) : 'loading...'}</title>
            </Head>
            <div className={styles.wrapper}>
                <div className={styles.codeContent + ' ' + (!pageData ? styles.noData : '')}>
                    {pageData ? <CodeEditor baseId={pageData.id} codeContent={pageData.content} /> : <ErrorLayout />}
                </div>
                <div className={styles.actions + ' ' + (!pageData ? styles.disabled : '')}>
                    <CodeActions />
                </div>
            </div>
        </>
    )
}
export default Post