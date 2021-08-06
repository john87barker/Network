<template>
  <main class="container-fluid">
    <div class="row">
      <div class="col-3">
        <h1>login componenent eventually</h1>
      </div>
      <div class="col-9 pr-0">
        <Navbar />
        <router-view />
      </div>
    </div>
  </main>
  <footer>
    <div class="bg-dark text-light text-center p-4">
    </div>
  </footer>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
export default {
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
