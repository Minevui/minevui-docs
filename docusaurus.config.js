// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer'

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Minevui Network',
    tagline: 'Cộng đồng Minecraft Việt Nam',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://minevui.xyz',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'minevui', // Usually your GitHub org/user name.
    projectName: 'minevui-docs', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'vi',
        locales: ['vi']
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: './sidebars.js',
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/'
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/'
                },
                theme: {
                    customCss: './src/css/custom.css'
                }
            })
        ]
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            image: 'img/docusaurus-social-card.jpg',
            navbar: {
                title: 'Minevui Network',
                logo: {
                    alt: 'Minevui Network',
                    src: 'img/logo.svg'
                },
                items: [
                    {
                        type: 'docSidebar',
                        sidebarId: 'tutorialSidebar',
                        position: 'left',
                        label: 'Tài liệu'
                    },
                    { to: '/blog', label: 'Tin tức', position: 'left' },
                    {
                        href: 'https://discord.gg/minevui',
                        position: 'right',
                        className: 'navbar--discord-link'
                    },
                    {
                        href: 'https://github.com/Minevui/minevui-docs',
                        position: 'right',
                        className: 'navbar--github-link'
                    },
                    {
                        type: 'docsVersionDropdown'
                    }
                ]
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Docs',
                        items: [
                            {
                                label: 'Tài liệu',
                                to: '/docs/thong-tin-chung/gioi-thieu'
                            }
                        ]
                    },
                    {
                        title: 'Cộng đồng',
                        items: [
                            {
                                label: 'Discord',
                                href: 'https://dsc.gg/minevui'
                            }
                        ]
                    },
                    {
                        title: 'More',
                        items: [
                            {
                                label: 'GitHub',
                                href: 'https://github.com/Minevui/minevui-docs'
                            }
                        ]
                    }
                ],
                copyright: `Copyright © 2021 - ${new Date().getFullYear()} Minevui Network. Built with Docusaurus.`
            },
            prism: {
                theme: prismThemes.github,
                darkTheme: prismThemes.dracula
            },
            algolia: {
                appId: 'UYQ8KXJRL5',
                apiKey: '077121b8f7d4cbcb006f8ef6bd81d820',
                indexName: 'minevui'
            }
        })
}

export default config
