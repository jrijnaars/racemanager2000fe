<template>
  <div>
    <b-button block variant="primary" class="button" v-bind:openNewDriver="openNewDriver" v-on:click="openForm">New driver</b-button>
    <div v-show="openNewDriver">toon deze als ik op New driver klik</div>
  </div>
</template>

<script>
  export default {
    name: "CreateCar",

    data() {
      return {
        openNewDriver: false,
      };
    },
    methods: {
      openForm() {
        this.openNewDriver = this.openNewDriver === false;
      }
    }
  }
</script>

<style scoped>
.button {
  width: 98%;
}
</style>
