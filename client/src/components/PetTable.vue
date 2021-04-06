<template>
    <div>
    <b-table :items="pets" outlined>
    </b-table>
    </div>
</template>

<script>
export default {
  props: {
    species: String,
    pets: Array
  }
}
</script>
