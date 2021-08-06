<template>
  <div class="home flex-grow-1 d-flex flex-column align-items-center justify-content-center row">
    <div class="col-md-12 pt-3">
      <CreatePostComponent />
    </div>
  </div>
</template>

<script>
// import { computed, onMounted } from '@vue/runtime-core'
// import { AppState } from '../AppState'
// import Pop from '../utils/Notifier'
import CreatePostComponent from '../components/CreatePostComponent.vue'

export default {
  name: 'Home',
  setup() {

  },
  components: {
    CreatePostComponent
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
