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
              <template v-if="items.length !== 0">
                <tr v-for="(item, index) in items" :key="item"  class="d-table-row">
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
              </template>
              <template v-else>
                <tr class="d-table-row-empty">
                  <td colspan="7">
                  {{ 'Nothing to display here...' }}
                  </td>
                </tr>
              </template>
            </tbody>
            <tfoot class="d-table-foot"></tfoot>
        </table>
    </div>
</template>

<script>
export default {
  name: 'DataTable',
  props: {
    fields: {
      type: Array,
      required: true
    },
    items: {
      type: [Array, Object],
      default: () => {
        return []
      }
    }
  },
  setup () {

  }
}
</script>

<style lang="scss">
.d-table {
  text-align: start;

  &-content {
    width: 100%;

    border: {
      spacing: 0;
      collapse: collapse;
      radius: 12px;
      width: 1px;
      style: solid;
      color: gray;
    }
  }

  &-head {
    height: 50px;
    background-color: darken($color: #616161, $amount: 3);
    color: white;

    &:hover {
      background-color: lighten($color: #616161, $amount: 5);
    }
    tr {
      th {
        text-align: start;
        padding: 1rem;
        border: {
          width: 1px;
          style: solid;
          color: gray;
        }
      }
    }
  }

  &-row {
    transition: background-color 0.2s ease-in;
    &-empty {
      text-align: center;
      td {
        height: 100px;
      }
    }

    &:hover {
      background-color: darken($color: #ffffff, $amount: 6);
    }
    td {
      padding: 1rem;
      border: 1px solid gray;
    }
  }

  &-body {
    padding: 0;
  }

  &-foot {
  }
}
</style>
