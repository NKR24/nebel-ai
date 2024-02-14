import axios from "axios"
import { API_URL } from "~/consts"

const apiClient = axios.create()

apiClient.defaults.baseURL = API_URL

export const post = apiClient.post
