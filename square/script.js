import Vue from 'vue/dist/vue.js'
import VueMathPlugin from './VueMathPlugin'

Vue.use(VueMathPlugin)

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  data: { item: 49 }
})
