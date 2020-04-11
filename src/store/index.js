import Vue from 'vue'
import Vuex from 'vuex'
import categoriesList from './modules/categories'
import coupons from './modules/coupons'


Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        categoriesList,
        coupons
    }
})