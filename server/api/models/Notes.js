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
    },
    priority: {
      type: 'string',
    },
    date: {
      type: 'string',
    },
  },
}
