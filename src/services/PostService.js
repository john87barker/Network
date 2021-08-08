import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { convertToQuery } from '../utils/Query'
import { api } from './AxiosService'

class PostService {
  // NOTE pass in an object to set the queries with key value pairs
  async getAll(query = {}) {
    // NOTE convertToQuery will take an object and turn it into a queryString
    const res = await api.get('api/posts' + convertToQuery(query))
    logger.log(res.data)
    AppState.posts = res.data
    // logger.log('This is the post material', AppState.posts)
    // NOTE goes through the entire function but will not post to page. Function is good.
  }

  async getAllById(id) {
    // NOTE convertToQuery will take an object and turn it into a queryString
    const res = await api.get('api/posts/' + id)
    logger.log(res.data)
    AppState.posts = res.data
    // logger.log('This is the post material', AppState.posts)
    // NOTE goes through the entire function but will not post to page. Function is good.
  }

  async createPost(post) {
    const res = await api.post('api/posts', post)
    console.log(res.data)
    await this.getAll()
  }

  async destroy(id) {
    await api.delete('api/posts/' + id)
    AppState.posts = AppState.posts.filter(p => p.id !== id)
  }
}

export const postService = new PostService()
