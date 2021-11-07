import Router from 'next/router'

import { useEffect } from 'react'

import variables from '../../variables'

import { updateClients } from '../socket/SocketProvider'

let lastCodeId: string = '';
let lastCodeContent: string = '';

let lastSavedContent: string = '';
let lastBaseId: string = '';

const saveFileRemote = async (content: any) => {
    await fetch(`/api/saveCode`, {
        method: 'POST',
        body: JSON.stringify([lastCodeId, content.join('\n').toString(), lastBaseId]),
        headers: {'Content-Type': 'application/json'}
    })

    if (variables.debugEnabled)
        console.log("[C2G] > Saved the file.")
}

setInterval(() => {
    if (lastCodeContent == lastSavedContent)
        return false;

    lastSavedContent = lastCodeContent;
    const content = lastCodeContent.split('\n')

    if (content.length > variables.maxLengthPerPage)
        content.length = variables.maxLengthPerPage

    updateClients(lastBaseId.toString(), JSON.stringify(content.join('\n')))
    saveFileRemote(content)
}, 1000)

const saveFile = (id: string, baseid: string, content: string) => {
    if (id && baseid) {
        lastCodeId = id
        lastBaseId = baseid
        lastCodeContent = content || ''
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