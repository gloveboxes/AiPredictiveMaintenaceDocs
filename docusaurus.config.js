// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AI Powered Anomaly Detection for Predictive Maintenance',
  tagline: 'AI Powered Anomaly Detection for Predictive Maintenance',

  url: 'https://gloveboxes.github.io/',
  baseUrl: '/AiPredictiveMaintenanceDocs/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'gloveboxes', // Usually your GitHub org/user name.
  projectName: 'AiPredictiveMaintenanceDocs', // Usually your repo name.

  deploymentBranch: 'gh-pages', // Branch that GitHub pages will deploy from.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/gloveboxes/AiPredictiveMaintenanceDocs/tree/main',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'AI Powered Anomaly Detection for Predictive Maintenance',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.png',
        },
        items: [

        ],
      },
      footer: {
        style: 'dark',
        links: [
                 
        ],
        copyright: `Copyright © ${new Date().getFullYear()} AI Powered Anomaly Detection for Predictive Maintenance Tutorial. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
