<template>
    <div class="coupons">
        <ul class="coupons__list">
            <li
                class="coupons__item"
                v-for="item in getCouponsList"
                :key="item.id"
                :id="item.id"
            >
                <div class="coupons__item-inner" @click="changeCurrentCoupon(item); showPopup(true); dontScroll()">
                    <div class="coupons__item-picture">
                        <img class="coupons__item-image" src="../../assets/img/coupon-img.jpg" alt="">
                        <span 
                            class="coupons__item-sale"
                            >{{item.price_sale}}</span>
                        <span class="coupons__item-price">{{item.price_service == 0 ? "Free" : item.price_service}}</span>
                    </div>
                    <div class="coupons__item-title">{{item.name}}</div>
                    <div class="coupons__item-validity">
                        {{getTimer(item.end_data)}}
                    </div>
                    <div class="coupons__item-descr">{{item.summary}}</div>
                </div>
            </li>
        </ul>
        <div class="loader" :class="{'loader--active': getLockStateCoupons}">
            <loader-elem/>
        </div>
    </div>
</template>

<script>
import LoaderElem from './BasePreloader'
import { mapGetters, mapActions } from 'vuex'

export default {
    components: {
        LoaderElem
    },
    computed: {
        ...mapGetters([
            'getCouponsList',
            'getLockStateCoupons'
        ])
    },
    methods: {
        ...mapActions([
            'changeCurrentCoupon',
            'showPopup'
        ]),
        getTimer(end_date) {
            let timeend = new Date(end_date);
            let today = new Date();
            let timer = Math.floor((timeend - today)/1000);
            if (timer < 0) return 'Предложние уже не активно';
            let tsec = timer % 60; timer = Math.floor(timer/60);
            let tmin = timer % 60; timer = Math.floor(timer/60);
            let thour = timer % 24; timer = Math.floor(timer/24);
            let timestr = "Осталось: " + timer + " д. " + thour + " ч. " + tmin + " м. " + tsec + " с.";
            return timestr;
        },
        dontScroll() {
            document.body.style.overflow = 'hidden'
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../styles/scroll';

.coupons {
    position: relative;
    height: 100%;
    padding-left: 30px;
    padding-top: 15px;
    overflow-y: auto;
    @extend %scroll;
    &__list {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin: 0;
        padding: 0;
        list-style: none;
    }
    &__item {
        width: 25%;
        height: 250px;
        margin-bottom: 15px;
        text-align: left;
        &-inner {
            width: 305px;
            cursor: pointer;
            &:hover .coupons__item-title {
                color: #46d149;
            }
             &:hover .coupons__item-validity {
                color: #2e3d4c; 
             }
        }
        &-picture {
            position: relative;
        }
        &-image {
            width: 100%;
            max-width: 305px;
            height: 145px;
            border-radius: 6px;
        }
        &-sale {
            max-width: 170px;
            position: absolute;
            bottom: 14px;
            right: -7px;
            font-size: 36px;
            line-height: 44px;
            font-weight: 600;
            text-align: center;
            background-color: #2e3d4c;
            height: 44px;
            border-radius: 7px;
            color: #fff;
            padding: 0px 10px;
        }
        &-price {
            position: absolute;
            top: 10px;
            left: -7px;
            font-size: 36px;
            line-height: 45px;
            font-weight: 600;
            background: linear-gradient( -13deg, rgb(64,196,67) 0%, rgb(85,242,89) 100%);
            height: 45px;
            border-radius: 7px;
            padding: 0px 10px;
        }
        &-title {
            font-size: 18px;
            font-weight: 700;
            color: #2e3d4c;
            padding: 4px 0 2px;
        }
        &-validity {
            font-size: 14px;
            line-height: 18px;
            font-weight: 700;
            margin-bottom: 3px;
            color: #8f8f8f;
        }
        &-descr {
            font-size: 12px;
            line-height: 12px;
            font-weight: 600;
            color: #46515d;
        }
    }
}
.loader {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: white;
    display: none;
    &--active {
        display: flex;
    }
}
@media (max-width: 1700px) {
    .coupons__item {
        width: 33.33%;
    }
    .coupons__item-inner {
        margin: 0 auto;
    }
}
@media (max-width: 1367px) {
    .coupons__item { 
        width: 50%;
    }
}
@media (max-width: 1023px) {
    .coupons {
        padding-left: 0;
    }
}
@media (max-width: 700px) {
    .coupons__item {
        height: 240px;
    }
    .coupons__item-inner {
        max-width: 260px;
        width: 100%;
    }
    .coupons__item-image {
        height: auto;
    }
}
@media (max-width: 600px) { 
    .coupons__item {
        width: 100%;
        height: auto;
        margin-bottom: 20px;
    }
    .coupons__item-inner {
        max-width: 305px;
    }
}
@media (max-width: 475px) { 
    .coupons {
        padding-top: 10px;
    }
}
@media (max-width: 375px) { 
    .coupons__item-inner {
        max-width: 275px;
    }
}
</style>