<template>
  <div class="home">
    <h1>Adopt a Pet</h1>

    <button @click="togglePetForm" class="btn btn-primary">Add New Pet</button>

    <b-form @submit.prevent="handleSubmit" v-if="showPetForm">

      <b-form-group id="input-group-2" label="Pet's Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          type="text"
          v-model="formData.name"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Species:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="formData.species"
          :options="['cats', 'dogs']"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-2" label="Pet's Age:" label-for="input-2">
        <b-form-input
          id="input-2"
          type="number"
          v-model="formData.age"
          placeholder="Enter age"
          required
        ></b-form-input>
      </b-form-group>
      <b-button id="btn" type="submit" variant="primary">Submit</b-button>
      <b-button id="btn" type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import CatService from '../CatService'
import DogService from '../DogService'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
      showPetForm: false,
      formData: {
        name: '',
        age: 0,
        species: null
      }
    }
  },
  computed: {
    ...mapGetters([
      'animalsCount',
      'getAllCats'
    ])
  },
  methods: {
    ...mapActions([
      'addPet'
    ]),
    togglePetForm () {
      this.showPetForm = !this.showPetForm
    },

    async handleSubmit () {
      const { species } = this.formData
      console.log(this.formData)
      if (species === 'cats') {
        await CatService.addCat(this.formData)
      } else await DogService.addDog(this.formData)

      /* const payload = {
        species,
        pet: {
          name,
          age
        }
      }
      this.addPet(payload) */

      // reset form submit
      this.formData = {
        name: '',
        age: 0,
        species: null
      }
    }
  }
}
</script>

<style lang="scss">
#btn {
  margin-right: 5px
}
</style>
