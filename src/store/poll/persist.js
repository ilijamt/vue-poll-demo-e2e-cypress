const load = function () {
  let parsed = {
    name: '',
    votes: 0,
    polls: []
  }
  try {
    var data = window.localStorage.getItem('polls')
    parsed = JSON.parse(data)
  } catch (e) {
  }
  return parsed
}

const store = function (data) {
  window.localStorage.setItem('polls', JSON.stringify(data))
}

export { load, store }
