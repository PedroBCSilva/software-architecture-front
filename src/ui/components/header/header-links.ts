export interface LinkType {
    name: string,
    link: string
}

const HeaderLinks: LinkType[] =
    [
        {
            name: 'Home',
            link: '/'
        },
        {
            name: 'Produtos',
            link: '/produtos'
        },
        {
            name: 'Login',
            link: '/login'
        },
    ]

const LoggedUserHeaderLinks: LinkType[] =
    [
        {
            name: 'Home',
            link: '/'
        },
        {
            name: 'Produtos',
            link: '/produtos'
        },
        {
            name: 'Minha conta',
            link: '/minha-conta'
        }
    ]


export {
    HeaderLinks,
    LoggedUserHeaderLinks,
}