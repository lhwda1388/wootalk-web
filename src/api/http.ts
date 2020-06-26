import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

const instance: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 3000,
  withCredentials: true,
})

/**
 * axios 객체를 받아서 공통으로 에러처리
 * @param http axios http 메소드 객체
 */
const createAxiosForData = (http: any) => {
  return (url: string, data?: any, config?: AxiosRequestConfig) => {
    return http(url, data, config).catch(errorFunc)
  }
}

/**
 * axios 객체를 받아서 공통으로 에러처리
 * @param http axios http 메소드 객체
 */
const createAxios = (http: any) => {
  return (url: string, config?: AxiosRequestConfig) => {
    return http(url, config).catch(errorFunc)
  }
}

/**
 * 공통 오류 처리 함수
 * @param error
 */
const errorFunc = (error: any) => {
  console.log(error.response)
  const status: number = error.response.status
  const msg: string = error.response.data.message
  switch (status) {
    case 403:
      alert(msg)
      break
    case 500:
      alert(msg)
    default:
      break
  }
}

export default {
  get: createAxios(instance.get),
  post: createAxiosForData(instance.post),
  put: createAxiosForData(instance.put),
  delete: createAxios(instance.delete),
}
