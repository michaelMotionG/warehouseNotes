import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/warehouseNotes/blog',
    component: ComponentCreator('/warehouseNotes/blog', 'a96'),
    exact: true
  },
  {
    path: '/warehouseNotes/blog/archive',
    component: ComponentCreator('/warehouseNotes/blog/archive', 'ede'),
    exact: true
  },
  {
    path: '/warehouseNotes/blog/authors',
    component: ComponentCreator('/warehouseNotes/blog/authors', '9ee'),
    exact: true
  },
  {
    path: '/warehouseNotes/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/warehouseNotes/blog/authors/all-sebastien-lorber-articles', 'e26'),
    exact: true
  },
  {
    path: '/warehouseNotes/blog/authors/yangshun',
    component: ComponentCreator('/warehouseNotes/blog/authors/yangshun', '085'),
    exact: true
  },
  {
    path: '/warehouseNotes/blog/first-blog-post',
    component: ComponentCreator('/warehouseNotes/blog/first-blog-post', 'dbd'),
    exact: true
  },
  {
    path: '/warehouseNotes/blog/long-blog-post',
    component: ComponentCreator('/warehouseNotes/blog/long-blog-post', '2c5'),
    exact: true
  },
  {
    path: '/warehouseNotes/blog/mdx-blog-post',
    component: ComponentCreator('/warehouseNotes/blog/mdx-blog-post', 'b79'),
    exact: true
  },
  {
    path: '/warehouseNotes/blog/tags',
    component: ComponentCreator('/warehouseNotes/blog/tags', 'dc1'),
    exact: true
  },
  {
    path: '/warehouseNotes/blog/tags/docusaurus',
    component: ComponentCreator('/warehouseNotes/blog/tags/docusaurus', '117'),
    exact: true
  },
  {
    path: '/warehouseNotes/blog/tags/facebook',
    component: ComponentCreator('/warehouseNotes/blog/tags/facebook', 'f8e'),
    exact: true
  },
  {
    path: '/warehouseNotes/blog/tags/hello',
    component: ComponentCreator('/warehouseNotes/blog/tags/hello', '7d5'),
    exact: true
  },
  {
    path: '/warehouseNotes/blog/tags/hola',
    component: ComponentCreator('/warehouseNotes/blog/tags/hola', '590'),
    exact: true
  },
  {
    path: '/warehouseNotes/blog/welcome',
    component: ComponentCreator('/warehouseNotes/blog/welcome', 'e53'),
    exact: true
  },
  {
    path: '/warehouseNotes/markdown-page',
    component: ComponentCreator('/warehouseNotes/markdown-page', '65c'),
    exact: true
  },
  {
    path: '/warehouseNotes/docs',
    component: ComponentCreator('/warehouseNotes/docs', '788'),
    routes: [
      {
        path: '/warehouseNotes/docs',
        component: ComponentCreator('/warehouseNotes/docs', '83e'),
        routes: [
          {
            path: '/warehouseNotes/docs',
            component: ComponentCreator('/warehouseNotes/docs', '395'),
            routes: [
              {
                path: '/warehouseNotes/docs/category/tutorial---basics',
                component: ComponentCreator('/warehouseNotes/docs/category/tutorial---basics', 'a94'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/warehouseNotes/docs/category/tutorial---extras',
                component: ComponentCreator('/warehouseNotes/docs/category/tutorial---extras', 'a42'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/warehouseNotes/docs/intro',
                component: ComponentCreator('/warehouseNotes/docs/intro', 'c4b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/warehouseNotes/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/warehouseNotes/docs/tutorial-basics/congratulations', 'b1a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/warehouseNotes/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/warehouseNotes/docs/tutorial-basics/create-a-blog-post', 'fc4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/warehouseNotes/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/warehouseNotes/docs/tutorial-basics/create-a-document', 'bba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/warehouseNotes/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/warehouseNotes/docs/tutorial-basics/create-a-page', '7b4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/warehouseNotes/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/warehouseNotes/docs/tutorial-basics/deploy-your-site', '4b2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/warehouseNotes/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/warehouseNotes/docs/tutorial-basics/markdown-features', '351'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/warehouseNotes/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/warehouseNotes/docs/tutorial-extras/manage-docs-versions', '0db'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/warehouseNotes/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/warehouseNotes/docs/tutorial-extras/translate-your-site', 'ff4'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/warehouseNotes/',
    component: ComponentCreator('/warehouseNotes/', 'fc4'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
