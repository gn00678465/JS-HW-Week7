module.exports = {
  // publicPath
  publicPath: process.env.NODE_ENV === 'production'
    ? '/JS-HomeWork-Week7/'
    : '/',
  // scss variable
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "~@/assets/_sass/main.scss";',
      },
    },
  },
  // 設定開發 server port 為 80
  devServer: {
    port: 80,
  },
  // 設定路徑別名
  configureWebpack: {
    resolve: {
      alias: {
        components: '@/components',
        assets: '@/assets',
      },
    },
  },
};
