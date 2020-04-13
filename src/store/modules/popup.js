export default {
    actions: {
        changeCurrentCoupon({commit}, item) {
            commit('setCurrentCoupon', item)
        },
        showPopup ({commit}, status) {
            commit('setPopupState', status)
        }
    },
    mutations: {
        setCurrentCoupon(state, coupon) {
            state.coupon = coupon
        },
        setPopupState(state, status) {
            state.popupState = status
        }

    },
    state: {
        coupon: {},
        popupState: false 
    },
    getters: {
        getCurrentCoupon(state) {
            return state.coupon
        },
        getPopupState(state) {
            return state.popupState
        }
    }
}