<template>
  <div class="home-goodslist">
    <van-card
      v-for="(item, index) in goodsList"
      :key="'goods' + index"
      :title="item.title"
      desc="Description"
      :price="item.price"
      :thumb="item.poster"
    >
      <template #tags> </template>
      <template #footer>
        <van-button size="mini">收藏</van-button>
        <van-button size="mini">加入购物车</van-button>
      </template>
    </van-card>
  </div>
</template>

<script lang="ts">
import { useStore } from 'vuex'
import { SET_GOODS_LIST } from '@/store/Types'
import { GState } from '@/store'
import { computed } from 'vue'
export default {
  name: 'HomeGoodsList',
  setup () {
    const store = useStore<GState>()
    const offset = 0
    const limit = 30
    store.dispatch(`home/${SET_GOODS_LIST}`, {
      offset,
      limit
    })
    const goodsList = computed(() => store.state.home.goods.list)
    return { goodsList }
  }
}
</script>

<style lang="scss" scoped>
.van-card {
  margin-top: 16px;
}
</style>
