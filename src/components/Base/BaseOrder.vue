<template>
  <div>
    <div class="payments__coupon">
      <div class="coupon__size">
        Скидка 25%
        <span>за</span> 1$
      </div>
      <div class="coupon-name">Суши Япона матрена</div>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
.payments__coupon {
    margin-bottom: 25px;
    font-family: 'Gotham Pro', sans-serif;
}
.coupon__size {
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    color: #2e3d4c;
}
.coupon__size span {
    font-size: 18px;
    color: #cacaca;
}
.coupon-name {
    font-weight: 700;
    font-size: 18px;
    color: #46d149;
}
</style>