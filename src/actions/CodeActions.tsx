import Router from 'next/router'

import { useEffect } from 'react'

let lastCodeId: number = 0
let lastCodeContent: string = '';

let lastSavedContent: string = '';

const saveFileRemote = async () => {
    await fetch(`/api/saveCode`, {
        method: 'POST',
        body: JSON.stringify([lastCodeId, lastCodeContent]),
        headers: {'Content-Type': 'application/json'}
    })
    console.log("[C2G] > Saved the file.")
}

setInterval(() => {
    if (lastCodeContent == lastSavedContent)
        return false;

    lastSavedContent = lastCodeContent;
    saveFileRemote()
}, 2000)

const saveFile = (id?: number, content?: string) => {
    if (id && content) {
        lastCodeId = id
        lastCodeContent = content
    }
}

const createFile = async (name?: string) => {
    const res = await fetch(`/api/createCode`, {
        method: 'POST',
        body: JSON.stringify([name]),
        headers: {'Content-Type': 'application/json'}
    })
    const data = await res.json()

    Router.push(`/code/${data.base_id}`)
}

export { saveFile, createFile, saveFileRemote }