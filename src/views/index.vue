<template>
  <div>
<<<<<<< HEAD
    <header>
      <div class="Left_menu">
        <div class="logo">
          <img src="~@/assets/img/coupons_logo.svg" alt="#" />
        </div>
        <div class="sorting">
          <p>Сортировка</p>
          <form action>
            <div class="form_info">
              <img src="~@/assets/img/badges with registration/language.png" alt />
              <select name="country" class="country">
                <option>Выберите язык</option>
                <option value="Россия">Россия</option>
                <option value="Украина">Украина</option>
                <option value="Беларусь">Беларусь</option>
              </select>
            </div>
            <div class="form_info">
              <img src="~@/assets/img/badges with registration/world.png" alt />
              <select name="country" class="country">
                <option>Выберите страну</option>
                <option value="Россия">Россия</option>
                <option value="Украина">Украина</option>
                <option value="Беларусь">Беларусь</option>
              </select>
            </div>
            <div class="form_info">
              <img src="~@/assets/img/badges with registration/urban.png" alt />
              <select name="country" class="country">
                <option>Выберите город</option>
                <option value="Россия">Россия</option>
                <option value="Украина">Украина</option>
                <option value="Беларусь">Беларусь</option>
              </select>
            </div>
          </form>
          <button class="Button">Посмотреть купоны</button>
        </div>
      </div>
      <div class="right_menu">
        <slick
          ref="slick"
          :options="slickOptions"
          @afterChange="handleAfterChange"
          @beforeChange="handleBeforeChange"
          @breakpoint="handleBreakpoint"
          @destroy="handleDestroy"
          @edge="handleEdge"
          @init="handleInit"
          @reInit="handleReInit"
          @setPosition="handleSetPosition"
          @swipe="handleSwipe"
          @lazyLoaded="handleLazyLoaded"
          @lazyLoadError="handleLazeLoadError">
            <div class="slid1">
              <img src="~@/assets/img/img-footer6.png" alt />
              <div class="text">
                <p>Лучшие скидки во время
                <br />вашего путешествия.<p/>
              </div>
            </div>
            <div class="slid2">
              <img src="~@/assets/img/img-footer4.png" alt />
              <div class="text">
                <p>Экстримальные ощущения
                <br />или тихий отдых.</p>
              </div>
            </div>
            <div class="slid3">
              <img src="~@/assets/img/img-footer5.png" alt />
              <div class="text">
                <p>Получите максимум эмоций
                <br />от отдыха с нашими купонами.</p>
              </div>
            </div>
        </slick>
      </div>
    </header>
    <Footer />
=======
    <div class="container">
      <header>
        <div class="Left_menu">
          <div class="logo">
            <img src="~@/assets/img/coupons_logo.svg" alt="#" />
          </div>
          <div class="sorting">
            <p>{{ $t('sorted') }}</p>
            <form action>
              <div class="form_info">
                <img src="~@/assets/img/badges with registration/language.png" alt />
                <select v-model="$i18n.locale" name="country" class="country">
                    <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">{{ $t(lang) }}</option>
                </select>
              </div>
              <div class="form_info">
                <img src="~@/assets/img/badges with registration/world.png" alt />
                <select name="country" class="country">
                  <option>{{ $t('select_a_country') }}</option>
                  <option value="Россия">Россия</option>
                  <option value="Украина">Украина</option>
                  <option value="Беларусь">Беларусь</option>
                </select>
              </div>
              <div class="form_info">
                <img src="~@/assets/img/badges with registration/urban.png" alt />
                <select name="country" class="country">
                  <option>{{ $t('select_a_country') }}</option>
                  <option value="Россия">Россия</option>
                  <option value="Украина">Украина</option>
                  <option value="Беларусь">Беларусь</option>
                </select>
              </div>
            </form>
            <button class="Button">{{ $t('view_coupons') }}</button>
          </div>
        </div>
        <div class="right_menu">
          <div class="slid1">
            <img src="~@/assets/img/img-footer6.png" alt />
            <div class="text">
              <p>{{ $t('text_the_best.text1') }}
              <br />{{ $t('text_the_best.text2') }}.<p/>
            </div>
          </div>
          <!-- <div class="slid2">
            <img src="~@/assets/img/img-footer4.png" alt />
            <div class="text">
              <p>Экстримальные ощущения
              <br />или тихий отдых.</p>
            </div>
          </div>
          <div class="slid3">
            <img src="~@/assets/img/img-footer5.png" alt />
            <div class="text">
              <p>Получите максимум эмоций
              <br />от отдыха с нашими купонами.</p>
            </div>
          </div> -->
        </div> 
      </header>
    </div>
    <div class="footer__wrapper">
        <div class="container">
            <footer-elem 
              :local="$i18n.locale"
            ></footer-elem>
        </div>
    </div>
>>>>>>> test_translate
  </div>
</template>

<script>
<<<<<<< HEAD
import Footer from "@/components/TheFooter";
import Slick from 'vue-slick';
import 'slick-carousel/slick/slick.css'
=======
import FooterElem from "@/components/TheFooter";
/*import Slick from 'vue-slick';*/
>>>>>>> test_translate
/*import Vue from 'vue'*/

export default {
  components: {
<<<<<<< HEAD
    Footer,
    Slick
  },
  data() {
=======
    FooterElem
  },
  data () {
    return { 
      langs: ['ru', 'en'],
    }
  },
};
 /*
new Vue ({
 
    components: { Slick },
 
    data() {
>>>>>>> test_translate
        return {
            slickOptions: {
                slidesToShow: 1,
                // Any other options that can be got from plugin documentation
            },
        };
    },
  methods: {
        next() {
            this.$refs.slick.next();
        },

        prev() {
            this.$refs.slick.prev();
        },

        reInit() {
            // Helpful if you have to deal with v-for to update dynamic lists
            this.$nextTick(() => {
                this.$refs.slick.reSlick();
            });
        },

        
    }
}
</script>

<<<<<<< HEAD
<style  scoped>
/* @import '../../node_modules/slick-carousel/slick/slick.css'; */
=======
<i18n>
  { 
    "ru": {
      "ru": "Русский",
      "en": "English",
      "sorted": "Сортировка",
      "view_coupons": "Посмотреть купоны",
      "text_the_best": {
        "text1": "Лучшие скидки во время",
        "text2": "вашего путешествия"
      },
      "select_a_country": "Выберите страну",
      "menu": {
        "about_us": "О нас",
        "place_coupon": "Разместить купон",
        "affiliate_program": "Партнерская программа",
        "privacy_policy": "Политика конфиденциальности",
        "terms_of_use": "Условия использования"
      }
    },
    "en": {
      "en": "English",
      "ru": "Russian",
      "sorted": "Sorting",
      "view_coupons": "View coupons",
      "text_the_best": {
        "text1": "Best discounts during",
        "text2": "your trip"
      },
      "select_a_country": "Select a country",
      "menu": {
        "about_us": "About us",
        "place_coupon": "Place coupon",
        "affiliate_program": "Affiliate program",
        "privacy_policy": "Privacy policy",
        "terms_of_use": "Terms_of_use"
      }
    }
  }
</i18n>


<style scoped>
.container {
  min-width: 1230px;
  padding: 0 15px;
  margin: 0 auto;
}
>>>>>>> test_translate

header {
  display: flex;
  margin-top: 135px;
}

.right_menu {
  margin-left: 170px;
  max-width: 335px;
}

/* .slid2 {
  display: none;
}

.slid3 {
  display: none;
} */

.text {
  padding-top: 40px;
  color: #2e3d4c;
  font-size: 16px;
  font-weight: bold;
  line-height: 18px;
  opacity: 0.8;
}

.Left_menu {
  width: 550px;
  padding-right: 70px;
  border-right: 1px solid #dadada;
}

.logo {
  width: 450px;
  height: 100px;
  margin-left: 70px;
}

.sorting {
  margin-top: 40px;
  width: 450px;
  text-align: left;
  margin-left: 70px;
}

.sorting p {
  color: #2e3d4c;
  font-family: Verdana, Geneva, sans-serif;
  font-size: 24px;
  font-weight: bold;
  line-height: 30px;
}

.country {
  width: 470px;
  color: #817e7e;
  font-family: "Gotham Pro";
  font-size: 18px;
  font-weight: bold;
  line-height: 30px;
  border: 0;
  margin-left: 15px;
  outline: none;
}

.form_info {
  display: flex;
  width: 470px;
  padding-bottom: 17px;
  margin-bottom: 15px;
  border-bottom: 1.5px solid #dadada;
}

.Button {
  margin-top: 15px;
  padding: 5px 27px;
  border-radius: 6px;
  background-color: #44cd48;
  color: white;
  font-family: "Gotham Pro";
  font-size: 16px;
  font-weight: bold;
  line-height: 30px;
  border: 0;
}

@media (max-width: 1040px) {
    .main {
        padding: 10px 0;
    }
} 
@media (max-width: 1040px) {
    .payments__inner {
        min-height: 440px;
    }
}
@media (max-width: 900px) {
    .payments__info-inner {
        padding-right: 15px;
    }
  }
@media (max-width: 900px) {
    .payments__info-list {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
  }
@media (max-width: 900px) {
    .payments__info-img {
        width: 80%;
        height: auto;
    }
  }
@media (max-width: 900px) {
    .payments__info-link + .payments__info-link {
        margin-left: 0;
    }
  }
  @media (max-width: 900px) {
    .payments__info-title {
        font-size: 20px;
        line-height: 36px;
        margin-top: 5px;
    }
  }
  @media (max-width: 900px) {
    .payments__rightside-img {
        width: 80%;
        height: auto;
    }
}
@media (max-width: 700px) {
    .payments__inner {
        min-height: 380px;
    }
}
@media (max-width: 630px) {
    .payments__inner {
        display: block;
        min-height: auto;
    }
  }
@media (max-width: 630px) {
    .payments__info {
        text-align: center;
        justify-content: center;
        margin-bottom: 20px;
        /* &::after {
            display: none;
        } */
    }
  }
@media (max-width: 630px) {
    .payments__info-inner {
        padding-right: 0;
    }
  }
@media (max-width: 630px) {
    .payments__info-title {
        margin-top: 15px;
    }
}
</style>