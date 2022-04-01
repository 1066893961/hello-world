const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  pages:{
    index:{
      //入口
      entry: 'src/main.js',
    }
  },
  transpileDependencies: true,
  lintOnSave: false,//关闭语法检查

  //开启代理服务器
  // devServer:{
  //   proxy:'http://localhost:8080'
  // },

  // devServer: {
  //   proxy: {
  //     '/atguigu': {
  //       target: 'http://localhost:8080',
  //       pathReWrite: {'^/atguigu':''},
  //       ws: true,//用于支持websocket
  //       changeOrigin: true //默认是true  用于控制请求头中的host值
  //     },
  //     '/foo': {
  //       target: '<other_url>'
  //     }
  //   }
  // }
});
