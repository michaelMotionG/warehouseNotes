import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/employee-portal-web/zh-Hans/blog',
    component: ComponentCreator('/employee-portal-web/zh-Hans/blog', 'd41'),
    exact: true
  },
  {
    path: '/employee-portal-web/zh-Hans/blog/archive',
    component: ComponentCreator('/employee-portal-web/zh-Hans/blog/archive', '9a5'),
    exact: true
  },
  {
    path: '/employee-portal-web/zh-Hans/blog/authors',
    component: ComponentCreator('/employee-portal-web/zh-Hans/blog/authors', '75d'),
    exact: true
  },
  {
    path: '/employee-portal-web/zh-Hans/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/employee-portal-web/zh-Hans/blog/authors/all-sebastien-lorber-articles', 'b52'),
    exact: true
  },
  {
    path: '/employee-portal-web/zh-Hans/blog/authors/yangshun',
    component: ComponentCreator('/employee-portal-web/zh-Hans/blog/authors/yangshun', 'bfd'),
    exact: true
  },
  {
    path: '/employee-portal-web/zh-Hans/blog/first-blog-post',
    component: ComponentCreator('/employee-portal-web/zh-Hans/blog/first-blog-post', 'f44'),
    exact: true
  },
  {
    path: '/employee-portal-web/zh-Hans/blog/long-blog-post',
    component: ComponentCreator('/employee-portal-web/zh-Hans/blog/long-blog-post', '7fc'),
    exact: true
  },
  {
    path: '/employee-portal-web/zh-Hans/blog/mdx-blog-post',
    component: ComponentCreator('/employee-portal-web/zh-Hans/blog/mdx-blog-post', '288'),
    exact: true
  },
  {
    path: '/employee-portal-web/zh-Hans/blog/tags',
    component: ComponentCreator('/employee-portal-web/zh-Hans/blog/tags', '6c4'),
    exact: true
  },
  {
    path: '/employee-portal-web/zh-Hans/blog/tags/docusaurus',
    component: ComponentCreator('/employee-portal-web/zh-Hans/blog/tags/docusaurus', 'da4'),
    exact: true
  },
  {
    path: '/employee-portal-web/zh-Hans/blog/tags/facebook',
    component: ComponentCreator('/employee-portal-web/zh-Hans/blog/tags/facebook', 'c46'),
    exact: true
  },
  {
    path: '/employee-portal-web/zh-Hans/blog/tags/hello',
    component: ComponentCreator('/employee-portal-web/zh-Hans/blog/tags/hello', 'b8d'),
    exact: true
  },
  {
    path: '/employee-portal-web/zh-Hans/blog/tags/hola',
    component: ComponentCreator('/employee-portal-web/zh-Hans/blog/tags/hola', '1ff'),
    exact: true
  },
  {
    path: '/employee-portal-web/zh-Hans/blog/welcome',
    component: ComponentCreator('/employee-portal-web/zh-Hans/blog/welcome', 'cdb'),
    exact: true
  },
  {
    path: '/employee-portal-web/zh-Hans/docs',
    component: ComponentCreator('/employee-portal-web/zh-Hans/docs', '306'),
    routes: [
      {
        path: '/employee-portal-web/zh-Hans/docs',
        component: ComponentCreator('/employee-portal-web/zh-Hans/docs', '5df'),
        routes: [
          {
            path: '/employee-portal-web/zh-Hans/docs',
            component: ComponentCreator('/employee-portal-web/zh-Hans/docs', '594'),
            routes: [
              {
                path: '/employee-portal-web/zh-Hans/docs/category/brain-hive',
                component: ComponentCreator('/employee-portal-web/zh-Hans/docs/category/brain-hive', 'b11'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/employee-portal-web/zh-Hans/docs/category/collab-center',
                component: ComponentCreator('/employee-portal-web/zh-Hans/docs/category/collab-center', '3f1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/employee-portal-web/zh-Hans/docs/category/everything-about-motion-g',
                component: ComponentCreator('/employee-portal-web/zh-Hans/docs/category/everything-about-motion-g', '26d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/employee-portal-web/zh-Hans/docs/category/future-lab',
                component: ComponentCreator('/employee-portal-web/zh-Hans/docs/category/future-lab', '74f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/employee-portal-web/zh-Hans/docs/category/growth-guide',
                component: ComponentCreator('/employee-portal-web/zh-Hans/docs/category/growth-guide', 'e50'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/employee-portal-web/zh-Hans/docs/category/inner-application',
                component: ComponentCreator('/employee-portal-web/zh-Hans/docs/category/inner-application', 'ac0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/employee-portal-web/zh-Hans/docs/category/lunchpad',
                component: ComponentCreator('/employee-portal-web/zh-Hans/docs/category/lunchpad', 'ad1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/employee-portal-web/zh-Hans/docs/category/production-zone',
                component: ComponentCreator('/employee-portal-web/zh-Hans/docs/category/production-zone', 'a08'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/employee-portal-web/zh-Hans/docs/category/resource-center',
                component: ComponentCreator('/employee-portal-web/zh-Hans/docs/category/resource-center', '76b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/employee-portal-web/zh-Hans/docs/category/welcome-kit',
                component: ComponentCreator('/employee-portal-web/zh-Hans/docs/category/welcome-kit', '3ec'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/employee-portal-web/zh-Hans/docs/category/work-navigator',
                component: ComponentCreator('/employee-portal-web/zh-Hans/docs/category/work-navigator', '014'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/employee-portal-web/zh-Hans/docs/collab-center/OAsystem',
                component: ComponentCreator('/employee-portal-web/zh-Hans/docs/collab-center/OAsystem', 'fed'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/employee-portal-web/zh-Hans/docs/company-information/BSC',
                component: ComponentCreator('/employee-portal-web/zh-Hans/docs/company-information/BSC', '170'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/employee-portal-web/zh-Hans/docs/company-information/company-culture',
                component: ComponentCreator('/employee-portal-web/zh-Hans/docs/company-information/company-culture', '19a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/employee-portal-web/zh-Hans/docs/company-information/introduction',
                component: ComponentCreator('/employee-portal-web/zh-Hans/docs/company-information/introduction', '28e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/employee-portal-web/zh-Hans/docs/company-information/office-tour',
                component: ComponentCreator('/employee-portal-web/zh-Hans/docs/company-information/office-tour', 'f95'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/employee-portal-web/zh-Hans/docs/company-information/organizational-structure',
                component: ComponentCreator('/employee-portal-web/zh-Hans/docs/company-information/organizational-structure', '4fa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/employee-portal-web/zh-Hans/docs/home/notication',
                component: ComponentCreator('/employee-portal-web/zh-Hans/docs/home/notication', '397'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/employee-portal-web/zh-Hans/docs/home/ownVE',
                component: ComponentCreator('/employee-portal-web/zh-Hans/docs/home/ownVE', '949'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/employee-portal-web/zh-Hans/docs/home/privateVE',
                component: ComponentCreator('/employee-portal-web/zh-Hans/docs/home/privateVE', '79f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/employee-portal-web/zh-Hans/docs/home/pubilcVE',
                component: ComponentCreator('/employee-portal-web/zh-Hans/docs/home/pubilcVE', '546'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/employee-portal-web/zh-Hans/docs/inner-application/BMS',
                component: ComponentCreator('/employee-portal-web/zh-Hans/docs/inner-application/BMS', 'cd5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/employee-portal-web/zh-Hans/docs/inner-application/employee-portal-management-system',
                component: ComponentCreator('/employee-portal-web/zh-Hans/docs/inner-application/employee-portal-management-system', 'bef'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/employee-portal-web/zh-Hans/docs/inner-application/OA-system',
                component: ComponentCreator('/employee-portal-web/zh-Hans/docs/inner-application/OA-system', '418'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/employee-portal-web/zh-Hans/docs/inner-application/Teams',
                component: ComponentCreator('/employee-portal-web/zh-Hans/docs/inner-application/Teams', 'b15'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/employee-portal-web/zh-Hans/docs/intro',
                component: ComponentCreator('/employee-portal-web/zh-Hans/docs/intro', '8d0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/employee-portal-web/zh-Hans/docs/process-guidelines/Finance',
                component: ComponentCreator('/employee-portal-web/zh-Hans/docs/process-guidelines/Finance', '598'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/employee-portal-web/zh-Hans/docs/process-guidelines/HR',
                component: ComponentCreator('/employee-portal-web/zh-Hans/docs/process-guidelines/HR', '945'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/employee-portal-web/zh-Hans/docs/process-guidelines/IT',
                component: ComponentCreator('/employee-portal-web/zh-Hans/docs/process-guidelines/IT', '3cb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/employee-portal-web/zh-Hans/docs/process-guidelines/process-description',
                component: ComponentCreator('/employee-portal-web/zh-Hans/docs/process-guidelines/process-description', 'f1c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/employee-portal-web/zh-Hans/docs/process-guidelines/safety-compliance',
                component: ComponentCreator('/employee-portal-web/zh-Hans/docs/process-guidelines/safety-compliance', '282'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/employee-portal-web/zh-Hans/docs/process-guidelines/template-form',
                component: ComponentCreator('/employee-portal-web/zh-Hans/docs/process-guidelines/template-form', 'c87'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/employee-portal-web/zh-Hans/docs/prodection-zone/monitor',
                component: ComponentCreator('/employee-portal-web/zh-Hans/docs/prodection-zone/monitor', '6b6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/employee-portal-web/zh-Hans/docs/prodection-zone/MotionG',
                component: ComponentCreator('/employee-portal-web/zh-Hans/docs/prodection-zone/MotionG', '707'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/employee-portal-web/zh-Hans/docs/prodection-zone/pay',
                component: ComponentCreator('/employee-portal-web/zh-Hans/docs/prodection-zone/pay', '240'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/employee-portal-web/zh-Hans/docs/prodection-zone/resik-control',
                component: ComponentCreator('/employee-portal-web/zh-Hans/docs/prodection-zone/resik-control', '59a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/employee-portal-web/zh-Hans/docs/product-tech/AI-tools',
                component: ComponentCreator('/employee-portal-web/zh-Hans/docs/product-tech/AI-tools', '4e4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/employee-portal-web/zh-Hans/docs/product-tech/developer-support',
                component: ComponentCreator('/employee-portal-web/zh-Hans/docs/product-tech/developer-support', '4f0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/employee-portal-web/zh-Hans/docs/product-tech/MVP',
                component: ComponentCreator('/employee-portal-web/zh-Hans/docs/product-tech/MVP', '933'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/employee-portal-web/zh-Hans/docs/product-tech/product-demo',
                component: ComponentCreator('/employee-portal-web/zh-Hans/docs/product-tech/product-demo', '25f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/employee-portal-web/zh-Hans/docs/product-tech/technical-white-paper',
                component: ComponentCreator('/employee-portal-web/zh-Hans/docs/product-tech/technical-white-paper', 'dc6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/employee-portal-web/zh-Hans/docs/resource-center/growth-guide/industry-news',
                component: ComponentCreator('/employee-portal-web/zh-Hans/docs/resource-center/growth-guide/industry-news', '6ed'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/employee-portal-web/zh-Hans/docs/resource-center/growth-guide/new-technology',
                component: ComponentCreator('/employee-portal-web/zh-Hans/docs/resource-center/growth-guide/new-technology', 'e26'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/employee-portal-web/zh-Hans/docs/resource-center/growth-guide/training-course',
                component: ComponentCreator('/employee-portal-web/zh-Hans/docs/resource-center/growth-guide/training-course', '456'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/employee-portal-web/zh-Hans/docs/resource-center/resources-center/brand',
                component: ComponentCreator('/employee-portal-web/zh-Hans/docs/resource-center/resources-center/brand', '7a7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/employee-portal-web/zh-Hans/docs/resource-center/resources-center/FAQ',
                component: ComponentCreator('/employee-portal-web/zh-Hans/docs/resource-center/resources-center/FAQ', '756'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/employee-portal-web/zh-Hans/docs/resource-center/welcome-kit/enviroment',
                component: ComponentCreator('/employee-portal-web/zh-Hans/docs/resource-center/welcome-kit/enviroment', '5fe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/employee-portal-web/zh-Hans/docs/resource-center/welcome-kit/HR-Reimbursement',
                component: ComponentCreator('/employee-portal-web/zh-Hans/docs/resource-center/welcome-kit/HR-Reimbursement', '18b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/employee-portal-web/zh-Hans/docs/resource-center/welcome-kit/stock-option-description',
                component: ComponentCreator('/employee-portal-web/zh-Hans/docs/resource-center/welcome-kit/stock-option-description', 'dfc'),
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
    path: '/employee-portal-web/zh-Hans/',
    component: ComponentCreator('/employee-portal-web/zh-Hans/', '77e'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
