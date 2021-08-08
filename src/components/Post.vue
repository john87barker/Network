<template>
  <div class="component row">
    <div class="col-md-12">
      <div>
        <div class="d-flex justify-content-left ">
          <img :src="account.picture" alt="" class="rounded-circle pic  mx-3">
          <div>
            <p class="m-0 font-italic">
              {{ account.name }}
            </p>
            <p class="m-0">
              <small class="p-0">
                Graduated: {{ account.graduated }}
              </small>
            </p>
          </div>
        </div>
        <br>
        <div class=" text-left p-0 m-0 pt-1">
          <p>{{ body }}</p>
          <!-- <p class="p-0 m-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda nesciunt perferendis alias sit iusto odit id, atque asperiores quam corporis sunt voluptas, nobis maxime natus ad aut dignissimos suscipit officia?
          </p> -->
        </div>
        <div class="d-flex justify-content-end">
          <button type="button" class="btn btn-outline my-2">
            💗
          </button>
          <p><small>1</small></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
import Pop from '../utils/Notifier'
import { postService } from '../services/PostService'

export default {
  props: {
    posts: {
      type: Object,
      required: true
    },
    body: {
      type: String,
      required: true,
      default: 'No \'body\' wants to show'
    }
  },
  setup(props) {
    return {

      account: computed(() => AppState.account),
      post: computed(() => AppState.posts),
      async destroy() {
        try {
          if (await Pop.confirm()) {
            await postService.destroy(props.posts.id)
            Pop.toast('deleted', 'success')
          }
        } catch (error) {
          Pop.toast(error, 'error')
        }
      }
    }
  }
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
