export default {
  title: 'Poem',
  name: 'poem',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string'
    },
    {
      title: 'Verse',
      name: 'verse',
      type: 'string'
    },
    {
      title: 'Author',
      name: 'author',
      type: 'reference',
      to: [{type: 'person'}]
    }
  ]
}
