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
            return axios.post('/auth/login', credentials).then(response => {
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

        async attempt({ commit, state }, token){
            if(token){
                commit('SET_TOKEN', token);
            }

            if(!state.token){
                return;
            }

            try {
                await axios.get('/auth/attempt').then(response => {
                    commit('SET_USER', response.data.user);
                });
                
            } catch (error) {
                commit('SET_USER', null);
                commit('SET_TOKEN', null);
            }
        },
        logout({ commit }){
            return axios.post('/auth/logout').then(() => {
                commit('SET_USER', null);
                commit('SET_TOKEN', null);
            });
        }
    },
}