<template>
  <div>
    <div>
      <h2 class="h2">Drivers</h2>
      <car v-for="car in cars" :key="car.id" v-bind:car="car"></car>
    </div>
    <b-button class="button">New driver</b-button>
  </div>
</template>

<script>

  import Car from "@/components/Car";

  export default {
    components: {Car},
    props: ['cars'],
    name: "CarList",
  }
</script>

<style>
h2 {
  width: 100%;
  padding: 20px;
  color: #212529;
  background-color: #ECECEC;
  text-align: center;
}

button {
  margin-left: 10px;
  }
</style>
