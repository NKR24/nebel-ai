import axios from "axios"
import { API_URL } from "../consts"

const axiosInstance = axios.create({
  baseURL: API_URL,
})

export function post<Data extends object>(url: string, data: Data) {
  return axiosInstance.post(url, data)
}
