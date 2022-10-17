import modal from './modal'

export default {
  install(Vue) {
    // 模态框对象 封装消息弹窗
    Vue.prototype.$modal = modal
  }
}
