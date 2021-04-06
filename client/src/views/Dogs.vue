<template>
    <div>
       <h1>Dogs for Adoption</h1>
      <PetTable
        species="dogs"
        :pets="dogs"
      />
    </div>
</template>

<script>
import PetTable from '../components/PetTable.vue'
import DogService from '../DogService'
export default {
  components: {
    PetTable
  },
  data () {
    return {
      dogs: []
    }
  },
  async created () {
    try {
      this.dogs = await DogService.getDogs()
    } catch (err) {

    }
  }
}
</script>
