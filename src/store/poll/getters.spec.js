import getters from './getters'
import { expect } from 'chai'

describe('poll.getters', () => {
  const state = {
    votes: 10,
    name: 'random',
    polls: [{
      title: 'Test',
      votes: 7
    },
    {
      title: 'Test2',
      votes: 3
    }]
  }

  it('should be able to get the name of the poll', () => {
    expect(getters.getName(state)).to.be.eq('random')
  })

  it('should be able to get the total votes of the poll', () => {
    expect(getters.getVotes(state)).to.be.eq(10)
  })
  it('should be able to get the results of the poll', () => {
    expect(getters.getResults(state)).to.be.eql([['Test', 7], ['Test2', 3]])
  })
})
