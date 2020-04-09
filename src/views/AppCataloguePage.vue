<template>
    <div class="catalogue">
        <header-elem></header-elem>
        <main class="main">
            <div class="preloader" :class="{'preloader--active': stateLoader}">
                <loader-elem></loader-elem>
            </div>
        </main>
        <footer-elem></footer-elem>
    </div>
</template>

<script>
import FooterElem from "../components/TheFooter"
import HeaderElem from "../components/TheHeader"
import LoaderElem from '../components/Base/BasePreloader'
import axios from 'axios'
const url = 'http://127.0.0.1:8000/categories'

export default {
    data() {
        return {
            stateLoader: false,
            categories: null
        }
    },
    components: {
        LoaderElem,
        HeaderElem,
        FooterElem
    },
    mounted() {
        axios
        .get(url)
        .then(response => (this.categories = response));
    }
}
</script>

<style lang="scss" scoped>
.catalogue {
    width: 100%;
    padding: 0 15px;
}
.main {
    position: relative;
}
.preloader {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: white;
    display: none;
    &--active {
        display: flex;
    }
}
</style>