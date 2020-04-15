import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)

export default new Router ({
    mode: 'history',
    routes: [
        {
            path: "/",
            component: () => import('./views/index.vue')
        },
        {
            path: "/check-payment-method",
            name: "paymethods",
            component: () => import('./views/paymethods.vue')
        },
        {
            path: "/credit-card-form",
            component: () => import('./views/AppCardForm.vue')
        },
        {
            path: "/successful-payment",
            name: 'successPage',
            component: () => import('./views/AppSuccessPage.vue')
        },
        {
            path: "/coupons-catalogue",
            component: () => import('./views/AppCataloguePage.vue')
        }
    ]
})