<template>
  <b-table striped :data="value">
    <template slot-scope="props">
      <b-table-column label="#" sortable>
        {{ props.row.id }}
      </b-table-column>
      <b-table-column label="Choice text" sortable>
        {{ props.row.text }}
      </b-table-column>

      <b-table-column field="actions" label="Actions">
        <b-button
          type="is-warning"
          icon-left="pencil"
          @click="loadChoice(props.row)"
        >
        </b-button>
        <b-button
          type="is-danger"
          icon-left="trash-can-outline"
          @click="confirmRemove(props.row)"
        >
        </b-button>
      </b-table-column>
    </template>
  </b-table>
</template>

<script>
export default {
  props: {
    value: {
      type: Array,
      required: true
    }
  },
  methods: {
    loadChoice(choice) {
      this.$emit('loadChoice', choice)
    },
    confirmRemove(choice) {
      this.$buefy.dialog.confirm({
        title: 'Delete Choice?',
        message:
          'Are you sure to <b>delete</b> this choice? This action cannot be undone.',
        confirmText: 'Delete',
        cancelText: 'Cancel',
        type: 'is-danger',
        hasIcon: true,
        onConfirm: () => this.$emit('removeChoice', choice)
      })
    }
  }
}
</script>