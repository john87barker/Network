<template>
  <div class="home flex-grow-1 d-flex flex-column align-items-center justify-content-center">
    <h1>This is going to be 'The Network'</h1>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { AppState } from '../AppState'
import Pop from '../utils/Notifier'

export default {
  name: 'Home',
  setup() {

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
