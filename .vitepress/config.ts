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
    footer: {
      message:
        'Feito com ❤️ por <a href="https://github.com/douglasmiguel7" target="_blank"><strong>@douglasmiguel7</strong></a>',
    },
  },
})
