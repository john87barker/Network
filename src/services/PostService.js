import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { convertToQuery } from '../utils/Query'
import { api } from './AxiosService'

class PostService {
  // NOTE pass in an object to set the queries with key value pairs
  async getAll() {
    // NOTE convertToQuery will take an object and turn it into a queryString
    const res = await api.get('api/posts')
    logger.log(res.data)
    AppState.posts = res.data
  }

  async createPost(post) {
    const res = await api.post('api/posts', post)
    await this.getAll()
  }

  async destroy(id) {
    await api.delete('api/posts/' + id)
    AppState.posts = AppState.posts.filter(p => p.id !== id)
  }
}

export const postService = new PostService()
