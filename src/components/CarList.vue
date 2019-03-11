<template>
  <div>
    <div>
      <h2 class="h2">Drivers</h2>
      <car v-for="car in cars" :key="car.id" v-bind:car="car"></car>
    </div>
  </div>
</template>

<script>

  import Car from "@/components/Car";
  import CreateCar from "@/components/CreateCar";

  export default {
    components: {Car,
    CreateCar},
    props: ['cars'],
    name: "CarList",
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
