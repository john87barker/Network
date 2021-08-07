<template>
  <div class="component row">
    <div class="col-md-10 offset-1  card bg-grey ml-5 pt-3 mt-3">
      <div class="d-flex justify-content-center ">
        <img :src="account.picture" alt="" class="rounded pic mt-3 mr-3">
        <p>{{ account.name }}</p>
        <p>{{ posts.body }}</p>
        <button type="button" class="btn btn-outline my-2">
          💗
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
import Pop from '../utils/Notifier'
import { postService } from '../services/PostService'

export default {
  props: {
    posts: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    return {
      account: computed(() => AppState.account),
      async destroy() {
        try {
          if (await Pop.confirm()) {
            await postService.destroy(props.posts.id)
            Pop.toast('deleted', 'success')
          }
        } catch (error) {
          Pop.toast(error, 'error')
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
