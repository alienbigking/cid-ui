// import * as types from './mutation-types';

import * as types from './mutation-types';

export default {
    [types.GET_PRISON_HOUSE_LIST](state, { prisonHouseList }) {
        state.prisonHouseList = prisonHouseList;
    }
};
