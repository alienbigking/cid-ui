import * as types from './types'
export default {
    changeshow: ({ commit }) => {
        commit(types.CHANGESHOW)
    },
    showRemind: ({ commit }) => {
        commit(types.SHOWREMIND)
    },
    hideRemind: ({ commit }) => {
        commit(types.HIDEREMIND)
    },
    handleCollapse: ({ commit }, aaa) => {
        console.log(aaa, arguments, commit)
        commit(types.HANDLECOLLAPSE)
    }
}
