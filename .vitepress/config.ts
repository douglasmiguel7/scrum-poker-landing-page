import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Estime Ai',
  description:
    'Ferramenta gratuita de Scrum Poker para times ágeis estimarem tarefas com precisão. Simples, online e sem complicações.',
  outDir: 'dist',
  srcDir: 'src',
  cleanUrls: true,
  lang: 'pt-BR',
  appearance: false,
  lastUpdated: true,
  sitemap: {
    lastmodDateOnly: true,
    hostname: 'https://estimeai.com.br',
    xmlns: {
      image: false,
      news: false,
      video: false,
      xhtml: false,
    },
  },
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
    [
      'meta',
      { name: 'google-adsense-account', content: 'ca-pub-9100351068609078' },
    ],
    [
      'script',
      {
        async: '',
        src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9100351068609078',
        crossorigin: 'anonymous',
      },
    ],
    [
      'script',
      {
        async: '',
        src: 'https://www.googletagmanager.com/gtag/js?id=G-5613K0J7FR',
      },
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-5613K0J7FR');`,
    ],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/favicon.png',
    nav: [
      { text: 'Como funciona', link: '/como-funciona' },
      { text: 'Guias', link: '/guias/', activeMatch: '/guias/' },
      { text: 'Sobre', link: '/sobre' },
      { text: 'Contato', link: '/contato' },
      { text: 'Abrir o app', link: 'https://app.estimeai.com.br' },
    ],
    sidebar: {
      '/guias/': [
        {
          text: 'Guias',
          items: [
            { text: 'Todos os guias', link: '/guias/' },
            { text: 'O que é Scrum Poker', link: '/guias/o-que-e-scrum-poker' },
            {
              text: 'Story points e Fibonacci',
              link: '/guias/story-points-e-fibonacci',
            },
            {
              text: 'Como conduzir uma sessão',
              link: '/guias/como-conduzir-uma-sessao',
            },
            {
              text: 'Scrum Poker com time remoto',
              link: '/guias/scrum-poker-remoto',
            },
            {
              text: 'Quando os votos divergem',
              link: '/guias/votos-divergentes',
            },
          ],
        },
      ],
    },
    sidebarMenuLabel: 'Menu',
    darkModeSwitchLabel: 'Aparência',
    externalLinkIcon: true,
    outline: { label: 'Nesta página' },
    returnToTopLabel: 'Voltar ao topo',
    lastUpdated: { text: 'Atualizado em' },
    docFooter: { prev: 'Anterior', next: 'Próxima' },
    footer: {
      message:
        'Feito com ❤️ por <a href="https://cafezinholabs.com" target="_blank" rel="noopener"><strong>Cafezinho Labs</strong></a>',
      copyright:
        '<a href="/termos">Termos de Uso</a> · <a href="/privacidade">Política de Privacidade</a>',
    },
  },
})
