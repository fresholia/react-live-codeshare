const saveFile = async (id?: number, content?: string) => {
    const res = await fetch(`/api/saveCode`, {
        method: 'POST',
        body: JSON.stringify([id, content]),
        headers: {'Content-Type': 'application/json'}
    })
}

export { saveFile }