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

  </div>
</template>
<script>
  import {APIService} from "../../APIService";
  import {EventBus} from "../../event-bus";

  export default {
    name: "CreateCar",

    data() {
      return {
        form: {
          carname: '',
        },
        submittedForm: {
          carname: "",
        },
        show: true,
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
        this.submittedForm = this.form;
        APIService.createCar(this.submittedForm).then((data) => {
          this.response = data;
          EventBus.$emit("refresh-carlist", {});
          this.alreadyCreated = false;
          this.form = "";
        }).catch((error) => {
          this.error = error;
          if (this.errorText.status === error.message) {
            this.alreadyCreated = true;
          }
        });

        evt.preventDefault();
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
