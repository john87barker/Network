<template>
  <div class="mt-3 Ads card bg-grey">
    <!-- NOTE the following shows up on the screen with the defaults I gave in the props. As soon as I add the following v-for(whether on the adComponent or the app.vue) it disappears.  'v-for="a in ads" :key="a.id" :ad="a"' -->
    <!-- NOTE correction: Run the v-for on the parent -->
    Ads go here
    <h3 class="ad_title">
      {{ ad.title }}
    </h3>
    <h2 class="ad_linkUrl">
      {{ ad.linkURL }}
    </h2>
    <h4 class="ad_banner">
      {{ ad.banner }}
    </h4>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
// import Pop from '../utils/Notifier'
// import { adsService } from '../services/AdsService'
// import { logger } from '../utils/Logger'

export default {
  name: 'Ads',
  props: {
    ad: {
      type: Object,
      required: true
    }
  },

  setup(props) {
    return {
      ads: computed(() => AppState.ads)
    }
  }
}

</script>

<style lang="scss" scoped>

</style>
