import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class ProfileService {
  async getProfile() {
    const res = await api.get('/account')
    logger.log(res.data)
    AppState.user = res.data
  }
}

export const profileService = new ProfileService()
