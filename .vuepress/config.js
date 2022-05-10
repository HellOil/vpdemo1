module.exports = {
    title: 'Masks Wiki',
    description: 'Uma Wiki para Máscaras de Nyarlathotep',
    themeConfig: {
        logo: '/images/octopus.png',
        nav: [
            { text: 'Capítulos', link: '../capitulos/'},
            { text: 'Dramatis Personae', link: '../dramatis-personae'},
            { text: 'Pistas', link: '../pistas'},
        ],
        sidebar: [

            ['/capitulos/', 'Introdução'],
            '/capitulos/america',
            '/capitulos/quenia'

        ]
    }
}