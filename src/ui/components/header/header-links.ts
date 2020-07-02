import { RoutePaths } from  '../../../constants/routes'

export interface LinkType {
    name: string,
    link: string
}

const HeaderLinks: LinkType[] =
    [
        {
            name: 'Home',
            link: RoutePaths.HOME,
        },
        {
            name: 'Produtos',
            link: RoutePaths.Products,
        },
        {
            name: 'Login',
            link: RoutePaths.LOGIN,
        },
    ]

const LoggedUserHeaderLinks: LinkType[] =
    [
        {
            name: 'Home',
            link: RoutePaths.HOME,
        },
        {
            name: 'Produtos',
            link: RoutePaths.Products
        },
        {
            name: 'Minha conta',
            link: RoutePaths.MyAccount
        }
    ]


export {
    HeaderLinks,
    LoggedUserHeaderLinks,
}