<template>
    <div class="popup" :class="{'popup--active': getPopupState}">
        <div class="popup__inner">
            <img class="popup___image" src="../../assets/img/coupon-img.jpg" alt="">
            <div class="popup-price__wrapper">
                <div class="popup-sale">Скидка {{getCurrentCoupon.price_sale}}</div>
                <!-- Тут должна быть суть скидки -->
                <div class="popup-price"> <span>за</span>  {{getCurrentCoupon.price_service == 0 ? "Free" : getCurrentCoupon.price_service}}</div>
            </div>
            <div class="popup-name">{{getCurrentCoupon.name}}</div>
            <div class="popup-validity">{{getTimer(getCurrentCoupon.end_data)}}</div>
            <div class="popup-descr__inner">
                <div class="popup-descr__title">Описание:</div>
                <div class="popup-descr__info">{{getCurrentCoupon.summary}}</div>
            </div>
            <div class="popup-address__inner">
                <div class="popup-address__title">Адрес:</div>
                <div class="popup-address__info">
                    Россия, г. Нижний Новгород, ул. Карла Маркса, д.15
                </div>
            </div>
            <div class="popup__buttons">
                <button class="popup__return-button" @click="unsetScroll(); showPopup(false)">Вернуться</button>
                <button class="popup__buy-button" @click="goToPayPage()">Приобрести</button>
            </div>
        </div> 
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import router from '../../router';


export default {
    computed: {
        ...mapGetters([
            'getCurrentCoupon',
            'getPopupState'
        ])
    },
    methods: {
        ...mapActions([
            'showPopup'
        ]),
        unsetScroll() {
            document.body.style.overflow = null
        },
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
        goToPayPage() {
            this.unsetScroll();
            router.push({ name: 'paymethods'})
        }
    }
}
</script>

<style lang="scss" scoped>
.popup {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    padding: 0 10px;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    display: none;
    &--active {
        display: flex;
        z-index: 9;
    }
}
.popup__inner {
    max-width: 510px;
    width: 100%;
    padding: 15px 20px 30px;
    background-color: #fff;
    color: #2e3d4c;
    text-align: left;
    border-radius: 7px;
    box-shadow: 0px 10px 21px 0px rgba(6, 7, 7, 0.33)

}
.popup___image {
    max-width: 469px;
    width: 100%;
    height: auto;
    border-radius: 7px;
}
.popup-price__wrapper{
    display: flex;
    justify-content: space-between;
    font-size: 34px;
    font-weight: 600;
    padding: 10px 0 15px;
}
.popup-price span {
    font-size: 28px;
    color: #cacaca;
}
.popup-name {
    font-size: 24px;
    line-height: 25px;
    font-weight: 700;
    color: #46d149;
}
.popup-validity {
    font-size: 16px;
    line-height: 17px;
    font-weight: 700;
    margin-bottom: 25px;
}
.popup-descr__title, .popup-address__title {
    font-size: 14px;
    font-weight: 700;
}
.popup-descr__info, .popup-address__info {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 25px;
}
.popup__return-button, .popup__buy-button {
    display: inline-block;
    width: 155px;
    font-size: 16px;
    text-align: center;
    font-weight: 600;
    color: #fff;
    padding: 10px 5px;
    border-radius: 7px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 2s;
}
.popup__return-button {
    background: #2e3d4c;
    margin-right: 10px;
    &:hover {
        background: #515e69;
    }
}
.popup__buy-button {
    background: linear-gradient( -13deg, rgb(64,196,67) 0%, rgb(85,242,89) 100%);
    &:hover {
        background: linear-gradient( -13deg, rgb(85,242,89) 0%, rgb(64,196,67) 100%);
    }
}
</style>