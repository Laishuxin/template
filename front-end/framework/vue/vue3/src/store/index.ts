import { HomeState } from '@/typings/home'
import { createStore } from 'vuex'
import home from './modules/home'

export interface GState {
  home: HomeState;
}

export default createStore<GState>({
  mutations: {},
  actions: {},
  modules: {
    home
  }
})
