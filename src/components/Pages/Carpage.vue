<template>
  <div>
    <Header v-bind:headerText="headerText"></Header>
    <create-car></create-car>
    <car-list v-bind:cars="cars"></car-list>
  </div>
</template>

<script>
  import CarList from "@/components/CarList";
  import CreateCar from "@/components/CreateCar";
  import {EventBus} from "../../../event-bus";
  import {APIService} from "../../../APIService";
  import Header from "@/components/Header";


  export default {
    name: "Carpage",
    components: {
      CreateCar,
      CarList,
      Header,
    },
    data() {
      return {
        cars: [],
        headerText: "Let's create your own team",
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
  }
</script>

<style scoped>

</style>
