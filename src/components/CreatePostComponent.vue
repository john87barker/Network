<template>
  <div class="col-md-10 offset-1  card bg-grey ml-5 pt-3">
    <div class="d-flex justify-content-center ">
      <img :src="account.picture" alt="" class="rounded pic mt-3 mr-3">
      <form action="">
        <textarea class="form-control" cols="50" rows="5"></textarea>
        <div class="row d-flex justify-content-around pt-1">
          <p>Photo/Video</p> <button type="button" class="btn btn-dark my-2">
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

export default {
  name: 'Component',
  setup() {
    return {
      account: computed(() => AppState.user)
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
.pic{
  height: 50px;
}
</style>
