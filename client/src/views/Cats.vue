<template>
    <div>
      <h1>Cats for Adoption</h1>
      <PetTable
        species="cats"
        :pets="cats"
      />
    </div>
</template>

<script>
import PetTable from '../components/PetTable.vue'
import CatService from '../CatService'

export default {
  components: {
    PetTable
  },
  data () {
    return {
      cats: []
    }
  },
  async created () {
    try {
      this.cats = await CatService.getCats()
      console.log(this.cats)
    } catch (err) {

    }
  }
}
</script>
