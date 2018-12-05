const NotesController = require(`${
  sails.config.appPath
}/api/controllers/NotesController.js`)

module.exports = {
  generate() {
    NotesController.initialize()
  },
}
