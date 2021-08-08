<template>
  <!-- NOTE connect to creating a post  and ony when the user is authenticated -->
  <div class="col-md-10 offset-1  card bg-grey ml-5 pt-3">
    <div class="d-flex justify-content-center ">
      <img :src="account.picture" alt="" class="rounded pic mt-3 mr-3">
      <form type="submit">
        <textarea class="form-control" for="body" cols="50" rows="5"></textarea>
        <div class="row d-flex justify-content-around pt-1">
          <p>Photo/Video</p>
          <button type="submit" class="btn btn-dark my-2" @click="createPost">
            Post
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
// import { logger } from '../utils/Logger'
import { postService } from '../services/PostService'
import Pop from '../utils/Notifier'

export default {
  // props: {
  //   post: {
  //     type: Object,
  //     required: true
  //   }
  // },
  setup() {
    return {
      account: computed(() => AppState.account),
      post: computed(() => AppState.posts),
      // logger.log('set up for the createpost comp')
      async createPost() {
        try {
          await postService.createPost()
        } catch (error) {
          Pop.toast('failed!', error)
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.pic{
  height: 50px;
}
</style>
