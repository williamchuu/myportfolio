export default {
  name: 'graphics',
  title: 'Graphics',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'mockup',
      title: 'card mockup',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'wide_mockup',
      title: 'Wide Mockup',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'projectname',
      title: 'Project Name',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'link',
      title: 'Link',
      type: 'string'
    },
    {
      name: 'duration',
      title: 'Duration',
      type: 'string'
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string'
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'string'
    },
    {
      name: 'roledescription',
      title: 'Role Description',
      type: 'array',
      of: [{ type: 'string' }]
    },
    {
      name: 'tools',
      title: 'Tools',
      type: 'string'
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number'
    },
    {
      name: 'content',
      title: 'Content',
      type: 'object',
      fields: [
        {
          name: 'sections',
          title: 'Sections',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'title',
                  title: 'Section Title',
                  type: 'string'
                },
                {
                  name: 'text',
                  title: 'Text',
                  type: 'array',
                  of: [{ type: 'text' }]
                },
                {
                  name: 'statement',
                  title: 'Statement',
                  type: 'string'
                },
                {
                  name: 'size',
                  title: 'Size',
                  type: 'string',
                  options: {
                    list: [
                      { title: 'Grid', value: 'grid' },
                      { title: 'Full', value: 'full' },
                      { title: 'Screen', value: 'screen' }
                    ]
                  }
                },
                {
                  name: 'smallImage',
                  title: 'Small Image',
                  type: 'image',
                  options: {
                    hotspot: true
                  }
                },
                {
                  name: 'image',
                  title: 'Image',
                  type: 'image',
                  options: {
                    hotspot: true
                  }
                },
                {
                  name: 'largeImage',
                  title: 'Large Image',
                  type: 'image',
                  options: {
                    hotspot: true
                  }
                },
                {
                  name: 'wideImage',
                  title: 'Wide Image',
                  type: 'image',
                  options: {
                    hotspot: true
                  }
                },
                {
                  name: 'list',
                  title: 'Solution List',
                  type: 'array',
                  of: [
                    {
                      type: 'object',
                      fields: [
                        {
                          name: 'feature',
                          title: 'Feature',
                          type: 'string'
                        },
                        {
                          name: 'solution',
                          title: 'Solution',
                          type: 'text'
                        }
                      ]
                    }
                  ]
                },
                {
                  name: 'botLine',
                  title: 'Bottom Line',
                  type: 'boolean',
                  initialValue: true
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
