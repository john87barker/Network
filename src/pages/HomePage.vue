<template>
  <div class="home flex-grow-1 d-flex flex-column align-items-center justify-content-center row">
    <!-- <div class="col-12 pt-3">
      <Profile />
    </div> -->
    <div class="col-12 pt-3">
      <CreatePostComponent />
    </div>
    <div class="col-12 pt-3">
      <!-- NOTE fix this -->
      <ThreadComponent />
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { AppState } from '../AppState'
import Pop from '../utils/Notifier'
import { postService } from '../services/PostService'
import CreatePostComponent from '../components/CreatePostComponent.vue'
import ThreadComponent from '../components/ThreadComponent.vue'
// import Profile from '../components/Profile.vue'

export default {
  name: 'Home',
  setup() {
    onMounted(async() => {
      try {
        await postService.getAll()
      } catch (error) {
        Pop.toast(error, 'error')
      }
    })
    return {
      posts: computed(() => AppState.posts)
    }
  },
  components: {
    CreatePostComponent, ThreadComponent
    // Profile
  }
}
</script>

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
}
</style>
