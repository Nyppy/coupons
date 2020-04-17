<template>
  <div class="start-page">
    <div class="start-page__wrapper">
      <div class="container">
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
            <div class="slid1">
              <img src="~@/assets/img/img-footer6.png" alt />
              <div class="text">
                <p>Лучшие скидки во время
                <br />вашего путешествия.<p/>
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
    </div>
    <div class="footer__wrapper">
        <div class="container">
            <footer-elem></footer-elem>
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
  }
};
 /*
new Vue ({
 
    components: { Slick },
 
    data() {
        return {
            slickOptions: {
                slidesToShow: 3,
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
            this.$nextTick(() => {
                this.$refs.slick.reSlick();
            });
        },
    },
}); */
</script>

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