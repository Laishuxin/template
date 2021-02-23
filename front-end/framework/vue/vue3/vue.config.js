module.exports = {
  lintOnSave: false, // TODO: open eslint when all works done
  configureWebpack: {
    devtool: 'source-map'
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "~@/assets/scss/_variables.scss";'
      }
    }
  }
}
