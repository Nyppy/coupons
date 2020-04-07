<template>
    <div class="card-form">
        <div class="container">
            <header-elem></header-elem>
            <main class="main">
                <div class="card-form__inner">          
                    <div class="payment-form">
                        <div class="payment-form__inner">
                            <coupon-elem></coupon-elem>
                            <form action="" class="payment-form__form">
                                <div class="payment-form__title">
                                    Оплата
                                </div>
                                <div class="payment-form__cardnumber">
                                    <input class="payment-form__cardnumber-input" type="number" placeholder="Номер карты">
                                </div>
                                <div class="payment-form__cardname">
                                    <input class="payment-form__cardname-input" type="text" placeholder="Имя держателя карты">
                                </div>
                                <div class="payment-form__cardinfo">
                                    <div class="payment-form__cardinfo-date">
                                        <input class="payment-form__cardinfo-dateinput" type="number" placeholder="Срок карты">
                                    </div>
                                    <div class="payment-form__cardinfo-cvv">
                                        <input class="payment-form__cardinfo-cvvinput" type="password" placeholder="CVV">
                                    </div>
                                </div>
                                <div class="payment-form__email">
                                    <input class="payment-form__email-input" type="email" placeholder="Почта для отправки купона">
                                </div>
                                <div class="payment-form__agree">
                                    <label><input class="payment-form__agree-checkbox" type="checkbox">Согласен с условиями использования и <span>политикой конфиденциальности</span></label>
                                </div>
                                <base-button></base-button>
                            </form>
                        </div>
                    </div>
                    <div class="payments__rightside">
                        <div class="payments__rightside-inner">
                            <img class="payments__rightside-img" src="../assets/img/img-footer1.png" alt="tea">
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
import BaseButton from "../components/Base/BaseButton"


export default {
    data() {
        return {
        }
    },
    components: {
        HeaderElem,
        FooterElem,
        CouponElem,
        BaseButton
    }
}
</script>

<style lang="scss" scoped>
.card-form {
    width: 100%;
}
.container {
    max-width: 1230px;
    padding: 0 15px;
    margin: 0 auto;
}
.card-form__inner {
    display: flex;
}
.payments__rightside {
flex-basis: 50%;
display: flex;
align-items: center;
justify-content: center;
}
.payments__rightside-text {
margin-top: 15px;
font-family: 'Gotham Pro', sans-serif;
font-size: 16px;
line-height: 24px;
font-weight: 500;
color: #2e3d4c;
text-align: center;
width: 300px;
margin: 0 auto;
}
</style>