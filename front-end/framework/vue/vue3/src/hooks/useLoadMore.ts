import { GState } from '@/store'
import _ from 'lodash'
import { computed, onMounted, Ref } from 'vue'
import { Store, mapState, mapGetters } from 'vuex'

export default function useLoadMore (
  vueRef: Ref<HTMLElement | null>,
  store: Store<GState>,
  type: string
): any {
  let el: HTMLElement
  function _loadMore () {
    const containerHeight = el.clientHeight
    const scrollTop = el.scrollTop
    const scrollHeight = el.scrollHeight
    const thresHold = 20
    if (containerHeight + scrollTop + thresHold >= scrollHeight) {
      // load more
      store.dispatch(type)
    }
  }

  onMounted(() => {
    if (vueRef.value !== null) el = vueRef.value
    if (el) el.addEventListener('scroll', _.debounce(_loadMore, 200))
  })
  const isLoading = computed(() => store.state.home.goods.isLoading)
  const hasMore = computed(() => store.state.home.goods.hasMore)
  return {
    isLoading,
    hasMore
  }
}
