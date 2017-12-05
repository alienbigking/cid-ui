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
    handleCollapse: ({ commit }) => {
        commit(types.HANDLECOLLAPSE)
    }
}
