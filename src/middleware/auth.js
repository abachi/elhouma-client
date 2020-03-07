import store from '@/store'
const requireAuthentication = (to, from, next) => {
    if(!store.getters['auth/authenticated']){
        return next({
            name: 'login'
        });
    }
    next();
};

const redirectiIfAuthenticated = (to, from, next) => {
    if(store.getters['auth/authenticated']){
        return next({
            name: 'home'
        });
    }
    next();
};

export{
    requireAuthentication,
    redirectiIfAuthenticated
}