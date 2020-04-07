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
                                    <input class="payment-form__cardnumber-input" type="tel" placeholder="Номер карты">
                                </div>
                                <div class="payment-form__cardname">
                                    <input class="payment-form__cardname-input" type="text" placeholder="Имя держателя карты">
                                </div>
                                <div class="payment-form__cardinfo">
                                    <div class="payment-form__cardinfo-date">
                                        <input class="payment-form__cardinfo-dateinput" type="tel" placeholder="Срок карты">
                                    </div>
                                    <div class="payment-form__cardinfo-cvv">
                                        <input class="payment-form__cardinfo-cvvinput" type="password" placeholder="CVV">
                                    </div>
                                </div>
                                <div class="payment-form__email">
                                    <input class="payment-form__email-input" type="email" placeholder="Почта для отправки купона">
                                </div>
                                <div class="payment-form__agree">
                                    <input class="payment-form__agree-checkbox" type="checkbox" id="agree-checkbox"><label class="agree-checkbox__label" for="agree-checkbox">Согласен с условиями использования и <span>политикой конфиденциальности</span></label>
                                </div>
                                <div class="payment__button">
                                    <button class="base-button" type="submit">Оплатить</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="payments__rightside">
                        <div class="payments__rightside-inner">
                            <img class="payments__rightside-img" src="../assets/img/img-footer1.png" alt="tea">
                            <div class="payments__rightside-text">
                                Остался последний шаг
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
    min-height: 540px;
}
.payment-form {
    flex-basis: 50%;
    position: relative;
    display: flex;
    text-align: left;
    &::after {
        content: '';
        width: 1px;
        height: 100%;
        background-color: #dadada;
        position: absolute;
        right: 0;
        top: 0;
        }
}
.payment-form__title {
    font-size: 24px;
    line-height: 32px;
    font-weight: 700;
    color: #2e3d4c;
}
.payment-form__form {
    max-width: 475px;
    width: 100%;
}
.payment-form__cardinfo {
    display: flex;
    justify-content: space-between;
}
.payment-form__cardnumber,
.payment-form__cardname,
.payment-form__email {
    width: 100%;
    border-bottom: 1px solid #2e3d4c;
}
.payment-form__cardinfo-date,
.payment-form__cardinfo-cvv {
    width: 40%;
    border-bottom: 1px solid #2e3d4c;
}
.payment-form__cardnumber,
.payment-form__cardname,
.payment-form__email, 
.payment-form__cardinfo-date,
.payment-form__cardinfo-cvv {
    position: relative;
    &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
    }
    &::after {
        content: '*';
        font-size: 18px;
        font-weight: 700;
        color: red;
        position: absolute;
        top: 17px;
    }
    &:focus-within {
        &::after {
            display: none;
        }
    }
}
.payment-form__cardnumber {
    &::before {
        background-image: url(../assets/img/payments/pay.png);
        width: 38px;
        height: 35px;
    }
    &::after {
        left: 170px;
    }
}
.payment-form__cardname {
    &::before {
        background-image: url(../assets/img/payments/name.png);
        width: 37px;
        height: 31px;
    }
    &::after {
        left: 243px;
    }
}
.payment-form__cardinfo-date {
    &::before {
        background-image: url(../assets/img/payments/calendar.png);
        width: 37px;
        height: 37px;
    }
    &::after {
        left: 153px;
    }
}
.payment-form__cardinfo-cvv {
    &::before {
        background-image: url(../assets/img/payments/cvv.png);
        width: 35px;
        height: 35px;
    }
    &::after {
        left: 93px;
    }
}
.payment-form__email {
    &::before {
        background-image: url(../assets/img/payments/letter.png);
        width: 39px;
        height: 27px;
    }
    &::after {
        left: 288px;
    }
}
.payment-form__cardnumber-input, 
.payment-form__cardname-input,
.payment-form__cardinfo-dateinput,
.payment-form__cardinfo-cvvinput,
.payment-form__email-input {
    width: 100%;
    border: 0;
    padding: 20px 10px 20px 55px;
    font-size: 16px;
    font-weight: 400;
    outline: none;
    &::placeholder {
        font-weight: 400;
        font-family: 'Montserrat', sans-serif;
        color: #696969;
        display: none;
    }
    &:focus {
        background-color: rgb(226, 255, 218);
        &::placeholder {
            font-size: 0;
        }
    }
}
.payment-form__agree {
    padding: 20px 0;
}
.payment-form__agree-checkbox {
    position: absolute;
    z-index: -1;
    opacity: 0;
    &:checked + .agree-checkbox__label::before {
        background-image: url(../assets/img/payments/checkmark.png);
    }
}

.agree-checkbox__label {
    font-size: 16px;
    font-weight: 400;
    color: #696969;
    display: inline-flex;
    align-items: center;
    user-select: none;
    &::before {
        content: '';
        display: inline-block;
        width: 40px;
        height: 40px;
        flex-shrink: 0;
        flex-grow: 0;
        border: 1px solid #2e3d4c;
        border-radius: 5px;
        margin-right: 15px;
        background-repeat: no-repeat;
        background-position: center center;
    }
    span {
        color: #44cd48;
        display: contents;
    }
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
.base-button {
  width: 221px;
  font-size: 16px;
  color: #fff;
  font-weight: 900;
  padding: 10px 15px;
  border: none;
  border-radius: 6px;
  background: linear-gradient( -13deg, rgb(64,196,67) 0%, rgb(85,242,89) 100%);
  transition: all .8s;
  &:hover {
      background: linear-gradient( -13deg, rgb(85,242,89) 0%, rgb(64,196,67) 100%);
  }
}
</style>