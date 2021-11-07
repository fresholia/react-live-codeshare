import Router from 'next/router'

import { useEffect } from 'react'

import variables from '../../variables'

import { updateClients } from '../socket/SocketProvider'

let lastCodeId: number = 0;
let lastCodeContent: string = '';

let lastSavedContent: string = '';
let lastBaseId: string = '';

const saveFileRemote = async () => {
    await fetch(`/api/saveCode`, {
        method: 'POST',
        body: JSON.stringify([lastCodeId, lastCodeContent, lastBaseId]),
        headers: {'Content-Type': 'application/json'}
    })
    updateClients(lastBaseId.toString(), JSON.stringify(lastCodeContent.split('\n')))

    if (variables.debugEnabled)
        console.log("[C2G] > Saved the file.")
}

setInterval(() => {
    if (lastCodeContent == lastSavedContent)
        return false;

    lastSavedContent = lastCodeContent;
    saveFileRemote()
}, 2000)

const saveFile = (id?: number, baseid?: string, content?: string) => {
    if (id && content && baseid) {
        lastCodeId = id
        lastBaseId = baseid
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