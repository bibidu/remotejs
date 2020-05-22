import Vue from 'vue'
import LeftNav from './LeftNav'
import VueCompositionApi from '@vue/composition-api'

Vue.config.productionTip = false
Vue.use(VueCompositionApi)

// 暂时做法
const isRemoteWidget = location.port !== '5000'

if (!isRemoteWidget) {
  new Vue({
    render: h => h(LeftNav)
  }).$mount('#app')
}

export default {
  renderHtml(selector) {
    new Vue({
      render: h => h(LeftNav)
    }).$mount(selector)
  }
}