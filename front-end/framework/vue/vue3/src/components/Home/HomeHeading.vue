<template>
  <div class="home-heading">
    <img src="~@/assets/logo.png" id="logo" />
    <van-dropdown-menu>
      <van-dropdown-item
        :modelValue="category"
        :options="categoryOptions"
        @change="handleHeadingMenuChange"
      />
    </van-dropdown-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'
import { CATEGORY } from '@/typings/home'
import getCateogryValue from '@/utils/getCateogryValue'

export default defineComponent({
  name: 'HomeHeading',
  props: {
    category: {
      type: Number as PropType<CATEGORY>,
      default () {
        return CATEGORY.ALL
      }
    }
  },
  setup (props, ctx) {
    const vanDropdownRef = ref(null)
    const categoryOptions = [
      { text: getCateogryValue(CATEGORY.ALL), value: CATEGORY.ALL },
      { text: getCateogryValue(CATEGORY.VUE), value: CATEGORY.VUE },
      { text: getCateogryValue(CATEGORY.REACT), value: CATEGORY.REACT },
      { text: getCateogryValue(CATEGORY.NODE), value: CATEGORY.NODE }
    ]
    function handleHeadingMenuChange (category: CATEGORY) {
      ctx.emit('setCategory', category)
    }

    return {
      vanDropdownRef,
      categoryOptions,
      handleHeadingMenuChange
    }
  }
})
</script>

<style lang="scss" scoped>
.home-heading {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  box-sizing: border-box;
  box-shadow: 2px 2px 6px rgba($color: #000000, $alpha: 0.05);
  z-index: 1001;

  #logo {
    height: 100%;
  }

  .van-dropdown-menu {
    width: 30%;
    box-shadow: none;
    overflow: hidden;
  }
}
</style>
