export default {
  getName: (state) => state.name,
  getVotes: (state) => state.votes,
  getResults: (state) => state.polls.reduce((result, poll) => {
    if (poll.votes > 0) {
      result.push([poll.title, poll.votes])
    }
    return result
  }, [])
}
