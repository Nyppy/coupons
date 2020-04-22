<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
  html {
        box-sizing: border-box;
      }
      *, *::after, *::before {
        box-sizing: inherit;
      }
      body {
          margin: 0;
          height: 100%;
      }
      #app {
          font-family: 'Montserrat', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-align: center;
          color: #2c3e50;
          margin: 0;
          height: 100%;
          user-select: none;
      }
</style>
