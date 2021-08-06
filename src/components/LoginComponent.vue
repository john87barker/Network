<template>
  <div class="LoginComponent">
    <div class="row bg-primary vh-100">
      <!-- vmodel -->
      <div class="col-12 d-flex justify-content-center pt-4 ">
        <img :src="account.picture" alt="" class="rounded-circle">
      </div>
      <div>
        <h4>{{ account.name }}</h4>
        <p><small>class of</small></p>
      </div>
      <div>
        <p>{{ account.bio }}</p>
        <p>LinkedIn</p>
        <p>Resume</p>
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

</style>
