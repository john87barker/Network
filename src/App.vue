<template>
  <main class="container-fluid  flex-column ">
    <div class="row">
      <div class="col-md-3">
        <LoginComponent />
      </div>
      <div class="col-md-9 column-height">
        <Navbar />
        <div class="row">
          <div class="col-md-9">
            <router-view />
          </div>
          <div class="col-md-3">
            <!-- <AdComponent /> -->
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
import LoginComponent from './components/LoginComponent.vue'
import AdComponent from './components/AdComponent.vue'

export default {
  components: {
    LoginComponent
  // , AdComponent
  },
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

.column-height{
  min-height: 30vh;
}

</style>
