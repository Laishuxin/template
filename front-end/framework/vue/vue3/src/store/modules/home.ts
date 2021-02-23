import { getGoodsList, getSwipeItem } from '@/network/home'
import { CATEGORY, GoodsItem, HomeState, SwipeItem } from '@/typings/home'
import { ActionTree, GetterTree, Module, MutationTree } from 'vuex'
import { GState } from '..'
import {
  SET_CATEGORY,
  SET_GOODS_LIST,
  SET_HAS_MORE,
  SET_ISLOADING,
  SET_LIMIT,
  SET_OFFSET,
  SET_SWIPE
} from '../Types'

const state: HomeState = {
  currCategory: CATEGORY.ALL,
  swipe: [],
  goods: {
    hasMore: true,
    isLoading: false,
    offset: 0,
    limit: 30,
    list: []
  }
}
const actions: ActionTree<HomeState, GState> = {
  async [SET_SWIPE] ({ commit }) {
    const swipeItem = await getSwipeItem()
    if (swipeItem.data.err !== 0) return
    return commit(SET_SWIPE, swipeItem.data.data)
  },
  async [SET_GOODS_LIST] ({ commit, state }) {
    if (state.goods.isLoading) return
    if (!state.goods.hasMore) return

    commit(SET_ISLOADING, true)
    const result = await getGoodsList(
      state.currCategory,
      state.goods.offset,
      state.goods.limit
    )
    commit(SET_ISLOADING, false)
    commit(SET_HAS_MORE, result.data.hasMore)
    if (result.data.err !== 0) return
    commit(SET_GOODS_LIST, result.data.data.list)
  }
}

const mutations: MutationTree<HomeState> = {
  [SET_CATEGORY] (state, payload: CATEGORY) {
    state.currCategory = payload
  },
  [SET_SWIPE] (state, payload: SwipeItem[]) {
    state.swipe = payload
  },
  [SET_HAS_MORE] (state, payload: boolean) {
    state.goods.hasMore = payload
  },
  [SET_ISLOADING] (state, payload: boolean) {
    state.goods.isLoading = payload
  },
  [SET_OFFSET] (state, payload: number) {
    state.goods.offset = payload
  },
  [SET_LIMIT] (state, payload: number) {
    state.goods.limit = payload
  },
  [SET_GOODS_LIST] (state, payload: GoodsItem[]) {
    state.goods.list.push(...payload)
    state.goods.offset += state.goods.limit
  }
}

const getters: GetterTree<HomeState, GState> = {
  hasMore (state) {
    return state.goods.hasMore
  },
  isLoading (state) {
    return state.goods.isLoading
  }
}
const homeModule: Module<HomeState, GState> = {
  namespaced: true,
  state,
  actions,
  mutations
}

export default homeModule
