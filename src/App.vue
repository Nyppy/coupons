<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
    body {
        margin: 0;
    }
    #app {
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin: 0;
    }
</style>
