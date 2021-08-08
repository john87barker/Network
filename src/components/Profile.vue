<template>
  <div class="profile card">
    <div class="">
      <img :src="account.coverId" alt="" srcset="">
      <img :src="account.picture" alt="" class="rounded-circle img">
      <h5>{{ account.nickname }}</h5>
      <i class="fa fa-github" aria-hidden="true"></i>
    </div>
    <div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, asperiores? Et quia aliquid eos, quam sapiente odio eligendi magnam maxime voluptatem quis qui. Magni, perspiciatis nostrum numquam alias animi ex.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  setup() {
    return {}
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
