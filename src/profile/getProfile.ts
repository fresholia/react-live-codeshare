import Cookies from 'js-cookie';

const getProfile = async () => {
    const profile = Cookies.get(`c2g_user`)

    const res = await fetch(`/api/user/${profile}`)
    const data = await res.json()

    console.log(data[0])

    return data[0]
}

const setProfile = async (id: number) => {
    if (await getProfile())
        return false;

    Cookies.set(`c2g_user`, id.toString(), { expires: 1, path: '' })
}

export { getProfile, setProfile }