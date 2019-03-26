<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import CarList from "@/components/CarList";
  import CreateCar from "@/components/CreateCar";
  import NavBar from "@/components/NavBar";

  export default {
    name: 'App',
    components: {
      NavBar,
      CreateCar,
      CarList,
    },
  };
</script>

<style>
body {
  background-image: url("./assets/zandvoort.png");
  margin:0 auto;
  height: 100%;
}

h1 {
color: aliceblue;
  text-align: center;
  }
</style>
