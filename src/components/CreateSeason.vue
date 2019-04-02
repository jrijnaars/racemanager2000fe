<template>
  <div role="tablist">
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-card-body>
          <b-form @submit="onSubmit">
            <b-input
              id="seasonname"
              type="number"
              v-model="form.seasonName"
              placeholder="Enter Season"/>
            <b-alert show variant="danger" v-show="alreadyCreated">Season is already created</b-alert>
            <b-button type="submit" block variant="info">Create Season</b-button>
          </b-form>
        </b-card-body>
      </b-card-header>
    </b-card>
  </div>
</template>

<script>
  import {APIService} from "../../APIService";
  import {EventBus} from "../../event-bus";

  export default {
    name: "CreateSeason",
    props: ["seasons"],
    data() {
      return {
        form: {
          seasonName: '',
        },
        response: [],
        error: [],
        errorText: {
          status: "Request failed with status code 500"
        },
        alreadyCreated: false,
      };
    },

    methods: {
      onSubmit(evt) {
        this.alreadyCreated = false;
        APIService.createSeason(this.form).then((data) => {
              this.response = data;
              EventBus.$emit("refresh-seasonlist", {});
            }).catch((error) => {
            this.error = error;
            if (this.errorText.status === error.message) {
              this.alreadyCreated = true;
            }
              }
            );
        evt.preventDefault();
      },
    },
  }
</script>

<style scoped>

</style>
