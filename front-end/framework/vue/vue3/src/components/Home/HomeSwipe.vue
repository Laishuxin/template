<template>
  <div class="home-swipe">
    <van-swipe :autoplay="3000" indicator-color="#1989fa">
      <van-swipe-item
        v-for="(item, index) in swipeItems"
        :key="`swipe${index}`"
      >
        <img :src="item.url" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script lang="ts">
import { GState } from '@/store'
import { SET_SWIPE } from '@/store/Types'
import { SwipeItem } from '@/typings/home'
import { computed, ComputedRef, defineComponent } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'HomeSwipe',
  setup () {
    const store = useStore<GState>()
    const swipeItems: ComputedRef<SwipeItem[]> = computed(
      () => store.state.home.swipe
    )
    if (swipeItems.value.length === 0) {
      store.dispatch(`home/${SET_SWIPE}`)
    }
    return {
      swipeItems
    }
  }
})
</script>

<style lang="scss" scoped>
.van-swipe {
  height: 100%;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
