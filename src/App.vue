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
            <AdComponent />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { computed, onMounted } from 'vue'
import { AppState } from './AppState'
import LoginComponent from './components/LoginComponent.vue'
import AdComponent from './components/AdComponent.vue'
import Pop from './utils/Notifier'
import { adsService } from './services/AdsService'
// import { accountService } from './services/AccountService'
import { logger } from './utils/Logger'

export default {
  name: 'App',
  props: {
    ads: {
      type: Array,
      required: true
    }
  },
  setup(props) {
    onMounted(async() => {
      logger.log('YAY, This is Mounted')
      try {
        await adsService.getAll()
      } catch (error) {
        Pop.toast(error, 'error')
      }
    })
    return {
      appState: computed(() => AppState),
      components: {
        LoginComponent,
        AdComponent
      }
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
