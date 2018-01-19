import * as types from "./mutation-types";
import tokenStorage from "@/utils/token/token-storage";

export default {
    [types.SET_TOKEN](state, token) {
        tokenStorage.setToken(token);
    },
    [types.REMOVE_TOKEN](state) {
        tokenStorage.removeToken();
    }
};
