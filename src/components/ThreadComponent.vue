<template>
  <div class="Thread col-md-10 offset-1 card bg-grey ml-5 pt-3 mt-3">
    <!-- NOTE v-for="p in posts" :key="p.id" :post="p" does not work here... -->
    <Post />
  </div>
</template>

<script>

export default {
  name: 'Thread',
  props: {
    posts: {
      type: Object,
      required: true
    }
  }

}
</script>

<style lang="scss" scoped>

</style>
