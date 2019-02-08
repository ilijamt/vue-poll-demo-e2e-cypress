<template>
    <md-content class="md-elevation-3">
        <md-field>
            <label>Poll name</label>
            <md-input id="poll-name" maxlength=80 :value="poll.name" @input="setPollName"></md-input>
        </md-field>

        <PollOptionRemove v-for="(p, idx) in poll.polls"
                          :key="idx" :idx="idx" :title="p.title"
                          @poll-option-change="updateOption"
                          @poll-option-remove="deleteOption"/>

        <PollOptionAdd id="poll-option-add-panel" @poll-option-add="addOption" v-if="poll.polls.length < 10"/>

        <div class="space-top align-bottom">
            <span class="info-answers">{{ poll.polls.length }} / 10 possible answers</span>
            <md-button id="reset-button" class="align-bottom-right md-primary md-raised" @click="reset">Reset</md-button>
        </div>
    </md-content>
</template>

<style lang="scss">
    .space-top {
        margin-bottom: -7px;
        display: block;
        clear: both;
    }

    .info-answers {
        margin-top: 10px;
        display: inline-flex;
        padding-top: 5px;
    }
</style>

<script>
import { mapActions, mapState } from 'vuex'
import PollOptionRemove from './PollOptionRemove'
import PollOptionAdd from './PollOptionAdd'

export default {
  components: { PollOptionAdd, PollOptionRemove },
  computed: {
    ...mapState('poll', { poll: (state) => state })
  },
  methods: {
    ...mapActions('poll', { setPollName: 'name' }),
    deleteOption: function (idx) {
      this.$store.dispatch('poll/deleteOption', { idx })
    },
    updateOption: function (idx, title) {
      this.$store.dispatch('poll/updateOption', { idx, title })
    },
    addOption: function (title) {
      this.$store.dispatch('poll/addOption', { title })
    },
    reset: function () {
      this.$store.dispatch('poll/clear', {})
    }
  }
}
</script>
