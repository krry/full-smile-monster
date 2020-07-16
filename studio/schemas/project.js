export default {
  title: 'Project',
  name: 'project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'cover',
      title: 'Cover',
      type: 'image'
    },
    {
      name: 'concept',
      title: 'Concept',
      type: 'array',
      description: 'Which legos are in this set?',
      of: [{
        type: 'reference',
        to: [{ type: 'idea' }]
      }]
    }
  ]
}

