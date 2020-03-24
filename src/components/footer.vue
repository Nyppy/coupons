<template>
    <div class="Footer">
            <nav>
                <a href="">О нас</a>
                <a href="">Разместить купон</a>
                <a href="">Партнерская программа</a>
                <a href="">Политика конфиденциальности</a>
                <a href="">Условия использования</a>
            </nav>
            <div class="Info">
                <div class="Date">
                    <p  class="Year">©2020</p>
                    <p class="Coupons">Coupons.</p>
                    <p>Все права защищены.</p>
                </div>
                <div class="Payment">
                    <img src="~@/assets/img/badges with registration/visa.png" alt="">
                    <img src="~@/assets/img/badges with registration/mastercard.png" alt="">
                    <img src="~@/assets/img/badges with registration/paypal.png" alt="">
                </div>
                <div class="Link">
                    <p>При поддержке:</p>
                    <a href="https://jscorp.ru/">JS Corp.</a>
                </div>
            </div>    
    </div>
</template>


<script>
    
</script>

<style scoped>
    .Footer nav {
        height: 30px;
        text-align: center;
        margin-top: 50px;
    }

    .Footer nav a {
        margin-left: 70px;
        text-decoration: none;
        color: #2e3d4c;
        font-family: Verdana, Geneva, sans-serif;
        font-size: 14px;
        font-weight: bold;
        line-height: 30px;
    }

    .Footer nav a:hover {
        color: #44cd48;
    }

    .Date {
        margin-right: 0 auto;
        width: 350px;
        display: flex;
        margin-left: 70px;
    }

    .Coupons {
        color: #44cd48;
    }

    .Date p{
        margin-right: 5px;
        text-decoration: none;
        font-family: Verdana, Geneva, sans-serif;
        font-size: 16px;
        line-height: 30px;
    }
    
    .Info {
        display: flex;
    }

    .Payment {
        width: 350px;
        margin-left:40px;
        margin-right: 130px;
    }

    .Link {
        display: flex;
        align-items: center;
    }

    .Link a {
        margin-left: 5px;
        text-decoration: none;
        color: #44cd48;
    }

    .Payment {
        display: flex;
        align-items: center;
    }

    .Payment img {
        padding-left: 40px;
    }

</style>