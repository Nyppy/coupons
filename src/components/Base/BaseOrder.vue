<template>
  <div class="payments__coupon">
    <div class="coupon__size">
      Скидка {{getCurrentCoupon.price_sale}}
      <span>за</span> {{getCurrentCoupon.price_service == 0 ? "Free" : getCurrentCoupon.price_service}}
    </div>
    <div class="coupon-name">{{getCurrentCoupon.name}}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters([
            'getCurrentCoupon',
        ])
    }
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