<template>
  <div class="payments__coupon">
    <div class="coupon__size">
      Скидка 25%
      <span>за</span> 1$
    </div>
    <div class="coupon-name">Суши Япона матрена</div>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>

.coupon__size {
    font-weight: 700;
    font-size: 24px;
    line-height: 26px;
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
@media (max-width: 900px) {
  .coupon__size {
      font-size: 20px;
  }
  .coupon__size span {
      font-size: 16px;
  }
  .coupon-name {
      font-size: 16px;
  }
}
</style>