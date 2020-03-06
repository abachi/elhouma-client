import axios from 'axios';

export default {
    namespaced: true,

    state: {
        loading: false,
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
        }

    },
    actions: {
        login({ commit }, credentials){
            commit('SET_LOADING', true);
            axios.post('/auth/login', credentials).then(response => {
                commit('SET_TOKEN', response.data.token);
                commit('SET_USER', response.data.user);
                commit('SET_LOADING', false);
            }).catch(err => {
                commit('SET_LOADING', false);
                console.log('Errors:', err);
            });
        },
    },
}