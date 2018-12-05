/* global sails, Notes */
const uuidV4 = require('uuid').v4

module.exports = {
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
      sort: 'updatedAt',
    })
    res.json(allNotes)
  },
}
