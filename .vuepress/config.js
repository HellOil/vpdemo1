module.exports = {
    plugins: ['@vuepress/active-header-links', '@vuepress/back-to-top', 'vuepress-plugin-smooth-scroll'] ,
    title: 'Masks Wiki',
  description: 'Uma Wiki para Máscaras de Nyarlathotep',
    themeConfig: {
        logo: '/images/octopus.png',
        smoothScroll: true,
        nav: [
            { text: 'Capítulos', link: '../capitulos/' },
            { text: 'Dramatis Personae', link: '../dramatis-personae' },
            { text: 'Pistas', link: '../pistas' },
        ],
        sidebar: [

            ['/capitulos/', 'Introdução'],
            '/capitulos/america',
            '/capitulos/quenia'

        ]
  }

}