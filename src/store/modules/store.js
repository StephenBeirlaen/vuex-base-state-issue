const FETCHING_STORES = "FETCHING_STORES",
    FETCHING_STORES_SUCCESS = "FETCHING_STORES_SUCCESS",
    FETCHING_STORES_ERROR = "FETCHING_STORES_ERROR";

export default {
    namespaced: true,
    state: {
        isLoading: false,
        error: null,
        stores: []
    },
    getters: {
        isLoading(state) {
            return state.isLoading;
        },
        hasError(state) {
            return state.error !== null;
        },
        error(state) {
            return state.error;
        },
        hasStores(state) {
            return state.stores.length > 0;
        },
        stores(state) {
            return state.stores;
        }
    },
    mutations: {
        [FETCHING_STORES](state) {
            state.isLoading = true;
            state.error = null;
            state.stores = [];
        },
        [FETCHING_STORES_SUCCESS](state, stores) {
            state.isLoading = false;
            state.error = null;
            //state.stores = stores;
            console.log("stores before commit", state.stores.length);
            console.log("new stores", stores.length);
            state.stores = [...stores];
            console.log("stores after commit", state.stores.length);
        },
        [FETCHING_STORES_ERROR](state, error) {
            state.isLoading = false;
            state.error = error;
            state.stores = [];
        }
    },
    actions: {
        async findAll({commit}) {
            console.log("triggered store/findAll!");
            console.log('Stores length:', this.getters['store/stores'].length);
            commit(FETCHING_STORES);
            try {
                let response = {data: [
                    {"id":"e4e23c63-21c4-43c9-ac69-97acef4d3f55","message":"store 1","created":"2020-10-26T17:05:13+01:00","updated":null},
                    {"id":"da367ad5-d1a9-4bf6-a5f0-95302f100b4f","message":"store 2","created":"2020-10-22T22:04:12+02:00","updated":null},
                    {"id":"c7d896e4-8dd3-4303-b5b7-718e8af9f3ae","message":"store 3","created":"2020-09-16T20:20:11+02:00","updated":null},
                ]};
                commit(FETCHING_STORES_SUCCESS, response.data);
                return response.data;
            } catch (error) {
                commit(FETCHING_STORES_ERROR, error);
                return null;
            }
        }
    }
};
