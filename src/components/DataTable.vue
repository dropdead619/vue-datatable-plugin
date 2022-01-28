<template>
    <div class="d-table">
        <table class="d-table-content">
            <colgroup >
                <col v-for="field in fields" :key="field.key" :width="field.width" >
            </colgroup>
            <thead class="d-table-head">
                <tr>
                    <th v-for="field in fields" :key="field.key" :class="field.class || field.thClass">{{ field.label }}</th>
                </tr>
            </thead>
            <tbody class="d-table-body">
                <tr v-for="(item, index) in items" :key="item">
                      <td v-for="field in fields" :key="field.key" :class="field.class || field.tdClass">
                        <slot
                        :name="field.key"
                        :item="item"
                        :value="item[field.key]"
                        :index="index"
                        :field="field"
                        >
                        {{ field.key === 'id' ? index + 1 : item[field.key]}}
                        </slot>
                        </td>
                </tr>
            </tbody>
            <tfoot class="d-table-foot"></tfoot>
        </table>
    </div>
</template>

<script>
export default {
  props: {
    fields: {
      type: Array,
      required: true
    },
    items: {
      type: [Array, Object],
      default: () => {
        return {}
      }
    }
  },
  setup () {

  }
}
</script>
