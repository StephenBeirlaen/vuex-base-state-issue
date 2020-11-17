import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const UPDATE_INT = "UPDATE_INT";

export default new Vuex.Store({
    state: {
        int: 0,
    },
    getters: {
        int(state) {
            return state.int;
        }
    },
    mutations: {
        [UPDATE_INT](state) {
            state.int = 1;
        },
    },
});
