import Vue from "vue";
import Vuex from "vuex";
import StoreModule from "./modules/store";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        store: StoreModule
    }
});