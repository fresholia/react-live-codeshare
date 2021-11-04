import { useRouter } from 'next/router';

import { useState } from 'React'

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

    let values = data[0];
    return (
        <>
            <div className={styles.header}>
                {values.name}
            </div>
            <div className={styles.wrapper}>
                <div className={styles.codeContent}>
                    <CodeEditor pageProps={values} />
                </div>
                <div className={styles.actions}>
                    <CodeActions pageProps={values} />
                </div>
            </div>
        </>
    )
}

export default Post