import Vuex from 'vuex'
import apiList from '@/api/api'

const state = {
    test: {
        open: true,
        close: false
    }
}

const actions = {
    testGet({ commit }, params) {
        console.log(params)
        apiList.testGet(params).then(res => {
            commit(TESTGET, res)
        })
    }
}
const getters = {
    test: state => state.test
}

const mutations = {
    [TESTGET](state, res) {
        console.log(state)
        state.test = { ...state.test, msg: res.data.msg }
    }
}
export default new Vuex.Store({
    state,
    actions,
    getters,
    mutations
})
