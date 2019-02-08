import actions from './actions'

describe('poll.actions', () => {
  let commit = function () { }
  it('should be able to call clear', () => {
    actions.clear({ commit })
  })
  it('should be able to call name', () => {
    actions.name({ commit }, 'test')
  })
  it('should be able to call load', () => {
    actions.load({ commit })
  })
  it('should be able to call vote', () => {
    actions.vote({ commit }, { idx: 0 })
  })
  it('should be able to call add/update/delete options', () => {
    actions.addOption({ commit }, { title: 'title' })
    actions.updateOption({ commit }, { idx: 0, title: 'title2' })
    actions.deleteOption({ commit }, { idx: 0 })
  })
})
