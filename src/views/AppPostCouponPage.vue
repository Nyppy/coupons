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
                                                class="card-form_price-input"
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
                            <img class="coupon-preview__image" :src="imageSrc" alt="">
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

.Image-input__image-wrapper {
    flex-basis: 80%;
    height: 150px;
    flex: 2.5;
    border-radius: 1px;
    margin-right: 10px;
    overflow-y: hidden;
    border-radius: 1px;
    background: #eee;
    justify-content: center;
    align-items: center;
    display: flex;
}


.Image-input__image {
    max-width: 100%;
    border-radius: 1px;
}

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
    font-size: 999px;
    min-height: 100%;
    opacity: 0;
    position: absolute;
    right: 0;
    text-align: right;
    top: 0;
    cursor: pointer;
}
</style>