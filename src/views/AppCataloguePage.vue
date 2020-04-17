<template>
    <div class="catalogue">
        <div class="header-wrapper">
            <header-elem></header-elem>
            <div class="header-search">
                <div class="header-search__form">
                    <input class="header-search__input" type="text" placeholder="search">
                    <button class="header-search__button"></button>
                </div>
                <div class="header-search__result">
                    <ul class="header-search__result-list">
                        <li class="header-search__result-elem"></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="catalogue-body">
            <div class="catalogue-wrapper">
                <aside class="catalogue-filter">
                    <router-link class="return-index__button" to='/'>К выбору стран</router-link>
                    <div class="catalogue-location">
                        <div class="catalogue-country">Россия (RU)</div>
                        <div class="catalogue-city">г. Нижний Новгород</div>
                    </div>
                    <div class="catalogue-filter__list">
                        <h3 class="catalogue__list-header">
                            Категории
                        </h3>
                        <div class="catalogue__list">
                            <ul class="catalogue__list-inner">
                                <li 
                                    class="catalogue__list-item"
                                    v-for="item in getCategories" 
                                    :key="item.id"
                                    :id="item.id"
                                    @click="allCoupons({'category': item}); toogleMenu()">
                                    <img class="catalogue__list-img" src="../assets/img/fork.png" alt="">
                                    <span class="catalogue__list-item-name" >{{item.name}}</span>
                                    <span 
                                        class="catalogue__list-item-count"
                                        :class="{'catalogue__list-item-count--active': item.id === getCurrentCategory.id}"
                                        >({{item.count}})</span> 
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="catalogue-filter__close-button" @click="toogleMenu()"></div>
                    <div class="catalogue-filter__open-button" @click="toogleMenu()">&#9658;</div>
                </aside>  
                <main class="catalogue__elements">
                    <div class="catalogue__breadcrumps">
                        <ul class="breadcrumps">
                            <li class="breadcrumps__item">
                                <span class="breadcrumps__text">Категории /</span>
                            </li>
                            <li class="breadcrumps__item">
                                <div class="breadcrumps__text">
                                    <span class="breadcrumps__text breadcrumps__text--active">{{getCurrentCategory.name}} </span>
                                    <span class="breadcrumps__item-counter">({{currentCategoryCountMessage}})</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="catalogue-coupons">
                        <base-coupons></base-coupons>
                    </div>
                   
                </main>
            </div>
            <div class="preloader" :class="{'preloader--active':  getLockStateCategories}">
                <loader-elem></loader-elem>
            </div>
        </div>
        <img class="girl-img" src="../assets/img/img-footer7.png" alt="" >
        <base-popup></base-popup>
    </div>
</template>

<script>
import HeaderElem from "../components/TheHeader"
import LoaderElem from '../components/Base/BasePreloader'
import BaseCoupons from '../components/Base/BaseCoupons'
import BasePopup from '../components/Base/BasePopup'
import { mapActions, mapGetters } from 'vuex'

export default {
    data() {
        return {
            
        }
    },
    components: {
        LoaderElem,
        HeaderElem,
        BaseCoupons,
        BasePopup
    },
    computed: {
        ...mapGetters([
            'getCategories',
            'getCouponsList',
            'getCurrentCategory',
            'getLockStateCoupons',
            'getLockStateCategories',
            'getPopupState'
        ]),
        currentCategoryCountMessage() {
            let message = '';
            let count = this.getCurrentCategory.count;
            if (count === 1) {
                message = '1 предложение'
            } else if (count < 5 && count > 0) {
                message = count + ' предложения'
            } else {
                message = count + ' предложений'
            }
            return message
        }
    },
    methods: {
        ...mapActions([
            'allCategories',
            'allCoupons'
        ]),
        toogleMenu() {
            document.querySelector('.catalogue-filter').classList.toggle('catalogue-filter--show');
        }
    },
    async mounted() {
        await this.allCategories();
        this.allCoupons({'category': this.getCategories[0] });
        
    }
}
</script>

<style lang="scss" scoped>
@import '../styles/scroll';

.catalogue {
    max-height: 100vh;;
    height: 100%;
    display: flex;
    flex-direction: column;
    max-width: 1980px;
    margin: 0 auto;
    position: relative;
}
.header-wrapper {
    display: flex;
    align-items: center;
    padding: 0 20px;
    border-bottom: 1px solid #d3d3d3;
}
.header-search {
    margin-left: 23%;
    &__input {
        font-size: 18px;
        line-height: 28px;
        padding: 5px 10px 5px 30px;
        outline: none;
        border: none;
        &::placeholder {
            color: #cfcfcf;
        }
    }
    &__form {
        position: relative;
    }
    &__button {
        width: 24px;
        height: 24px;
        background-image: url(../assets/img/search.png);
        background-repeat: no-repeat;
        background-size: cover;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        background-color: transparent;
        border: none;
        outline: none;
        cursor: pointer;
    }
}
.header-search__result {
    display: none;
}
.catalogue-body {
    position: relative;
    display: flex;
    overflow: hidden;
    height: 100%;
}
.catalogue-wrapper {
    display: flex;
    padding: 0 20px;
}
.catalogue-filter {
    flex: 0 0 19%;
    padding-top: 5px;
    padding-right: 15px;
    min-width: 290px;
    height: 100%;
    border-right: 1px solid #ebebeb;
    color: #2e3d4c;
    text-align: left;
    z-index: 3;
}
.return-index__button {
    text-decoration: none;
    display: inline-block;
    font-size: 12px;
    color: #9a9a9a;
    font-weight: 500;
    padding-left: 15px;
    position: relative; 
    &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 10px;
        height: 9px;
        background-image: url(../assets/img/undo.png);
        background-repeat: no-repeat;
        background-size: cover;
    }
}
.catalogue-location {
    padding-top: 10px;
    padding-bottom: 15px;
    width: 86%;
    border-bottom: 1px solid #d3d3d3;
}
.catalogue-country {
    font-size: 16px;
    line-height: 18px;
    font-weight: 700;
}
.catalogue-city {
    font-size: 12px;
    font-weight: 500;
}
.catalogue__list {
    background-color: rgba(255,255,255, .9);;
    max-height: 205px;
    overflow-y: auto;
    @extend %scroll;
}
.catalogue__list-header {
    font-size: 16px;
    font-weight: 700;
    margin: 15px 0 10px;
}
.catalogue__list-inner {
    list-style: none;
    padding: 0;
    margin: 0;
}
.catalogue__list-item {
    display: flex;
    align-items: center;
    font-size: 16px;
    line-height: 30px;
    font-weight: 600;
    cursor: pointer;
    
}
.catalogue__list-img {
    width: 20px;
    height: 20px;
    margin-right: 5px;
}
.catalogue__list-item-name {
    margin-right: 5px;
    &:hover {
        color: #49cd4b;
        text-decoration: underline;
    }
}
.catalogue__list-item-count {
    color: #49cd4b;
    font-weight: 700;
    &--active {
        color: #acacac;
        font-weight: 500;
    }
}
.preloader {
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
.catalogue__elements {
    padding-bottom: 65px;
    z-index: 2;
}
.catalogue__breadcrumps {
    padding: 40px 5px 5px 25px;
}
.breadcrumps {
    list-style: none;
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
    &__item {
        display: block;
        & + .breadcrumps__item {
            margin-left: 5px;
        }
    }
    &__text {
        white-space: nowrap;
        font-size: 16px;
        font-weight: 600;
        color: #acacac;
        text-decoration: none;
        &--active {
            color: #2e3d4c;
        }
    }
}
.catalogue-coupons {
    width: 100%;
    height: 100%;
}
.girl-img {
    position: fixed;
    bottom: 0;
}
.catalogue-filter__open-button {
    width: 25px;  /* ширина в два раза меньше высоты, иначе получится полуовал */
    height: 50px;
    border: 2px solid #49cd4b;
    border-radius: 0 100% 100% 0 / 0 50% 50% 0;
    background: #49cd4b;
    position: absolute;
    top: 40px;
    right: -27px;
    cursor: pointer;
    font-size: 20px;
    line-height: 44px;
    text-shadow: 0px 0px 13px #0f1310;
    overflow: hidden;
    color: rgb(227, 255, 227);
    display: none;
    transition: all .2s;
    &:hover {
        // top: 38px;
        // right: -26px;
        // width: 26px;
        // height: 52px;
        transform: scale(1.05); 
    }
}
.catalogue-filter__close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    display: none;
    width: 25px;
    height: 25px;
    cursor: pointer;
    transition: all .2s;
    &:hover {
        &::before, &::after{
            height: 3px;
        }
    }
    &::before, &::after {
        content: '';
        position: absolute;
        height: 2px;
        width: 100%;
        top: 50%;
        left: 0;
        margin-top: -1px;
        background: #34a136;
    }
    &::before {
        transform: rotate(45deg);
    }
    &::after {
        transform: rotate(-45deg);
    }
}
/*-- media --*/ 
@media (max-height: 800px) {
    .girl-img {
        width: 300px;
    }
}
@media (max-height: 675px) {
    .girl-img {
        width: 220px;
    }
}
@media (max-height: 580px) {
    .girl-img {
        display: none;
    }
}
@media (max-width: 1367px) {
    .girl-img {
        width: 250px;
    }
} 
@media (max-width: 1700px) {
    .catalogue-wrapper {
        width: 100%;
    }
    .catalogue__elements {
        width: 100%;
    }
}

@media (max-width: 1200px) {
    .girl-img {
        display: none;
    }
    .catalogue-filter__list {
        height: 100%;
        
    }
    .catalogue__list {
        height: 100%;
        max-height: unset;
    }
    .catalogue-filter {
        background: white;
        height: 100%;
        padding-bottom: 125px;
    }
}
@media (max-width: 1023px) {
   .catalogue-filter {
        position: absolute;
        margin-left: -20px;
        transform: translateX(-100%);
        border-right: 2px solid #34a136;
        padding-right: 0;
        transition: transform .5s;
        &--show {
            transform: translateX(0);
            padding-left: 20px;
        }
    }
    .catalogue-filter__open-button {
        display: block;
    }
    .catalogue-filter__close-button {
        display: inline-block;
    }
    .catalogue__breadcrumps {
        padding: 20px 5px 5px 20px;
    }
    .catalogue__elements {
        padding-bottom: 45px;
    }
}
@media (max-width: 700px) {
    .catalogue-wrapper {
        padding: 0 10px;
    }
    .catalogue-filter {
        width: 100%;
    }  
    .catalogue__breadcrumps {
        padding: 15px 5px 5px 15px;
    }
    .catalogue-filter {
        margin-left: -10px;
        &--show {
            padding-left: 10px;
        }
    }
    .header-wrapper {
        justify-content: space-between;
        padding: 0 10px;
    }
    .header-search {
        margin-left: 0;
    }
    .catalogue__elements {
        padding-bottom: 40px;
    }
}
@media (max-width: 550px) {
    .breadcrumps__text  {
        font-size: 14px;
    }
}
@media (max-width: 475px) {
    .breadcrumps__text  {
        font-size: 12px;
    }
    .header-wrapper {
        display: block;
    }
    .header-search {
        width: 280px;
        margin: 0 auto;
        border: 1px solid #d3d3d3;
        border-top-left-radius: 7px;
        border-top-right-radius: 7px;
        border-bottom: none;
    }
    .header-search__input {
        font-size: 14px;
        line-height: 16px;
        padding: 5px 5px 5px 12px;
        width: 90%;
    }
    .header-search__button {
        left: 5px;
        width: 18px;
        height: 18px;
        background-size: contain;
    }
    .catalogue__breadcrumps {
        padding: 5px 5px 5px 0px;
    }
    .catalogue__elements {
        padding-bottom: 30px;
    }
}


</style>