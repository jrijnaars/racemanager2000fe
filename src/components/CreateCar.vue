<template>
  <div role="tablist">

    <b-card no-body class="mb-1" v-if="show">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block href="#" v-b-toggle.accordion variant="info">Create new Driver</b-button>
      </b-card-header>
      <b-collapse id="accordion" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-form @submit="onSubmit" @reset="onReset">
            <b-form-group id="exampleInputGroup2" label="Your Name:" label-for="exampleInput2">
              <b-form-input
                id="exampleInput2"
                type="text"
                v-model="form.carname"
                required
                placeholder="Enter name"/>
              <b-alert show variant="danger" v-show="alreadyCreated">Driver is already created</b-alert>
            </b-form-group>
            <b-button type="submit" variant="primary">Create</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
          </b-form>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1" v-show="showResponse">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block href="#" v-b-toggle.newDriver variant="info">newly created driver: {{response.name}}</b-button>
      </b-card-header>
      <b-collapse id="newDriver" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <p class="card-text">engine: {{response.engine}} chassis: {{response.chassis}} </p>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>

<script>
  import {APIService} from "../../APIService";

  export default {
    name: "CreateCar",

    data() {
      return {
        form: {
          carname: '',
        },
        show: true,
        response: [],
        showResponse: false,
        error: [],
        errorText: {
          status: "Request failed with status code 500"
        },
        alreadyCreated: false,
      };
    },

    methods: {
      onSubmit(evt) {
        evt.preventDefault();

        APIService.createCar(this.form).then((data) => {
          this.response = data;
          this.showResponse = true;
        }).catch((error) => {
          this.error = error;
          if (this.errorText.status === error.message) {
            this.alreadyCreated = true;
          }
        });
      },

      onReset(evt) {
        evt.preventDefault();
        /* Reset our form values */
        this.form.carname = '';
        this.alreadyCreated = false;
        /* Trick to reset/clear native browser form validation state */
        this.show = false;
        this.$nextTick(() => {
          this.show = true;
        })
      },
    }
  }
</script>

<style>

</style>
