import mutations from './mutations'
import actions from './actions'
import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

let store = new Vuex.Store({
    modules: {
        mutations
    },
    actions
})
export default store
