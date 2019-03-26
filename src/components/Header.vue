<template>
  <div>
    <h1>{{headerText}}</h1>
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

<style>
  h1 {
    width: 100%;
    color: aliceblue;
    text-align: center;
    margin: 10px 10px 10px 10px;
  }
</style>
