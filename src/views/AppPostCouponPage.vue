<template>
    <div class="place-form">
        <div class="header__wrapper">
            <div class="container">
                <header-elem></header-elem>
            </div>
        </div>
        <div class="place-form__wrapper">
            <div class="container">
                <div class="place-form__inner">
                    <div class="coupon-form">
                        <div class="coupon-form__inner">
                            <form action="#" class="coupon-form__form" @submit.prevent="submit">
                                <div class="coupon-form__title">
                                    Разместить купон
                                </div>
                                <div class="card-form__name">
                                    <input 
                                        class="card-form__name-input"
                                        placeholder="Название купона (компании / услуги)"
                                        type="text">
                                </div>
                                <div class="card-form__address">
                                    <input 
                                        class="card-form__address-input"
                                        placeholder="Указать точный адрес на карте"
                                        type="text">
                                </div>
                                <div class="card-form__descr">
                                    <input 
                                        class="card-form__descr-input"
                                        placeholder="Описание (не более 100 символов)"
                                        type="text">
                                </div>
                                <div class="card-form__prices">
                                    <div class="card-form__prices-left">
                                        <div class="card-form__sale">
                                            <input 
                                                class="card-form__sale-input"
                                                placeholder="0 %"
                                                type="text">
                                        </div>
                                        <div class="card-form__price">
                                            <input 
                                                class="card-form__price-input"
                                                placeholder="0 $ (FREE)"
                                                type="text">
                                        </div>
                                    </div>
                                    <div class="card-form__prices-right">
                                        <div class="card-form__image">
                                            Choose
                                            <input 
                                                @change="previewThumbnail" 
                                                class="card-form__image-input" 
                                                name="thumbnail" 
                                                type="file">
                                        </div>
                                    </div>
                                </div>
                                <div class="card-form__summ">
                                    <span class="card-from__summ-text">
                                        К оплате: 100$ / год
                                    </span>
                                </div>
                                <div class="card-form__footer">
                                    <div class="card-form__submit">
                                        <button class="submit-button">Оплатить размещение</button>
                                    </div>
                                    <div class="card-form__agree">
                                        <input 
                                            class="card-form__agree-input"
                                            type="checkbox" 
                                            id="agree-checkbox">    
                                            <label 
                                                class="agree-checkbox__label" 
                                                for="agree-checkbox"
                                                                                                > 
                                                <span> Согласен с условиями использования и 
                                                    <span class="policy">политикой конфиденциальности</span>
                                                </span>
                                            </label>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="coupon-preview">
                        <div class="coupon-preview_inner">
                            <div class="coupon-preview__image-wrapper">
                                <img class="coupon-preview__image" :src="imageSrc" alt="">
                            </div>
                            <div class="coupon-preview__price-wrapper">
                                <div class="coupon-preview__sale">Скидка {{couponSale}}</div>
                                <!-- Тут должна быть суть скидки -->
                                <div class="coupon-preview__price"> <span>за</span>  {{couponPrice == 0 ? "Free" : couponPrice}}</div>
                            </div>
                            <div class="coupon-preview__name"></div>
                            <div class="coupon-preview__validity">Осталось: 1 год 0 мес. 0д. 0 ч. 0 м. 0 с.</div>
                            <div class="coupon-preview__descr-inner">
                                <div class="coupon-preview__descr-title">Описание:</div>
                                <div class="coupon-preview__descr-info">{{couponDescr}}</div>
                            </div>
                            <div class="coupon-preview__address-inner">
                                <div class="coupon-preview__address-title">Адрес:</div>
                                <div class="coupon-preview__address-info">{{couponAddress}}</div>
                            </div>
                            <div class="coupon-preview__buttons">
                                <button class="coupon-preview__buy-button">Приобрести</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="Image-input__image-wrapper">
            <img v-show="imageSrc" class="Image-input__image" :src="imageSrc">
        </div>

        <div class="Image-input__input-wrapper">
            Choose
            <input @change="previewThumbnail" class="Image-input__input" name="thumbnail" type="file">
        </div> -->
        <div class="footer__wrapper">
            <div class="container">
                <footer-elem></footer-elem>
            </div>
        </div>
    </div>
</template>

<script>
import FooterElem from "../components/TheFooter"
import HeaderElem from "../components/TheHeader"

export default {
    data() {
        return {
            imageSrc: '',
            couponName: '',
            couponAddress: '',
            couponDescr: '',
            couponSale: null,
            couponPrice: 0
        }
    },
    components: {
        HeaderElem,
        FooterElem
    },
    methods: {
        previewThumbnail: function(event) {
            var input = event.target;

            if (input.files && input.files[0]) {
                var reader = new FileReader();
                var vm = this;

                reader.onload = function(e) {
                    vm.imageSrc = e.target.result;
                }

                reader.readAsDataURL(input.files[0]);
            }
        }
}}
</script>

<style lang="scss" scoped>
.place-form {
    width: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
}
.header__wrapper {
    flex: 0 0 auto;
}
.place-form__wrapper {
    flex: 1 0 auto;
}
.footer__wrapper {
    flex: 0 0 auto;
}
.container {
    max-width: 1230px;
    padding: 0 15px;
    margin: 0 auto;
}
.place-form__inner {
    display: flex;
    min-height: 540px;
}
.coupon-form {
    flex-basis: 50%;
    display: flex;
    text-align: left;
    padding-right: 20px;
    border-right: 1px solid #dadada;
    &__form {
        max-width: 475px;
        width: 100%;
    }
    &__title {
        font-size: 24px;
        line-height: 30px;
        font-weight: 700;
        color: #2e3d4c;
    }
}
/*input image*/
.card-form__name, 
.card-form__address,
.card-form__descr,
.card-form__sale,
.card-form__price {
    width: 100%;
    border-bottom: 1px solid #2e3d4c;
    position: relative;
    &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
    }    
}
.card-form__name,
.card-form__descr {
    &::before {
        background-image: url(../assets/img/payments/pencil.svg);
        width: 33px;
        height: 33px;
    }
}
.card-form__address {
    &::before {
        background-image: url(../assets/img/payments/gps.svg);
        width: 37px;
        height: 33px;
        background-size: contain;
    }
}
.card-form__sale {
    &::before {
        background-image: url(../assets/img/payments/sales.svg);
        width: 33px;
        height: 33px;
        background-size: contain;
    }
}
.card-form__price {
    &::before {
        background-image: url(../assets/img/payments/money.svg);
        width: 29px;
        height: 35px;
        background-size: contain;
    }
}
.card-form__sale,
.card-form__price {
    &::after {
        content: '';
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
    }
}
/*red star*/
.card-form__name, 
.card-form__address,
.card-form__descr {
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

.card-form__name-input, 
.card-form__address-input,
.card-form__descr-input,
.card-form__sale-input,
.card-form__price-input {
    width: 100%;
    border: 0;
    padding: 25px 10px 15px 55px;
    font-size: 18px;
    font-weight: 400;
    outline: none;
    &::placeholder {
        font-size: 16px;
        font-weight: 400;
        font-family: 'Montserrat', sans-serif;
        color: #696969;
        display: none;
    }
    &:focus {
        &::placeholder {
            font-size: 0;
        }
    }
}


.coupon-preview {
    flex-basis: 50%;
}
// .Image-input__image-wrapper {
//     flex-basis: 80%;
//     height: 150px;
//     flex: 2.5;
//     border-radius: 1px;
//     margin-right: 10px;
//     overflow-y: hidden;
//     border-radius: 1px;
//     background: #eee;
//     justify-content: center;
//     align-items: center;
//     display: flex;
// }


// .Image-input__image {
//     max-width: 100%;
//     border-radius: 1px;
// }

.card-form__image {
    overflow: hidden;
    position: relative;
    background: #eee;
    border-radius: 1px;
    float: left;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgba(0,0,0,0.2);
    transition: 0.4s background;
}

.card-form__image:hover {
    background: #e0e0e0;
}


.card-form__image-input {
    cursor: inherit;
    display: block;
    min-height: 100%;
    opacity: 0;
    text-align: right;
    cursor: pointer;
}
.coupon-preview {
    &__image {
        
        
        width: 100%;
        max-height: 100%;
        border-radius: 7px;
        
        
        &-wrapper {
            background-color: #707070;
            max-width: 370px;
            height: 160px;
            margin: 0 auto;
            border-radius: 7px;
            
        }
    }
}
</style>