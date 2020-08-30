<template>
  <div id="app">
    <div id="nav" class="bg-lv2">
      <img src="@/assets/pokeball.svg" class="logo" alt srcset />
      <div class="links">
        <router-link to="/">Home</router-link>
      </div>
      <!-- <router-link to="/search">Search</router-link> -->
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
@import "./style/main.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.logo {
  max-height: 30px;
  max-width: 30px;
}

.links {
  display: flex;
  flex: 1 1 auto;
  justify-content: center;
  line-height: 30px;
}

.logo {
  position: absolute;
}

#nav {
  padding: 16px;
  display: flex;
  position: relative;
  a {
    font-weight: bold;
  }
}
</style>
