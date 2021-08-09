<template>
  <div class="LoginComponent">
    <div class="row bg-dark vh-100 pl-3">
      <!-- v-for -->
      <div class="col-md-12 d-flex justify-content-center mt-4 pl-0 pb-0">
        <img :src="account.picture" alt="" class="rounded-circle img">
      </div>
      <div>
        <h2 class=" col-md-12">
          {{ account.nickname }}
        </h2>
      </div>
      <div class="col-md-12 pt-3 ">
        <p>{{ account.email }}</p>
        <a href="https://github.com/" target="_blank">GitHub</a>
        <br>
        <a href="https://www.linkedin.com/home" target="_blank">LinkedIn</a>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
// import Pop from '../utils/Notifier'
// import { profileService } from '../services/ProfileService'

export default {
  name: 'Home',
  setup() {
    return {
      account: computed(() => AppState.user)
    }
  // components: { profileService }
  }
}
</script>

<style lang="scss" scoped>
.img{
  height: 150px
}
</style>
