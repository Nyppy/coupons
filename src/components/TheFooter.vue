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

<style lang="scss" scoped>
.footer {
    padding-bottom: 40px;
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
    font-size: 16px;
    font-weight: bold;
    line-height: 30px;
}

.footer nav a:hover {
    color: #44cd48;
}

.date {
    text-decoration: none;
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
}

.payment {
    display: flex;
    align-items: center;
}

.payment img + img {
    margin-left: 40px;
}
/* -- media -- */
@media (max-width: 1040px) {
    .footer {
        margin-top: 25px;
    }
    .footer__inner {
        display: flex;
        justify-content: space-around;
    }
    .footer__nav {
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
    }
    .info {
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-end;
    }
    .link p {
        margin: 0;
    }
    .payment {
        margin: 10px 0;
    }
}
@media (max-width: 700px) {
    .footer__inner {
        justify-content: space-between;
    }
    .footer__nav-link {
        font-size: 14px;
        line-height: 24px;
    }
    .link, .date {
        font-size: 14px;
        line-height: 24px;
    }
    .date {
        order: 1;
    }
    .payment {
        margin-top: 0;
        margin-bottom: 5px;
        img + img {
            margin-left: 15px;
        }
    }
    .footer {
        padding-bottom: 20px;
        margin-top: 20px;
    }
    @media (max-width: 600px) {
        .footer__inner {
            display: block;
        }
        .footer__nav {
            align-items: center;
            margin-bottom: 10px;
        }
        .info {
            align-items: center;
        }
        .payment {
            margin: 10px 0;
        }
    }
}
</style>