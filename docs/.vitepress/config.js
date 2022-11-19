export default {
    title: 'Lucas Pereira',
    description: 'Analista e desenvolvedor de sistemas',
    themeConfig: {
        logo: "/logo.png",
        setTitle: "Lucas Pereira",
        nav: [
            { text: "Sobre", link: "/sobre" },
            { text: "Contato", link: "/contato" },
            { text: "Portfolio", link: "/portfolio" },
            { text: "Blog", link: "/blog" },
            {
                text: "Languages",
                items: [
                 { text: "Português", link: "/" },
                 { text: "English", link: "/en" },
                ],
              },
          ],
          socialLinks: [
            { icon: "github", link: "https://github.com/Evavic44/adocs" },
            { icon: "twitter", link: "https://twitter.com/victorekea" },
            { icon: "discord", link: "..." },
          ],
          sidebar: [
            {
              text: "Section A",
              collapsible: true,
              items: [
                { text: "Introduction", link: "/introduction" },
                { text: "Getting Started", link: "/getting-started" },
              ],
            },
            {
              text: "Section B",
              collapsible: false,
              items: [
                { text: "Introduction", link: "/introduction" },
                { text: "Getting Started", link: "/getting-started" },
              ],
            },
            {
              text: "Section C",
              collapsible: true,
              items: [
                { text: "Introduction", link: "/introduction" },
                { text: "Getting Started", link: "/getting-started" },
              ],
            },
          ],
          footer: {
            message: "Todos os direitos reservados.",
            copyright: "Copyright © 2022-presente Lucas Pereira",
          },
        
    },
  }