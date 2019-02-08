import { load } from './persist'

export default {
  clear: ({ commit }) => commit('clear'),
  vote: ({ commit }, id) => commit('vote', id),
  name: ({ commit }, name) => commit('name', name),
  updateOption: ({ commit }, { idx, title }) => commit('updateOption', { idx, title }),
  deleteOption: ({ commit }, { idx }) => commit('deleteOption', idx),
  addOption: ({ commit }, { title }) => commit('addOption', title),
  load: ({ commit }) => {
    commit('set', load())
  }
}
