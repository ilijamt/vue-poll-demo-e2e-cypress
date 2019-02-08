<template>
  <md-content class="md-elevation-3">
    <column-chart :data="results"></column-chart>
    <span>Total votes: {{ votes }}</span>
  </md-content>
</template>

<script>

import VueChartkick from 'vue-chartkick'
import Chart from 'chart.js'
import { mapGetters } from 'vuex'

import Vue from 'vue'
import { MdContent } from 'vue-material/dist/components'

Vue.use(MdContent)

Vue.use(VueChartkick, { adapter: Chart })

export default {
  name: 'example',
  computed: {
    ...mapGetters('poll', { votes: 'getVotes', results: 'getResults' })
  }
}
</script>
