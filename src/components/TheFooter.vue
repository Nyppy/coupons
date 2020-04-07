<template>
    <div class="footer">
            <div class="footer__inner">
                <nav class="footer__nav">
                    <router-link class="footer__nav-link" to="">О нас</router-link>
                    <router-link class="footer__nav-link" to="">Разместить купон</router-link>
                    <router-link class="footer__nav-link" to="">Партнерская программа</router-link>
                    <router-link class="footer__nav-link" to="">Политика конфиденциальности</router-link>
                    <router-link class="footer__nav-link" to="">Условия использования</router-link>
                </nav>
                <div class="info">
                    <div class="date">
                        &copy;2020 <span>Coupons. </span>Все права защищены.
                    </div>
                    <div class="payment">
                        <img src="~@/assets/img/badges with registration/visa.png" alt="">
                        <img src="~@/assets/img/badges with registration/mastercard.png" alt="">
                        <img src="~@/assets/img/badges with registration/paypal.png" alt="">
                    </div>
                    <div class="link">
                        <p>При поддержке: </p>
                        <a href="https://jscorp.ru/">JS Corp.</a>
                    </div>
                </div>  
            </div>
    </div>
</template>

<script>

</script>

<style scoped>
    .footer {
        padding-bottom: 60px;
        margin-top: 50px;
    }
    .footer__nav {
        display: flex;
        justify-content: space-between;
    }
    .footer__nav-link {
        display: inline-block;
        text-decoration: none;
        color: #2e3d4c;
        font-family: Verdana, Geneva, sans-serif;
        font-size: 16px;
        font-weight: bold;
        line-height: 30px;
    }

    .footer nav a:hover {
        color: #44cd48;
    }

    .date {
        text-decoration: none;
        font-family: Verdana, Geneva, sans-serif;
        font-size: 18px;
        line-height: 30px;
    }
    .date span {
        color: #44cd48;
    }
    .info {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .link {
        display: flex;
        align-items: center;
        font-size: 18px;
        line-height: 30px;
    }

    .link a {
        margin-left: 10px;
        text-decoration: none;
        color: #44cd48;
        font-family: Verdana, Geneva, sans-serif;
    }

    .payment {
        display: flex;
        align-items: center;
    }

    .payment img + img {
        margin-left: 40px;
    }

</style>