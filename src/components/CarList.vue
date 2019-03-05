<template>
  <div>
    <car v-for="car in cars" :key="car.id" v-bind:car="car"></car>
  </div>
</template>

<script>
  import Car from "@/components/Car";

  export default {
    props: ['cars'],
    name: "CarList",
    components: {
      Car,
    },
  };
</script>

<style>

</style>
