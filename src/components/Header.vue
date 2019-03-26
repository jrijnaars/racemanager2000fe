<template>
  <div>
    <h1 class="header">{{headerText}}</h1>
    <nav-bar></nav-bar>
  </div>
</template>

<script>
  import NavBar from "@/components/NavBar";

  export default {
    name: "Header",
    components: {
      NavBar,
    },
    props: ['headerText'],
  }
</script>

<style scoped>

</style>
