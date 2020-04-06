<template>
  <div>
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
      </div>
    </header>
    <Footer />
  </div>
</template>


<script>
import Footer from "@/components/footer";
/*import Slick from 'vue-slick';*/
/*import Vue from 'vue'*/

export default {
  components: {
    Footer
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
header {
  display: flex;
  margin-top: 135px;
}

.right_menu {
  margin-left: 170px;
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
</style>