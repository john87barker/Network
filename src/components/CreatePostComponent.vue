<template>
  <div class="col-md-12 d-flex justify-content-around">
    <img :src="account.picture" alt="" class="rounded pic ">
    <form action="">
      <textarea class="form-control" cols="30" rows="5"></textarea>
    </form>
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
