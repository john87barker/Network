<template>
  <div class="Profile">
    <Profile />
  </div>
  <div>
    <CreatePostComponent />
  </div>
  <div>
    <ThreadComponent />
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { AppState } from '../AppState'
// import Pop from '../utils/Notifier'
// import { postService } from '../services/PostService'
import CreatePostComponent from '../components/CreatePostComponent.vue'
import ThreadComponent from '../components/ThreadComponent.vue'

export default {
  // name: 'Profile',
  setup() {
    // onMounted(async() => {
    //   try {
    //     await postService.getAllById()
    //   } catch (error) {
    //     Pop.toast(error, 'error')
    //   }
    // })
    return {
      posts: computed(() => AppState.posts)
    }
  },
  components: {
    CreatePostComponent,
    ThreadComponent
  }
}
</script>
