import axios from 'axios'

export default {
    actions: {
        async allCoupons({commit}, arr) {
            try {
                commit('lockUiCoup');
                const {
                    data: {
                        data: List
                    }
                } = await axios.get('http://127.0.0.1:8000/coupons/' + arr[0] + '/');
                commit('updateCoupons', List);
                commit('changeCurrentCategoryId', arr[0]);                
                commit('changeCurrentCategoryName', arr[1]);  
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
        changeCurrentCategoryId(state, id) {
            state.currentCategoryId = id
        },
        changeCurrentCategoryName(state, name) {
            state.currentCategoryName = name
        },
        updateCoupons(state, coupons) {
            state.couponsList = coupons
        }
    },
    state: {
        couponsList: null,
        lockingPool: false,
        currentCategoryId: null,
        currentCategoryName: null
    },
    getters: {
        getCouponsList(state) {
            return state.couponsList
        },
        getLockStateCoupons(state) {
            return state.lockingPool
        },
        getCurrentCategoryId(state) {
            return state.currentCategoryId
        },
        getCurrentCategoryName(state) {
            return state.currentCategoryName
        }
        
    }
}