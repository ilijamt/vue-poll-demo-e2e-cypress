import mutations from './mutations'
import { expect } from 'chai'

describe('poll.mutations', () => {
  let state = {}

  beforeEach(() => {
    state = {
      votes: 0,
      name: '',
      polls: []
    }
  })

  it('should not be able to set duplicates', () => {
    mutations.set(state, { votes: 0, name: 'test', polls: [] })
    expect(state.votes).eq(0)
    expect(state.name).eq('test')
    mutations.addOption(state, 'title')
    expect(state.polls).to.be.an('array').eql([{ title: 'title', votes: 0 }])
    mutations.addOption(state, 'title')
    expect(state.polls).to.be.an('array').eql([{ title: 'title', votes: 0 }])
  })

  it('should be able to set and clear state', () => {
    mutations.set(state, { votes: 1, name: 'test', polls: [{ title: 'test', votes: 0 }] })
    expect(state.votes).eq(1)
    expect(state.name).eq('test')
    expect(state.polls).to.be.an('array').eql([{ title: 'test', votes: 0 }])
    mutations.clear(state)
    expect(state.votes).to.be.eq(0)
    expect(state.name).to.be.eq('')
    expect(state.polls).to.be.an('array').eql([])
  })

  it('should be able to vote', () => {
    const idx = 0
    mutations.set(state, { votes: 0, name: 'test', polls: [{ title: 'test', votes: 0 }] })
    mutations.vote(state, idx)
    expect(state.votes).to.be.eq(1)
    expect(state.polls[idx].votes).to.be.eq(1)
    mutations.vote(state, idx)
    expect(state.votes).to.be.eq(2)
    expect(state.polls[idx].votes).to.be.eq(2)
  })

  it('should be able to update the name of the poll', () => {
    mutations.set(state, { votes: 0, name: 'test', polls: [] })
    expect(state.name).to.be.eq('test')
    mutations.name(state, 'title')
    expect(state.name).to.be.eq('title')
  })

  it('should be able to update the polls name', () => {
    mutations.set(state, { votes: 0, name: 'test', polls: [{ title: 'test', votes: 0 }] })
    const idx = 0
    expect(state.polls[idx].title).to.be.eq('test')
    mutations.updateOption(state, { idx, title: 'title' })
    expect(state.polls[idx].title).to.be.eq('title')
  })

  it('should be able to create and delete a poll', () => {
    mutations.set(state, { votes: 0, name: 'test', polls: [] })
    expect(state.polls).to.be.an('array').eql([])
    mutations.addOption(state, 'title')
    expect(state.polls).to.be.an('array').eql([{ title: 'title', votes: 0 }])
    mutations.addOption(state, 'title2')
    expect(state.polls).to.be.an('array').length(2)
    mutations.deleteOption(state, 0)
    expect(state.polls).to.be.an('array').length(1)
    expect(state.polls).to.be.an('array').eql([{ title: 'title2', votes: 0 }])
    mutations.deleteOption(state, 0)
    expect(state.polls).to.be.an('array').length(0)
    expect(state.polls).to.be.an('array').eql([])
  })
})
