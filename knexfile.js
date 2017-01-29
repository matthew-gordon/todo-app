// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postegres://localhost/todo_app'
  },
  test: {
    client: 'pg',
    connection: 'postegres://localhost/todo_app_test'
  },
  development: {
    client: 'pg',
    connection: process.env.DATBASE_URL
  },

};
