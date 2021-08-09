<template>
  <div class="Thread col-md-10 offset-1 card bg-grey ml-5 pt-3 mt-3 mb-3">
    <!-- NOTE v-for="p in posts" :key="p.id" :post="p" does not work here... -->
    <Post v-for="p in posts" :key="p.id" :post="p" />
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { AppState } from '../AppState'
import Pop from '../utils/Notifier'
// import { logger } from './utils/Logger'
import { postService } from '../services/PostService'
import Post from '../components/Post.vue'

export default {
  name: 'Thread',
  setup(props) {
    onMounted(async() => {
      try {
        await postService.getAll()
      } catch (error) {
        Pop.toast(error, 'error')
      }
    })
    return {
      appState: computed(() => AppState),
      posts: computed(() => AppState.posts),
      component: { Post }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
