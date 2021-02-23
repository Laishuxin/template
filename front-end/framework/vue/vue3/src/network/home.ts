import { CATEGORY, GoodsApi, SwipeApi } from '@/typings/home'
import axios from './'
export function getSwipeItem () {
  return axios.get<SwipeApi>('/api/swipe')
}

export function getGoodsList (category: CATEGORY, offset: number, limit = 30) {
  console.log(`offset = ${offset}, typeof offset = ${typeof offset}`)
  console.log(`limit = ${limit}, typeof limit = ${typeof limit}`)
  return axios.get<GoodsApi>('/api/lessonlist', {
    params: {
      category,
      offset,
      limit
    }
  })
}
