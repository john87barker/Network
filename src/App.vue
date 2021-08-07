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
            Ads
          </div>
        </div>
      </div>
    </div>
  </main>
<!-- <div class="row">
      <div class="col-3">
        <LoginComponent />
      </div>
      <div class="col-md-9 p-0">
        <Navbar />
        <div class="row">
          <div class="col-md-12 px-0">
            <router-view />
          </div>
          <div class="row">
            <div class="col-md-2 border border-dark mt-3 ">
              ads here
            </div>
          </div>
        </div>
      </div>
    </div> -->
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

.column-height{
  min-height: 30vh;
}

</style>
