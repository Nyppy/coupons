<template>
    <header class="header">
        <div class="header__logo">
            <img class="logo" src="../assets/img/coupons_logo.svg" alt="logo">
        </div>
    </header>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.header {
    text-align: left;
    padding: 20px 0;
}
.logo {
    width: 280px;
    height: 65px;
}
@media (max-width:600px) {
    .header {
        padding: 10px 0;
    }
    .logo {
        width: 200px;
        height: 55px;
    }
}
</style>