<template>
  <div id="app">
    <h1 class="header">Welcome to Race Manager 2000</h1>
    <create-car></create-car>
    <car-list v-bind:cars="cars"></car-list>

  </div>
</template>

<script>
  import {APIService} from '../APIService';


  import CarList from "@/components/CarList";
  import CreateCar from "@/components/CreateCar";
  import {EventBus} from "../event-bus";

  export default {
    name: 'App',
    components: {
      CreateCar,
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
      EventBus.$on('refresh-carlist', this.getAllCars)
    },



  };
</script>

<style>
body {
  background-image: url("./assets/zandvoort.png");
  margin:0 auto;
}

h1 {
color: aliceblue;
  text-align: center;
  }
</style>
