import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const organizationName = "motiong-io";
const projectName = "portal_website_docusaurus";

const config: Config = {
  title: 'Motion G',
  tagline: 'AI are cool',
  favicon: 'img/icon.png',
  staticDirectories: ['static'],

  // Set the production url of your site here
  // url: 'https://www.motiong.net',
  url: 'https://motiong-io.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/employee-portal-web/',
  

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName,
  projectName,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en','zh-Hans'],
    localeConfigs: {
      en: {
        htmlLang: 'en-GB',
      },
      'zh-Hans': {
        direction: 'ltr',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            //'https://github.com/${organizationName}/${projectName}/tree/main/',
            'https://github.com/motiong-io/employee-portal-web/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            //'https://github.com/${organizationName}/${projectName}/tree/main/',
            'https://github.com/motiong-io/employee-portal-web/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: '',
      logo: {
        alt: 'My Site Logo',
        src: 'img/LOGO-standard.svg',
      },
      items: [
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        // {to: '/blog', label: 'Blog', position: 'left'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Contact',
              href: 'https://www.motiong.ai/company/contact-us',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'AI',
              href: 'https://www.motiong.ai/',
            },
            {
              label: 'Map',
              href: 'https://www.google.com/maps/place/Motion+G/@1.2983473,103.7898541,3a,75y,134.54h,90t/data=!3m7!1e1!3m5!1sn9gorKap7TC2mbTNbr2XwQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D0%26panoid%3Dn9gorKap7TC2mbTNbr2XwQ%26yaw%3D134.54282!7i16384!8i8192!4m9!3m8!1s0x31da1b60f6466ea9:0x9ae0b0f63acd4124!8m2!3d1.2980841!4d103.7901215!10e5!14m1!1BCgIgAQ!16s%2Fg%2F11vq233gmm?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
  
};

export default config;
