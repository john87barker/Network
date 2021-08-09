<template>
  <div class="mt-3 Ads card bg-grey">
    <!-- NOTE the following shows up on the screen with the defaults I gave in the props. As soon as I add the following v-for(whether on the adComponent or the app.vue) it disappears.  'v-for="a in ads" :key="a.id" :ad="a"' -->
    Ads go here
    <h3 class="ad_title">
      {{ title }}
    </h3>
    <h2 class="ad_linkUrl">
      {{ linkUrl }}
    </h2>
    <h4 class="ad_banner">
      {{ banner }}
    </h4>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { AppState } from '../AppState'
import Pop from '../utils/Notifier'
import { adsService } from '../services/AdsService'
import { logger } from '../utils/Logger'

export default {
  name: 'Ads',
  props: {
    title: {
      type: String,
      required: true,
      default: 'No title for this ad'
    },
    banner: {
      type: String,
      default: 'No Banner'
    },
    linkUrl: {
      type: String,
      default: 'No link given'
    },
    square: {
      type: String,
      default: ''
    }
  },

  setup(props) {
    onMounted(async() => {
      logger.log('YAY, the ads are Mounted just not showing!')
      try {
        await adsService.getAll()
      } catch (error) {
        Pop.toast(error, 'error')
      }
    })
    return {
      ad: computed(() => AppState.ads)
    }
  }
}

</script>

<style lang="scss" scoped>

</style>
