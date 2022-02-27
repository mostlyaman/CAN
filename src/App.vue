<script>
export default {
  data(){
    return{
      username: "",

    }
  }
}
</script>

<template>
<w-app>
  <header>
    <div class="info-dark3--bg white w-flex row justify-space-between">
      <div class = "align-self-center ml3">
        <router-link :to = '{name: "User"}'>
          <p style = "font-family: Pacifico; font-size:larger;" class = "white">
            Content Aggregation Network
          </p>
        </router-link>
      </div>
      <div class = "pr5 ma4">
        <router-link :to = '{name: "About"}'><p class = "white">About</p></router-link>
      </div>
    </div>
  </header>
  <main :key = "$route.path">

    <router-view></router-view>
  </main>
</w-app>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Vollkorn&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');

#app {
  font-family: Poppins, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
