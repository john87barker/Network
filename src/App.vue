<template>
  <main class="container-fluid">
    <div class="row">
      <div class="col-3">
        <LoginComponent />
      </div>
      <div class="col-9 px-0">
        <Navbar />
        <router-view />
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
