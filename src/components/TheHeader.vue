<template>
    <header class="header">
        <div class="header__logo">
            <router-link to='/'>
                <img class="logo" src="../assets/img/coupons_logo.svg" alt="logo">
            </router-link>
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
    padding: 15px 0;
}
.logo {
    width: 240px;
    height: auto;
}
@media (max-width:600px) {
    .header {
        padding: 10px 0;
    }
    .logo {
        width: 180px;
    }
}
</style>