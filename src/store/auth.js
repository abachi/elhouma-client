import axios from 'axios';

export default {
    namespaced: true,

    state: {
        loading: false,
        failed: false,
        token: null,
        user: null,
    },
    mutations: {
        SET_TOKEN(state, token){
            state.token = token;
        },

        SET_USER(state, user){
            state.user = user;
        },

        SET_LOADING(state, isLoading){
            state.loading = isLoading;
        },

        SET_FAILED(state, isFailed){
            state.failed = isFailed;
        }
    },
    getters: {
        loading(state){
            return state.loading;
        },
        user(state){
            return state.user
        },
        authenticated(state){
            return state.token && state.user;
        },
        failed(state){
            return state.failed;
        },
    },
    actions: {
        login({ commit }, credentials){
            commit('SET_LOADING', true);
            axios.post('/auth/login', credentials).then(response => {
                commit('SET_TOKEN', response.data.token);
                commit('SET_USER', response.data.user);
                commit('SET_LOADING', false);
                commit('SET_FAILED', false);
            }).catch(() => {
                commit('SET_LOADING', false);
                commit('SET_FAILED', true);
                commit('SET_USER', null);
                commit('SET_TOKEN', null);
            });
        },
    },
}