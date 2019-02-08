<template>
  <div class="poll-option">
    <md-field>
      <md-input :value="title" @input="changed" maxlength=80></md-input>
      <md-icon class="btn-delete" v-on:click.native="remove">delete</md-icon>
    </md-field>
  </div>
</template>

<style lang="scss">
  .btn-delete {
    &:hover {
      cursor: pointer;
    }
  }
</style>

<script>
export default {
  props: ['idx', 'title'],
  methods: {
    changed: function (event) {
      this.$emit('poll-option-change', this.idx, event)
    },
    remove: function () {
      this.$emit('poll-option-remove', this.idx)
    }
  }
}
</script>
