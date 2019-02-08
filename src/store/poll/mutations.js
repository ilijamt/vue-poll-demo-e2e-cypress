import { store } from './persist'

export default {
  clear (state) {
    state.votes = 0
    state.name = ''
    state.polls = []
    store(state)
  },
  set (state, data) {
    data = data || {}
    state.votes = data.votes || 0
    state.name = data.name || ''
    state.polls = data.polls || []
  },
  vote (state, idx) {
    if (!state.polls[idx]) {
      return
    }
    state.polls[idx].votes++
    state.votes++
    store(state)
  },
  name (state, name) {
    state.name = name
    store(state)
  },
  updateOption (state, { idx, title }) {
    state.polls[idx].title = title
    store(state)
  },
  deleteOption (state, idx) {
    state.polls.splice(idx, 1)
    store(state)
  },
  addOption (state, title) {
    let idx = state.polls.findIndex(function (poll) {
      if (poll.title === title) {
        return true
      }
      return false
    })

    if (idx > -1) {
      return // nothing to do we already have it
    }
    state.polls.push({
      title: title,
      votes: 0
    })
    store(state)
  }
}
