import PersonIcon from 'react-icons/lib/md/person'

export default {
  title: 'Person',
  icon: PersonIcon,
  name: 'person',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      description: 'What do you go by?',
      type: 'string'
    },
    {
      name: 'photo',
      title: 'Photo',
      description: '512x512 px, ideally',
      type: 'image'
    },
    {
      title: 'Bio',
      name: 'bio',
      type: 'text'
    }
  ]
}
