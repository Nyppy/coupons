<template>
  <div>

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
  </div>
</template>

<script>

import FooterElem from "@/components/TheFooter";
/*import Slick from 'vue-slick';*/
/*import Vue from 'vue'*/

export default {
  components: {

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
}*/
</script>


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
  max-width: 1230px;
  padding: 0 15px;
  margin: 0 auto;
}


header {
  display: flex;
  margin-top: 100px;
}

.right_menu {
flex-basis: 50%;
margin-left: 40px;
}

.text {
  padding-top: 40px;
  color: #2e3d4c;
  font-size: 16px;
  font-weight: bold;
  line-height: 18px;
  opacity: 0.8;
}

.Left_menu {
  flex-basis: 50%;
  padding-right: 70px;
  border-right: 1px solid #dadada;
}

.logo {

  text-align: left;
}

.logo img {
  max-width: 450px;
  width: 100%;
  height: auto;
}

.sorting {
  margin-top: 40px;
  text-align: left;
}

.sorting p {
  color: #2e3d4c;
  font-size: 24px;
  font-weight: bold;
  line-height: 30px;
}

.country {
  width: 100%;
  color: #817e7e;
  font-size: 18px;
  font-weight: 600px;
  line-height: 30px;
  border: 0;
  margin-left: 15px;
  outline: none;
}

.form_info {
  display: flex;
  max-width: 470px;
  width: 100%;
  padding-bottom: 17px;
  margin-bottom: 15px;
  border-bottom: 1.5px solid #dadada;
}

.Button {
  width: 221px;
  font-size: 16px;
  color: #fff;
  font-weight: 900;
  padding: 10px 15px;
  border: none;
  border-radius: 6px;
  background: linear-gradient( -13deg, rgb(64,196,67) 0%, rgb(85,242,89) 100%);
  transition: all .8s;
}

.Button:hover {
  background: linear-gradient( -13deg, rgb(85,242,89) 0%, rgb(64,196,67) 100%);
}

@media screen and (max-width: 720px) {
  header {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
  }
  .right_menu {
    margin-top: 40px;
  }
  .Left_menu {
  border-right: none;
  }
  .form_info {
    display: flex;
    max-width: 470px;
    width: 100%;
  }


}

/* @media (max-width: 1040px) {
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
    /* }
  } */
/* @media (max-width: 630px) {
    .payments__info-inner {
        padding-right: 0;
    }
  }
@media (max-width: 630px) {
    .payments__info-title {
        margin-top: 15px;
    }
} */
</style>
