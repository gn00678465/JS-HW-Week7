<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
*,
*::before,
*::after {
  box-sizing: border-box;
}

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
