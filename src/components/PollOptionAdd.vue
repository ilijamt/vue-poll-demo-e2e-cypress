<template>
  <div>
    <md-field>
      <label>New option</label>
      <md-input id="poll-add-option" maxlength=80 v-model="title" @keyup.enter.native="onEnter"></md-input>
      <md-icon class="btn-add" v-on:click.native="add">add_circle_outline</md-icon>
    </md-field>
  </div>
</template>

<style lang="scss">
  .btn-add {
    &:hover {
      cursor: pointer;
    }
  }
</style>

<script>
export default {
  data: () => ({ title: '' }),
  methods: {
    onEnter: function () {
      if (this.title === '') {
        return
      }
      this.add(this.title)
    },
    add: function () {
      if (this.title === '') {
        return
      }
      this.$emit('poll-option-add', this.title)
      this.title = ''
    }
  }
}
</script>
