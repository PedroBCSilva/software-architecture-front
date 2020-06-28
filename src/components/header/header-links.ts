export interface Link {
    name: string,
    link: string
}

export const HeaderLinks:Link[] = [
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
    },
    {
        name: 'Login',
        link: '/login'
    },
]