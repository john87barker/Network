<template>
  <div class="row">
    <div class="profile col-md-10 offset-1 card bg-grey ml-5 pt-3 mt-3">
      <div class="">
        <div class="">
          <img :src="account.coverImg" class="cover ">
        </div>
        <div class="d-flex justify-content-between">
          <div class="text-left ">
            <img :src="account.picture" alt="" class="rounded pic  mx-3">
            <span v-if="account.graduated === true">
              <img src="../assets/img/grad.png" alt="">
            </span>
            <h2 class="p-3">
              {{ account.name }}
            </h2>
          </div>
          <!-- <span v-if="account.graduated === true"> works good but I don't want it to look like I did nothing...-->
          <div>
            <a href="https://github.com/" target="_blank" role="button" class="m-3">
              <img src="../assets/img/githubblack.png" alt="github" href="https://github.com/" target="_blank">
            </a>
            <a href="https://www.linkedin.com/home" target="_blank" role="button" class="m-3">
              <img src="../assets/img/linkedin.png" alt="linkedin" href="https://www.linkedin.com/home" target="_blank">
            </a>
          </div>
          <!-- </span> -->
        </div>
        <div class="pl-3 text-left">
          <p>{{ post.body }}</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, asperiores? Et quia aliquid eos, quam sapiente odio eligendi magnam maxime voluptatem quis qui. Magni, perspiciatis nostrum numquam alias animi ex.</p>
        </div>
        <div class="d-flex justify-content-end">
          <button type="button" class="btn btn-outline my-2">
            edit
          </button>
        </div>
      </div>
      <div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'

export default {
  name: 'Profile',
  setup() {
    return {
      account: computed(() => AppState.account),
      post: computed(() => AppState.posts)
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
.pic{
  height: 50px;
}
.cover{
  max-width: 550px;
  padding-bottom: 1em;
}
</style>
