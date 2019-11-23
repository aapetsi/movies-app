const db = require('../data/db-config')

module.exports = {
  find,
  findBy,
  save,
  findById
}

function find() {
  return db('users')
}

function findBy({ username, email }) {
  return db('users')
    .where({ username })
    .orWhere({ email })
    .first()
}

function findById(id) {
  return db('users')
    .where({ user_id: Number(id) })
    .first()
}

function save(user) {
  return db('users')
    .insert(user)
    .then(ids => findById(ids[0]))
}
