export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f88396fd161ad12280135e0',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-8rapdayq',
                  apiId: 'dadffef9-c5a4-432c-9304-8b141e9b5f41'
                },
                {
                  buildHookId: '5f88396f5f820b14b875f40b',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-iip2ehfo',
                  apiId: '0f8bf0dd-21ac-467b-93e1-27f22071929b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/raymondpe/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-iip2ehfo.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
