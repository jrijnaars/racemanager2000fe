<template>
  <div>
    <Header v-bind:headerText="headerText"></Header>
    <create-season v-bind:seasons="seasons"></create-season>
    <season v-for="season in seasons" :key="season.id" v-bind:season="season"></season>
  </div>
</template>

<script>
  import Header from "@/components/Header";
  import CreateSeason from "@/components/CreateSeason";
  import {EventBus} from "../../../event-bus";
  import {APIService} from "../../../APIService";
  import Season from "@/components/Season";

  export default {
    name: "Seasonpage",
    components: {
      Season,
      CreateSeason,
      Header,
    },
    data() {
      return {
        headerText: "Create a new season",
        seasons: [],
      }
    },
    methods: {

      getAlSeasons(){
        APIService.getAllSeasons().then((data) => {
          this.seasons = data;
        });
      },
    },

    mounted() {
      this.getAlSeasons();
      EventBus.$on('refresh-seasonlist', this.getAlSeasons);
    },
  }
</script>

<style scoped>

</style>
