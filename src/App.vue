<template>
  <div id="app">
    <car-list v-bind:cars="cars"></car-list>
  </div>
</template>

<script>
  import {APIService} from '../APIService';


  import CarList from "@/components/CarList";

  export default {
    name: 'App',
    components: {
      CarList,
    },
    data() {
      return {
        cars: [],
      };
    },
    methods: {

      getAllCars(){
        APIService.getAllCars().then((data) => {
          this.cars = data;
        });
      },
    },

    mounted() {
      this.getAllCars();
    },



  };
</script>

<style>

</style>
