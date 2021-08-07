<template>
  <div class="component row">
    <Post v-for="p in posts" :key="p.creatorId" :post="p" />
  </div>
</template>

<script>

export default {
  name: 'Thread',
  props: {
    posts: {
      type: Array,
      required: true
    }
  }

}
</script>

<style lang="scss" scoped>

</style>
