<template>
  <div>
    <Header v-bind:headerText="headerText"></Header>
  </div>
</template>

<script>
  import Header from "@/components/Header";

  export default {
    name: "Seasonpage",
    components: {
      Header,
    },
    data() {
      return {
        headerText: "Create a new season",
      }
    }
  }
</script>

<style scoped>

</style>
