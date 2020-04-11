import axios from 'axios'

export default {
    actions: {
        async allCategories({commit}) {
            try {
                commit('lockUiCtg');
                const { 
                    data: {
                        data: List 
                    }
                } = await axios.get('http://127.0.0.1:8000/categories');
                commit('updateCategories', List);  
                commit('unlockUiCtg');
            } catch (error) {
                commit('lockUiCtg');
                console.log(error.message)
            }
            return Promise.resolve()
        }
    },
    mutations: {
        lockUiCtg: state => state.lockingPool = true,
        unlockUiCtg: state => state.lockingPool = false,
        updateCategories(state, categories) {
            state.categories = categories
        }
    },
    state: {
        categories: null,
        lockingPool: false
    },
    getters: {
        getCategories(state) {
            return state.categories
        },
        getLockStateCategories(state) {
            return state.lockingPool
        }
    }
}