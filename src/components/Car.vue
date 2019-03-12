<template>
  <div role="tablist">
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block href="#" v-b-toggle="car.id" variant="info">{{car.name}}</b-button>
      </b-card-header>
      <b-collapse :id="car.id" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <p class="card-text">engine: {{car.engine}} chassis: {{car.chassis}} </p>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>

<script type="text/javascript">
  export default {
    props: ['car'],

  };
</script>

<style>
</style>
