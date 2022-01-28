<template>
<DataTable :fields="fields" :items="items">
  <template v-slot:first_name="slotProps">
    {{ slotProps.field.key + ": " + slotProps.value }}
  </template>
</DataTable>
</template>

<script>
import DataTable from '@/components/DataTable.vue'
export default {
  name: 'App',
  components: {
    DataTable
  },
  setup () {
    const fields = [
      {
        key: 'id',
        label: 'ID',
        width: 10
      },
      {
        key: 'first_name',
        label: 'First Name',
        width: 200
      },
      {
        key: 'last_name',
        label: 'Last Name',
        width: 200
      },
      {
        key: 'age',
        label: 'Age',
        width: 140
      },
      {
        key: 'gender',
        label: 'Gender',
        width: 140
      }
    ]

    const items = [
      {
        first_name: 'Grzegorz',
        last_name: 'Brzęczyszczykiewicz',
        age: 27,
        gender: 'Male'
      },
      {
        first_name: 'Sponge Bob',
        last_name: 'Squarenuts',
        age: 999,
        gender: 'Unknown'
      },
      {
        first_name: 'リリ',
        last_name: '砂藤',
        age: 18,
        gender: 'Female'
      }
    ]

    return { fields, items }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
