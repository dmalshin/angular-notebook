/* global sails, Notes */
const fs = require('fs')
const ejs = require('ejs')
const uuidV4 = require('uuid').v4
const NoteTemplate = fs.readFileSync(
  `${sails.config.appPath}/api/templates/NoteTemplate.ejs`,
  'utf8'
)

module.exports = {
  async initialize() {
    const notes = new Array(25).fill().map((x, i) => {
      const index = i + 1
      const vars = {
        id: index < 10 ? `0${index}` : index.toString(),
      }

      return JSON.parse(ejs.render(NoteTemplate, vars))
    })

    await Notes.createEach(notes)
  },

  async create(req, res) {
    const body = req.body
    const createdNote = await Notes.create({
      ...body,
      id: uuidV4(),
    }).fetch()
    res.json(createdNote.id)
  },

  async findAll(req, res) {
    const allNotes = await Notes.find({
      sort: 'updatedAt DESC',
    })
    res.json(allNotes)
  },
}
