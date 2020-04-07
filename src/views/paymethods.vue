<template>
    <div class="payments"> 
        <div class="container">
            <header-elem></header-elem>
            <main class="main">
                <div class="payments__inner">
                    <div class="payments__info">
                        <div class="payments__info-inner">
                            <coupon-elem></coupon-elem>
                            <div class="payments__info-title">
                                Выберите способ оплаты
                            </div>
                            <div class="payments__info-list">
                                <router-link class="payments__info-link" to="/credit-card-form">
                                    <img class="payments__info-img" src="../assets/img/payments/visa.png" alt="visa">
                                </router-link>
                                <router-link class="payments__info-link" to="/credit-card-form">
                                    <img class="payments__info-img" src="../assets/img/payments/mastercard.png" alt="mc">
                                </router-link>
                                <router-link class="payments__info-link" to="/credit-card-form">
                                    <img class="payments__info-img" src="../assets/img/payments/paypal.png" alt="paypal">
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div class="payments__rightside">
                        <div class="payments__rightside-inner">
                            <img class="payments__rightside-img" src="../assets/img/img-footer2.png" alt="tea">
                            <div class="payments__rightside-text">
                                Выберите привычный для вас способ оплаты
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <footer-elem></footer-elem>
        </div>
    </div>
</template>

<script>
import FooterElem from "../components/TheFooter"
import HeaderElem from "../components/TheHeader"
import CouponElem from "../components/Base/BaseOrder"


export default {
    data() {
        return {
        }
    },
    components: {
        HeaderElem,
        FooterElem,
        CouponElem
    }
}
</script>

<style scoped>
.payments {
    width: 100%;
}
.container {
    max-width: 1230px;
    padding: 0 15px;
    margin: 0 auto;
}
.main {
    padding: 40px 0;
}
.payments__inner {
    display: flex;
    min-height: 540px;
}
.payments__info {
    flex-basis: 50%;
    position: relative;
    display: flex;
    text-align: left;
    align-items: center;
}
.payments__info::after {
    content: '';
    width: 1px;
    height: 100%;
    background-color: #dadada;
    position: absolute;
    right: 0;
    top: 0;
}
.payments__info-title {
    font-size: 24px;
    line-height: 42px;
    font-weight: 700;
    margin-bottom: 10px;
}
.payments__info-link {
    display: inline-block;
    filter: grayscale(100%);
    filter: gray;
    transition: all .2s;
}
.payments__info-link:hover {
    filter: none;
}
.payments__info-link + .payments__info-link {
    margin-left: 30px;
}
.payments__rightside {
    flex-basis: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.payments__rightside-text {
    font-size: 16px;
    line-height: 24px;
    font-weight: 600;
    color: #2e3d4c;
    text-align: center;
    width: 300px;
    margin: 15px auto 0;
}
</style>