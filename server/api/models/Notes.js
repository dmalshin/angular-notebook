module.exports = {
  primaryKey: 'id',
  identity: 'Notes',
  attributes: {
    id: {
      type: 'string',
      unique: true,
      required: true,
    },
    name: {
      type: 'string',
      required: true,
    },
    priority: {
      type: 'string',
    },
    date: {
      type: 'string',
    },
  },
}
