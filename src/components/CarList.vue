<template>
  <div>
    <div>
      <h2>Drivers</h2>
      <car v-for="car in cars" :key="car.id" v-bind:car="car"></car>
    </div>
  </div>
</template>

<script>

  import Car from "@/components/Car";

  export default {
    name: "CarList",
    components: {
      Car,
    },
    props: ['cars'],
  }
</script>

<style>
  h2 {
    width: 100%;
    color: aliceblue;
    text-align: center;
    margin: 10px 10px 10px 10px;
  }

  button {
    margin-left: 10px;
  }
</style>
