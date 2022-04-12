export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '625585305c6b0603216e0937',
                  title: 'Sanity Studio',
                  name: 'marziology-dev-studio',
                  apiId: 'cd7e3163-d8f1-4baa-a660-c99c209fd4e0'
                },
                {
                  buildHookId: '625585305c6b0603216e0938',
                  title: 'Landing pages Website',
                  name: 'marziology-dev',
                  apiId: '642be49e-027d-4aab-bf4c-f56fb0c8ded0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/and-associates/marziology-dev',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://marziology-dev.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
