import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
// import { convertToQuery } from '../utils/Query'
import { api } from './AxiosService'

class AdsService {
  // NOTE pass in an object to set the queries with key value pairs
  async getAll() {
    // NOTE convertToQuery will take an object and turn it into a queryString
    const res = await api.get('api/ads')
    logger.log(res.data)
    AppState.posts = res.data
  }
}

export const adsService = new AdsService()
