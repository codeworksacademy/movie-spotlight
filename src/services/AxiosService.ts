import Axios, { AxiosError } from 'axios'
import { baseURL } from '../env.ts'
import { logger } from '../utils/Logger.ts'

export const api = Axios.create({
  baseURL,
  timeout: 8000
})

api.interceptors.request.use(config => config, handleAxiosError)
api.interceptors.response.use(response => response, handleAxiosError)

export const movieApi = Axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  timeout: 3000,
  // NOTE axios will add each key:value pair here as a query string for our requests
  params: {
    api_key: '545c6ef058e65396849dfbbf381cbca3',
    'certification.gte': 'G',
    'certification.lte': 'PG-13',
    certification_country: 'US',
    include_adult: false
  }
})

function handleAxiosError(error: AxiosError): Promise<AxiosError> {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    logger.warn('[📡 AXIOS_ERROR_RESPONSE_DATA]', error.response.data)
  } else if (error.request) {
    // The request was made but no response was received
    logger.warn('[📡 AXIOS_ERROR_NO_RESPONSE]', error.request)
  } else {
    // Something happened in setting up the request that triggered an Error
    logger.warn('[📡 AXIOS_ERROR_INVALID_REQUEST]', error.message)
  }
  return Promise.reject(error)
}