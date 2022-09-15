import { AxiosError } from "axios"
import { api } from "./api"

export const postLogin = async (email: string, password: string) => {
    const res = await api.post("api/auth/token/", {
        "email": email,
        "password": password
    }).catch((err) => err as AxiosError)

    if (!(res instanceof Error)) {
        return { res: res }
    } else {
        if (res.response?.data?.detail) {
            return { error: res.response?.data.detail }
        } else {
            return { error: 'error' }
        }
    }
}