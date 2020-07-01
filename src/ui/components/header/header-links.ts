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
        name: 'Login',
        link: '/login'
    },
]