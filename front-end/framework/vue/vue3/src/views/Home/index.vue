<template>
  <div class="home">
    <home-heading
      :category="category"
      @setCategory="setCategory"
    ></home-heading>
    <div class="home-container" ref="homeContainerRef">
      <home-swipe></home-swipe>
      <home-goods-list></home-goods-list>
      <div class="is-loading" v-if="isLoading">
        loading...
      </div>
      <div class="has-more" v-if="!hasMore">
        We have a bottle line
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// import components
import HomeGoodsList from '@/components/Home/HomeGoodsList.vue'
import HomeHeading from '@/components/Home/HomeHeading.vue'
import HomeSwipe from '@/components/Home/HomeSwipe.vue'
// end import components

// import typings
import { computed, ComputedRef, defineComponent, Ref, ref } from 'vue'
import { Store, useStore } from 'vuex'
import { GState } from '@/store'
import { CATEGORY } from '@/typings/home'
import { SET_CATEGORY, SET_GOODS_LIST } from '@/store/Types'
// end import typings
import useLoadMore from '@/hooks/useLoadMore'

interface SetCategory {
  (newCategory: CATEGORY): void;
}
type useHomeCategoryResults = {
  category: ComputedRef<CATEGORY>;
  setCategory: SetCategory;
}

function useHomeCategory (store: Store<GState>): useHomeCategoryResults {
  const category = computed(() => store.state.home.currCategory)
  const setCategory: SetCategory = (newCategory: CATEGORY) => {
    store.commit(`home/${SET_CATEGORY}`, newCategory)
  }

  return { category, setCategory }
}

export default defineComponent({
  name: 'Home',
  components: {
    HomeGoodsList,
    HomeHeading,
    HomeSwipe
  },
  setup () {
    const homeContainerRef: Ref<HTMLElement | null> = ref(null)
    const store = useStore<GState>()
    const { category, setCategory } = useHomeCategory(store)
    const { hasMore, isLoading } = useLoadMore(
      homeContainerRef,
      store,
      `home/${SET_GOODS_LIST}`
    )
    return {
      homeContainerRef,
      category,
      setCategory,
      hasMore,
      isLoading
    }
  }
})
</script>

<style lang="scss" scoped>
.home {
  $home-heading-height: 50px;
  $home-swipe-height: 200px;

  box-sizing: border-box;
  .home-heading {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    width: 100%;
    height: $home-heading-height;
  }

  .home-container {
    position: absolute;
    left: 0;
    right: 0;
    top: $home-heading-height;
    bottom: $nav-height;
    // bottom: 50px;
    width: 100%;
    overflow-y: scroll;

    .home-swipe {
      height: $home-swipe-height;
    }
  }
}
</style>
