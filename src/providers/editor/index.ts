import Router from 'next/router'
import { IClientActions } from 'types/codeview'

import variables from 'constants/settings'

import { updateClients } from 'providers/socket'

let viewData: any = {
    lastSavedContent: '',
    content: '',
    localClientPosition: {}
}

setInterval(() => {
    if (viewData.content == viewData.lastSavedContent || !viewData.id)
        return false

    viewData.lastSavedContent = viewData.content;
    const content = viewData.content.split('\n')

    if (content.length > variables.maxLengthPerPage)
        content.length = variables.maxLengthPerPage

    // TODO_GITHUB: We don't need send full content. We just need to send the changed lines.
    updateClients(viewData.baseid.toString(), content, viewData.localClientPosition) // send type array
}, 300)

const saveFile = (id: number, baseid: string, content: string | undefined, localClientPosition: IClientActions) => {
    viewData.id = id.toString()
    viewData.baseid = baseid
    viewData.content = content
    viewData.localClientPosition = localClientPosition
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

export { saveFile, createFile }