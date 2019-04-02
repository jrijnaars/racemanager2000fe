<template>
  <div role="tablist">
    <b-card no-body class="mb-1" v-show="!season.seasonFinished">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block href="#" v-b-toggle=season.id.toString() variant="info">{{season.seasonname}}</b-button>
      </b-card-header>
    </b-card>
    <b-card no-body class="mb-1" v-show="season.seasonFinished">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block href="#" v-b-toggle=season.id.toString() variant="disabled">{{season.seasonname}}</b-button>
      </b-card-header>
    </b-card>
  </div>
</template>

<script type="text/javascript">
  export default {
    props: ['season'],
  };
</script>

<style>
</style>
