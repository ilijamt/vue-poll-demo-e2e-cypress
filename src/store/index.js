import Vue from 'vue'
import Vuex from 'vuex'
import Poll from './poll'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    'poll': Poll
  },
  strict: debug
})
