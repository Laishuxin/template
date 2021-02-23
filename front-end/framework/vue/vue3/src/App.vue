<template>
  <router-view />
  <van-tabbar route>
    <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
    <van-tabbar-item icon="coupon-o" to="/category">分类</van-tabbar-item>
    <van-tabbar-item icon="setting-o" to="/profile">我的</van-tabbar-item>
  </van-tabbar>
</template>

<style lang="scss">
.home,
.category,
.profile {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding-bottom: 50px;
}
</style>
