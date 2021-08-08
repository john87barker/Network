<template>
  <div class="component" v-for="ad in ads" :key="ad.id" :ads="ad">
    Ads go here
    <!-- {{ ads.title }} -->
    {{ ad.linkUrl }}
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { AppState } from '../AppState'
// import Pop from '../utils/Notifier'
// import { adsService } from '../services/AdsService'

export default {
  name: 'Home',
  props: {
    ads: {
      type: Object,
      required: true,
      title: '',
      banner: '',
      linkUrl: '',
      square: ''
    }
  },

  setup(props) {
    return {
      account: computed(() => AppState.account)
    }
  }
}

</script>

<style lang="scss" scoped>

</style>
