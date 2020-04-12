import axios from 'axios'

export default {
    actions: {
        async allCoupons({commit}, {category}) {
            try {
                commit('lockUiCoup');
                commit('changeCurrentCategory', category); 
                const {
                    data: {
                        data: List
                    }
                } = await axios.get('http://127.0.0.1:8000/coupons/' + category.id + '/');
                commit('updateCoupons', List);
                commit('unlockUiCoup');
            } catch (e) {
                commit('lockUiCoup');
                console.log(e.message)
            }
            return Promise.resolve()
        }
    },
    mutations: {
        lockUiCoup: state => state.lockingPool = true,
        unlockUiCoup: state => state.lockingPool = false,
        changeCurrentCategory(state, category) {
            state.currentCategory = category
        },
        updateCoupons(state, coupons) {
            state.couponsList = coupons
        }
    },
    state: {
        couponsList: null,
        lockingPool: false,
        currentCategory: {}
    },
    getters: {
        getCouponsList(state) {
            return state.couponsList
        },
        getLockStateCoupons(state) {
            return state.lockingPool
        },
        getCurrentCategory(state) {
            return state.currentCategory
        }
        
    }
}