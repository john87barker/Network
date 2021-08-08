<template>
  <div class="profile card">
    <div>
      <div>
        <img :src="account.coverImg" class="cover">
      </div>
      <div class="d-flex justify-content-center ">
        <img :src="account.picture" alt="" class="rounded pic  mx-3">
        <p>{{ account.name }}</p>
      </div>
      <div class="pl-3">
        <!-- <p>{{ posts.body }}</p> -->
        <p>In the post?</p>
      </div>
      <button type="button" class="btn btn-outline my-2">
        💗
      </button>
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
.pic{
  height: 50px;
}
.cover{
  max-width: 350px;
}
</style>
