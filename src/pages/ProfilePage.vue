<template>
  <div class="Profile">
    <h1>This is the about page</h1>
    <Profile />
    <CreatePostComponent />
    <ThreadComponent />
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { AppState } from '../AppState'
import Pop from '../utils/Notifier'
import { postService } from '../services/PostService'

export default {
  name: 'Profile',
  setup() {
    onMounted(async() => {
      try {
        await postService.getAllById()
      } catch (error) {
        Pop.toast(error, 'error')
      }
    })
    return {
      posts: computed(() => AppState.posts)
    }
  },
  components: { }
}
</script>
