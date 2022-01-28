import DataTable from './DataTable.vue'

const plugin = {
  install (Vue) {
    Vue.component('DataTable', DataTable)
  }
}

export default plugin
