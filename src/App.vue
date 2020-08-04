<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
// reboot
*,
*::before,
*::after {
  box-sizing: border-box;
}
h1{
  margin: 0;
}
ul{
  margin: 0;
  padding: 0;
  list-style: none;
}
a{
  text-decoration: none;
}

// body
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
}

#app {
  width: 100%;
  height: 100%;
}

</style>
