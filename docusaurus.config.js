/** @type {import('@docusaurus/types').Config} */
const config = {
  baseUrl: "/",
  favicon: "img/favicon.ico",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  organizationName: "sablierhq",
  projectName: "sablier-docs",
  tagline: "Documentation and Guides for Sablier",
  title: "Sablier Docs",
  url: "https://docs.sablier.finance",
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          editUrl: "https://github.com/sablierhq/docs/tree/main/",
          includeCurrentVersion: true,
          path: "protocol",
          routeBasePath: "protocol/",
          sidebarPath: require.resolve("./sidebars.js"),
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        appId: "KF9W3YD3YG",
        apiKey: "02ccece2d4178d2816db18726d6d9ba8",
        indexName: "sablier",
      },
      announcementBar: {
        backgroundColor: "#E77B3B",
        content:
          'Please note that a stream creation transaction MUST be processed by the blockchain before the start time of the stream, otherwise it will fail. Learn more about this <a target="_blank" rel="noopener noreferrer" href="/protocol/faq/known-issues">here</a>, or reach out on <a target="_blank" rel="noopener noreferrer" href="https://discord.gg/bSwRCwWRsT">Discord</a>.',
        isCloseable: true,
        id: "start_time_banner",
        textColor: "#fff",
      },
      colorMode: {
        // "light" | "dark"
        defaultMode: "light",

        // Hides the switch in the navbar. Useful if you want to support a single color mode.
        disableSwitch: false,

        // Whether we should use the `prefers-color-scheme media-query` using user system preferences, instead of the
        // hardcoded `defaultMode`.
        respectPrefersColorScheme: true,
      },
      footer: {
        links: [
          {
            title: "Company",
            items: [
              {
                label: "About",
                href: "https://sablierlabs.co.uk",
              },
              {
                label: "Risk Notice",
                href: "https://sablier.finance/risk-notice",
              },
              {
                label: "Terms of Service",
                href: "https://sablier.finance/terms-of-service",
              },
              {
                label: "Privacy Policy",
                href: "https://docs.google.com/document/d/10OgbKJkoLnZ_pJtF6SAfcP7ufOC18K3N39MH538XeiI",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Twitter",
                href: "https://twitter.com/sablier",
              },
              {
                label: "Discord",
                href: "https://discord.gg/bSwRCwWRsT",
              },
              {
                label: "Blog",
                href: "https://medium.com/sablier",
              },
              {
                label: "Branding",
                href: "https://github.com/sablierhq/branding",
              },
            ],
          },
          {
            title: "Developers",
            items: [
              {
                label: "Core Protocol",
                href: "https://github.com/sablierhq/sablier",
              },
              {
                label: "Deployments",
                href: "https://docs.sablier.finance/protocol/guides/chains",
              },
              {
                label: "Subgraph",
                href: "https://github.com/sablierhq/subgraph",
              },
            ],
          },
        ],
        style: "dark",
      },
      navbar: {
        items: [
          {
            label: "Guides",
            position: "left",
            to: "/protocol/guides/getting-started",
          },
          {
            label: "Contracts",
            position: "left",
            to: "/protocol/contracts/non-constant-functions",
          },
          {
            label: "Subgraph",
            position: "left",
            to: "/protocol/subgraph/endpoints",
          },
          {
            label: "FAQ",
            position: "left",
            to: "/protocol/faq/basics",
          },
          {
            label: "Discord",
            position: "right",
            to: "https://discord.gg/bSwRCwWRsT",
          },
          {
            label: "GitHub",
            position: "right",
            to: "https://github.com/sablierhq",
          },
        ],
        logo: {
          alt: "Sablier Logo",
          src: "img/logo.svg",
        },
        title: "Sablier Docs",
      },
      prism: {
        additionalLanguages: ["solidity"],
        darkTheme: require("prism-react-renderer/themes/dracula"),
        theme: require("prism-react-renderer/themes/github"),
      },
    }),
};

module.exports = config;
