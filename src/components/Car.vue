<template>
  <div class='ui centered card'>
    <div class='content'>
      <div class='header'>
        Driver: {{ car.name }}
      </div>
      <div class='meta'>
        chassis: {{ car.chassis }}
      </div>
      <div class='meta'>
        engine: {{ car.engine }}
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    props: ['car'],

  };
</script>

<style>
.ui.centered.card {
  margin-top: 10px;
}
</style>
