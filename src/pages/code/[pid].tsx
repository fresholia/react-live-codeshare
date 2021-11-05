import { useRouter } from 'next/router';

import type { NextPage } from 'next';

import styles from '../../styles/code.module.scss';

import CodeActions from '../../components/ActionsComponent';

import CodeEditor from '../../components/codemirror/CodeBlockComponent'

import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const Post: NextPage = () => {
    const router = useRouter()
    const { pid } = router.query

    const { data, error } = useSWR('/api/code/' + pid?.toString(), fetcher)

    const noData = typeof data === 'undefined'

    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.codeContent + ' ' + (noData ? styles.noData : '')}>
                    {
                        noData ? <div className={styles.error}></div> : <CodeEditor pageProps={data[0]} />
                    }
                </div>
                <div className={styles.actions}>
                    <CodeActions />
                </div>
            </div>
        </>
    )
}

export default Post