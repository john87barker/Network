<template>
  <main class="container-fluid">
    <div class="row">
      <div class="col-md-12 p-0">
        <Navbar />
      </div>
      <div class="col-3">
        <LoginComponent />
      </div>
      <div class="col-7 px-0">
        <router-view />
      </div>
      <div class="col-2 border border-dark ">
        ads here
      </div>
    </div>
  </main>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
import LoginComponent from './components/LoginComponent.vue'

export default {
  components: { LoginComponent },
  name: 'App',
  setup() {
    return {
      appState: computed(() => AppState)
    }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

</style>
