export interface INavbarItem {
    map?: any;
    key?: number;
    name: string,
    href: string
}

export const navbarItems: INavbarItem[] = [
    {key: 1, name: 'Home', href: '/'},
    {key: 2, name: 'Start Code', href: '/code/'},
    {key: 3, name: 'Support Us', href: '/support'},
    {key: 4, name: 'Sign In', href: '/signin'}
]