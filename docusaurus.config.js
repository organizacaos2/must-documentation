const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Must Blockchain',
  tagline: 'Welcome to Must Blockchain Knowledge base space',
  url: 'https://organizacaos2.github.io/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'organizacaos2', // Usually your GitHub org/user name.
  projectName: 'must-documentation', // Usually your repo name.
  trailingSlash: false,
  themeConfig: {
    navbar: {
      title: 'Must Blockchain',
      logo: {
        alt: 'Must Blockchain logo',
        src: 'img/logo.svg',
      },
      items: [       
        {
          type: 'doc',
          docId: 'intro',
          position: 'right',
          label: 'Documentation',
        },
        {
          href: 'https://github.com/organizacaos2/organizacaos2.github.io/tree/develop',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Documentation',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/organizacaos2/organizacaos2.github.io/tree/develop',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Must Blockchain`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/organizacaos2/organizacaos2.github.io',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
