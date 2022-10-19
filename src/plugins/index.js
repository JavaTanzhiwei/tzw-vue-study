import modal from './modal'
import cache from './cache'

export default {
  install(Vue) {
    // 缓存对象
    Vue.prototype.$cache = cache
    // 模态框对象 封装消息弹窗
    Vue.prototype.$modal = modal
  }
}
