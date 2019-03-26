<template>
  <div>
    <Header v-bind:headerText="headerText"></Header>
    <nav>
      <router-link class="btn btn-primary btn-block" to='/Seasonpage'>
        Let's start a new season
      </router-link>
    </nav>
  </div>
</template>

<script>
  import Header from "@/components/Header";

  export default {
    name: "Start",
    components: {
      Header,
    },
    data() {
      return {
        headerText: "Welcome to Race Manager 2000",
    }
    }
  }
</script>

<style scoped>

</style>
