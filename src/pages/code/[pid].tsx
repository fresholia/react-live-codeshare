import { useRouter } from 'next/router'

import type { NextPage } from 'next'

import { ErrorLayout } from '../../layouts/error'

import { LoadingLayout } from '../../layouts/loading'

import styles from '../../styles/code.module.scss'

import CodeActions from '../../components/editor/ActionsComponent'

import CodeEditor from '../../components/editor/EditorComponent'

import Head from 'next/head'

import variables from '../../variables'

import useSWR from 'swr'

const fetcher = async (url: string) => {
    const res = await fetch(url)
  
    if (!res.ok) {
      return res.status
    }
  
    return res.json()
  }

const Post: NextPage = () => {
    const router = useRouter()
    const { pid } = router.query

    if (router.isFallback || pid === undefined || pid === 'undefined') {
        return <LoadingLayout />
    }

    const { data, error } = useSWR(`/api/code/${pid}`, fetcher)
    const pageData = typeof(data) === 'object' ? data[0] : {}

    const id = pageData?.id
    const name = pageData?.name
    const content = pageData?.content

    const isPageValid = typeof(data) === 'object' && id

    return (
        <>
            <Head>
                <title>{isPageValid ? (`${name} - ${variables.projectName}`) : `page not found - ${variables.projectName}`}</title>
            </Head>
            <div className={styles.wrapper}>
                <div className={styles.codeContent + ' ' + (!isPageValid ? styles.noData : '')}>
                    {isPageValid ? <CodeEditor baseId={id} codeContent={content} /> : <ErrorLayout />}
                </div>
                <div className={styles.actions + ' ' + (!isPageValid ? styles.disabled : '')}>
                    <CodeActions />
                </div>
            </div>
        </>
    )
}

export default Post