import { CATEGORY } from '@/typings/home'

export default function getCategoryValue (category: CATEGORY): string {
  switch (category) {
    case CATEGORY.ALL:
      return '所有课程'
    case CATEGORY.VUE:
      return 'vue课程'
    case CATEGORY.REACT:
      return 'react课程'
    case CATEGORY.NODE:
      return 'node课程'
    default:
      break
  }
  return ''
}
