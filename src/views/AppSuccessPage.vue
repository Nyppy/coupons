<template>
    <div class="success-page">
        <div class="container">
            <header-elem></header-elem>
            <main class="main">
                <div class="success-page__inner">
                    <div class="success-page__info">
                        <div class="success-page__info-inner">
                            <div class="success-page__info-title">Спасибо за покупку!</div>
                            <div class="success-page__info-subtitle">Ваш купон</div>
                            <coupon-elem></coupon-elem>
                            <div class="success-page__info-message">был отправлен на указанную почту!</div>
                            <div class="success-page__info-button">
                                <router-link 
                                    class="success-page__button" 
                                    to="/coupons-catalogue">
                                    Выбрать ещё купоны
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div class="success-page__rightside">
                        <div class="success-page__rightside-inner">
                            <img class="success-page__rightside-img" src="../assets/img/img-footer2.png" alt="tea">
                            <div class="success-page__rightside-text">
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
    components: {
        HeaderElem,
        FooterElem,
        CouponElem
    }
}
</script>

<style lang="scss" scoped>
.success-page {
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
.success-page__inner {
    display: flex;
    min-height: 540px;
}
.success-page__info {
    flex-basis: 50%;
    position: relative;
    display: flex;
    text-align: left;
    align-items: center;
}
.success-page__info::after {
    content: '';
    width: 1px;
    height: 100%;
    background-color: #dadada;
    position: absolute;
    right: 0;
    top: 0;
}
.success-page__info-title {
    font-size: 36px;
    color: #2e3d4c;
    font-weight: 900;
    margin-bottom: 10px;
}
.success-page__info-subtitle,
.success-page__info-message {
    font-size: 24px;
    color: #2e3d4c;
    font-weight: 700;
    margin-bottom: 5px;
}
.success-page__info-message {
    margin-top: 10px;
    margin-bottom: 15px;
}
.success-page__rightside {
    flex-basis: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.success-page__rightside-text {
    font-size: 16px;
    line-height: 24px;
    font-weight: 600;
    color: #2e3d4c;
    text-align: center;
    width: 300px;
    margin: 15px auto 0;
}
.success-page__button {
    display: inline-block;
    text-decoration: none;
    text-align: center;
    width: 221px;
    font-size: 16px;
    color: #fff;
    font-weight: 700;
    padding: 10px 5px;
    border: none;
    border-radius: 6px;
    background: linear-gradient( -13deg, rgb(64,196,67) 0%, rgb(85,242,89) 100%);
    transition: all .8s;
    &:hover {
        background: linear-gradient( -13deg, rgb(85,242,89) 0%, rgb(64,196,67) 100%);
    }
}
</style>