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
                                    @click="allCoupons({'category': item})">
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
                </aside>  
                <main class="catalogue__elements">
                    <div class="catalogue__breadcrumps">
                        <ul class="breadcrumps">
                            <li class="breadcrumps__item">
                                <router-link class="breadcrumps__link" to="/">
                                    <span>Купоны /</span>
                                </router-link>
                            </li>
                            <li class="breadcrumps__item">
                                <router-link class="breadcrumps__link" to="/">
                                    <span>Категории /</span>
                                </router-link>
                            </li>
                            <li class="breadcrumps__item" @click.capture="disableLink($event)">
                                <router-link class="breadcrumps__link" to="/">
                                    <span class="breadcrumps__link breadcrumps__link--active">{{getCurrentCategory.name}} </span>
                                    <span class="breadcrumps__item-counter">({{currentCategoryCountMessage}})</span>
                                </router-link>
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
        <div class="footer__wrapper">
            <footer-elem></footer-elem>
        </div>
    </div>
</template>

<script>
import FooterElem from "../components/TheFooter"
import HeaderElem from "../components/TheHeader"
import LoaderElem from '../components/Base/BasePreloader'
import BaseCoupons from '../components/Base/BaseCoupons'
import { mapActions, mapGetters } from 'vuex'

export default {
    data() {
        return {
            
        }
    },
    components: {
        LoaderElem,
        HeaderElem,
        FooterElem,
        BaseCoupons
    },
    computed: {
        ...mapGetters([
            'getCategories',
            'getCouponsList',
            'getCurrentCategory',
            'getLockStateCoupons',
            'getLockStateCategories'
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
        disableLink(e) {
            e.preventDefault();
        }
    },
    async mounted() {
        await this.allCategories();
        this.allCoupons({'category': this.getCategories[0] });
        
    }
}
</script>

<style lang="scss" scoped>
.catalogue {
    width: 100%;  
    min-height: 100%;
    display: flex;
    flex-direction: column;
    max-width: 1980px;
    margin: 0 auto;
}
.header-wrapper {
    display: flex;
    align-items: center;
    padding: 0 20px;
    border-bottom: 1px solid #d3d3d3;
    flex: 0 0 auto;
}
.footer__wrapper {
    padding: 0 20px;
    flex: 0 0 auto;
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
    min-height: 75vh;
    flex: 1 0 auto;
}
.catalogue-wrapper {
    display: flex;
    padding: 0 20px;
    height: 100%;
}
.catalogue-filter {
    flex: 0 0 19%;
    padding-top: 5px;
    padding-right: 15px;
    width: 19%;
    min-width: 290px;
    height: 100%;
    border-right: 1px solid #ebebeb;
    color: #2e3d4c;
    text-align: left;
    background-image: url(../assets/img/img-footer7.png);
    background-repeat: no-repeat;
    background-position: center bottom;
    background-size: contain;
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
.catalogue-filter__list {
    margin-bottom: 420px;
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
.catalogue__breadcrumps {
    padding-top: 20px;
    padding-left: 25px;
}
.breadcrumps {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin: 0;
    padding: 0;
    &__item {
        display: block;
        & + .breadcrumps__item {
            margin-left: 5px;
        }
    }
    &__link {
        font-size: 16px;
        font-weight: 600;
        color: #acacac;
        text-decoration: none;
        &--active {
            color: #2e3d4c;
        }
    }
}
.catalogue__elements {
    width: 100%;
}
.catalogue-coupons {
    width: 100%;
    height: 100%;
    padding-left: 30px;
    padding-top: 20px;
}
</style>