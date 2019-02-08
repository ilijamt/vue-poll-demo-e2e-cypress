<template>
    <md-content class="md-elevation-3">
        <div class="title">
            <span class="md-title">{{ pollName | defaultValue("No title set")}}</span>
            <md-divider/>
        </div>
        <md-list>
            <md-list-item v-for="(poll, idx) in polls" :key="idx">
                <md-radio
                        class="md-list-item"
                        v-model="vote"
                        :value="idx">{{ poll.title }}
                </md-radio>
            </md-list-item>
        </md-list>
        <div class="align-bottom">
            <md-button id="vote-button"
                       class="align-bottom-right md-primary md-raised" :disabled="!isEnabled"
                       @click="actionVote">Vote
            </md-button>
        </div>
    </md-content>
</template>

<style lang="scss">
    .align-bottom-right {
        float: right;
    }

    .title {
        .md-divider {
            margin-top: 10px;
        }
    }

    .md-title {
        -ms-word-wrap: break-word;
        word-wrap: break-word;
    }
</style>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  data: () => ({
    vote: ''
  }),
  methods: {
    actionVote: async function () {
      const id = this.vote
      if (id === '') {
        return
      }
      this.$store.dispatch('poll/vote', id)
      this.vote = ''
    }
  },
  computed: {
    ...mapGetters('poll', { pollName: 'getName' }),
    ...mapState('poll', { polls: (state) => state.polls }),
    isEnabled: function () {
      return this.vote !== '' && this.polls.length > 1
    }
  },
  filters: {
    defaultValue: function (value, def) {
      return value === '' ? def : value
    }
  }

}
</script>
